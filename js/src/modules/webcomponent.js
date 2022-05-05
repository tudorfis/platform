
export default class extends HTMLElement {
    #finished = false

    constructor({ 
        templateContent = '',
        componentUrl = '',
        props = [],
        data = {},
        withCss = false,
    }) {
        super()
        
        this.templateContent = templateContent
        this.componentUrl = componentUrl
        this.props = props
        this.withCss = withCss

        this.storeData( data )
        this.init()
    }
    attributeChangedCallback(prop, oldValue, newValue) {
        if ( !this.#finished ) return

        const callbackFn = this[ `${ prop }Update`]

        if ( 
            callbackFn === undefined ||
            typeof callbackFn !== 'function' 
        ) return

        callbackFn.call( this, ...[newValue, oldValue] )
    }
    storeData( data ) {
        const vm = this

        this.data = new Proxy( utils.object.deepclone( data ), {
            get( target, prop ) {
                const value = target[prop]
                return value                
            },
            set( target, prop, value ) {
                target[ prop ] = value
                vm.renderByProp( prop )
                return true
            }
        })
    }
    async init() {
        this.loaded = new Promise( resolve => {
            this.finishedLoading = resolve
        })

        if ( this.componentUrl ) {
            await this.import()
        }

        this.render()
    }
    async import() {
        const templateCss = this.componentUrl.replace( /js$/, 'css' )
        const templateHtml = this.componentUrl.replace( /js$/, 'html' )
        
        this.templateContent = `
            ${ this.withCss ? `<style>${ await (await fetch( templateCss)).text() }</style>` : '' }
            ${ await (await fetch( templateHtml)).text() }
        `
    }
    render() {
        const template = document.createElement( 'template' )
        template.innerHTML = this.templateContent
        
        this.innerHTML = ''
        this.appendChild( template.content.cloneNode( true ) )

        this.storeRefs()
        this.attachEvents()
        this.attachRenders()
        this.propsUpdate()
        this.callAfterRender()

        this.finishedLoading( this )
        this.#finished = true
    }
    propsUpdate() {
        this.props.forEach( prop => {
            if ( 
                this[ `${ prop }Update` ] === undefined ||
                typeof this[ `${ prop }Update` ] !== 'function' 
            ) return

            this[ `${ prop }Update` ]( this.attr( prop ) )
        })
    }
    callAfterRender() {
        this.handleMobileClasses()
        this[ 'afterRender' ] ? this[ 'afterRender' ]() : void(0)
    }
    handleMobileClasses() {
        if ( !utils.mobile.isMobile() ) return

        this.refs?.wrapper?.classList?.toggle( 'is-portrait', screen.availHeight > screen.availWidth )
        this.refs?.wrapper?.classList?.toggle( 'is-landscape', screen.availHeight < screen.availWidth )
        this.refs?.wrapper?.classList?.add( 'is-mobile' )
    }

    #refs = {}
    storeRefs() {
        this.qsa( '[ref]' ).forEach( element => {
            const refName = element.getAttribute( 'ref' )
            this.#refs[ refName ] = element
            element.removeAttribute( 'ref' )
        })
    }
    attachEvents() {
        [
            'click',
            'mouseover'
        ].forEach( eventName => {
            this.qsa( `[${ eventName }]` ).forEach( element => {
                const eventFn = element.getAttribute( eventName )
                
                if ( 
                    this[ eventFn ] === undefined ||
                    typeof this[ eventFn ] !== 'function'
                ) return

                element.addEventListener( eventName, e => {
                    this[ eventFn ].call( this, e )
                })

                element.removeAttribute( eventName )
            })
        })
    }

    #renders = {}
    #rendersConfig = {
        'show': function( vm, element, prop ) {
            element.style.display = vm.data[ prop ] ? '' : 'none'
        },
        'hide': function(  vm, element, prop ) {
            element.style.display = vm.data[ prop ] ? 'none' : ''
        },
    }
    attachRenders() {
        Object.keys( this.#rendersConfig ).forEach( binding => {
            this.#renders[ binding ] = {}

            this.qsa( `[${ binding }]` ).forEach( element => {
                const prop = element.getAttribute( binding )

                this.#renders[ binding ][ prop ] = this.#renders[ binding ][ prop ] || []
                this.#renders[ binding ][ prop ].push( element )

                this.#rendersConfig[ binding ]( this, element, prop )
            })
        })
    }
    renderByProp( prop ) {
        const arr = Object.keys( this.#renders ).map( key => {
            return [ key, this.#renders[ key ][ prop ] ]
        }).flat()

        while ( arr.length ) {
            const elements = arr.pop()
            const binding = arr.pop()

            elements.forEach( element => {
                this.#rendersConfig[ binding ]( this, element, prop )
            })
        }
    }

    get refs() {
        return this.#refs
    }
    qs( query ) {
        return this.querySelector( query )
    }
    qsa( query ) {
        return [ ...this.querySelectorAll( query ) ]
    }
    attr( attribute ) {
        return this.getAttribute( attribute )
    }

    static htmlSlots( vm = null, wrapperSelector = '', slots = [], cb = _ => {} ) {
        const wrapper = vm.qs( wrapperSelector )

        if ( wrapper.finished ) {
            doSlots()
        } else {
            wrapper.loaded.then(_ => {
                doSlots()
            })
        }

        function doSlots() {
            slots.forEach( slotName => {
                const slotElement = utils.dom.qs( `slot[name="${slotName}"]` ) 
                const template = vm.qs(`template[id="${slotName}"]`).cloneNode( true )
                
                slotElement.innerHTML = template.innerHTML
                cb(slotElement)
            })
        }
    }
}