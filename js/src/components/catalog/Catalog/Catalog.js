
export default class extends modules.webcomponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    afterRender() {
        const params = utils.linkode.get_url_params()
        utils.html.handle_location( params, '/#/catalog' )

        if ( params.type !== 'catalog' ) return
        
        modules.general.initIcons()
        app.catalog = utils.dom.qs( app.catalog.selector )

        app.catalog.classList.remove( 'hide' )
        utils.events.dispatch( 'finished-loading' )
    }
}
