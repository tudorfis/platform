

export default class extends modules.webcomponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    afterRender() {
        const inputDebounce = utils.events.debounce(value => {
            if ( !value.length ) return

            const results = []

            modules.tree.node.traverseNode( node => {
                if ( node.title.toLowerCase().includes( value.toLowerCase() ) ) {
                    results.push( node )
                }
            })
            
            const resultsElement = utils.html.create_element( 'div', '', this.refs.wrapper, {
                'class': [ 'results', 'fade-in', 'scroll-y' ]
            })

            const resultsNoResult = utils.html.create_element( 'p', 'nu sa gasit nici-un rezultat', resultsElement, {
                'class': [ 'no-results' ]
            })
           
            results.forEach( node => {
                const itemHtml = ` 
                    <img src="${node.image}" />
                    <p class="elipsis">${node.title}</p>
                `
                
                const item = utils.html.create_element( 'div', itemHtml, resultsElement, {
                    'class': [ 'item' ]
                })

                item.addEventListener( 'click', _ => {
                    removeResults()
                    
                    modules.video.hideVideo()
                    modules.code.hideCode()

                    findElement(node)
                })
            })

            resultsNoResult.classList.toggle('hide', results.length)
        }, 330)

        this.refs.input.addEventListener( 'input', e => {
            const value = e.target.value.trim()
            
            autoAdjustInput( this.refs.input, value )
            removeResults()
            inputDebounce( value )
        })

        this.refs.input.addEventListener( 'focus', e => {
            removeResults()
            inputDebounce( this.refs.input.value )
        })
    }
}

function autoAdjustInput( input, value ) {
    input.style.width = value.length > 17 ? `${value.length*11.7}px` : '210px'
}

function removeResults() {
    utils.dom.qs('.results')?.remove()
    utils.dom.qsa( '.node-icons' ).forEach( element => element.classList.add( 'hide' ))
}

function findElement(node) {
    if ( node.parentId ) {
        const nodeElements = []
        modules.tree.node.traverseNodeUp( node.parentId, nodeId => {
            nodeElements.unshift( modules.tree.node.findNodeElement( nodeId ) )
        })

        let timeoutTime = 0
        for ( const nodeElement of nodeElements ) {
            if ( nodeElement.classList.contains( 'collapsed' ) ) {
                setTimeout(_ => {
                    utils.dom.qs( '.collapse-switch', nodeElement ).click()
                    
                    if ( nodeElement.id === node.parentId ) {
                        highlightElement( node )
                    }
                }, timeoutTime)
                timeoutTime += 800
            }
            else if ( nodeElement.id === node.parentId ) {
                highlightElement( node )
            }
        }
    } else {
        highlightElement( node )
    }

    function highlightElement( node ) {
        const nodeElement = modules.tree.node.findNodeElement( node.HTMLid )
        modules.tree.handleNodeLoad( nodeElement )
    }
}
