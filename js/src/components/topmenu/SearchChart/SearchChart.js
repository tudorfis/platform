
export default class extends modules.webcomponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    afterRender() {
        const nodes = []

        modules.tree.node.traverseNode( node => {
            nodes.push( node )
        })
        
        const resultsElement = utils.html.create_element( 'div', '', this.refs.wrapper, {
            'class': [ 'results', 'hide', 'fade-in', 'scroll-y' ]
        })

        const resultsNoResult = utils.html.create_element( 'p', 'nu sa gasit nici-un rezultat', resultsElement, {
            'class': [ 'no-results', 'hide' ],
        })
        
        nodes.forEach( node => {
            const itemHtml = ` 
                <img src="${ node.image }" />
                <p class="elipsis">${ node.title }</p>
            `
            
            const item = utils.html.create_element( 'div', itemHtml, resultsElement, {
                'class': [ 'item' ],
                'id': node.HTMLid
            })

            item.addEventListener( 'click', _ => {
                resetResults()
                
                modules.video.hideVideo()
                modules.code.hideCode()

                findElement( node )
            })
        })
        
        const inputDebounce = utils.events.debounce(value => {
            if ( !value.length ) {
                utils.dom.qsa( '.search-chart .results > .item' ).forEach( element => element.classList.remove( 'hide' ))
                resultsNoResult.classList.add( 'hide' )
                return
            }

            let hiddenItems = 0

            nodes.forEach( node => {
                const resultItem = utils.dom.qs( `.search-chart .results .item[id="${ node.HTMLid }"]` )
                const hideNode = !node.title.toLowerCase().includes( value.toLowerCase() ) 

                hiddenItems += hideNode ? 1 : 0
                resultItem.classList.toggle( 'hide', hideNode )
            })

            resultsNoResult.classList.toggle('hide', hiddenItems !== nodes.length)
        }, 1)

        this.refs.input.addEventListener( 'input', e => {
            const value = e.target.value.trim()
            
            utils.events.dispatch( 'search-input', value )
            resultsElement.classList.remove('hide')
            
            autoAdjustInput( this.refs.input, value )
            resetResults()
            inputDebounce( value )
        })
        
        this.refs.input.addEventListener( 'focus', e => {
            resultsElement.classList.remove('hide')
            resetResults()
            inputDebounce( this.refs.input.value )
        })

        this.refs.input.addEventListener( 'blur', e => {
            setTimeout(_ => {
                resultsElement.classList.add('hide')
            }, 100)
        })
    }
}

function autoAdjustInput( input, value ) {
    input.style.width = value.length > 17 ? `${value.length*11.7}px` : '210px'
}

function resetResults() {
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
        utils.html.scroll_to_element( nodeElement )
    }
}
