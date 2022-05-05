
export default class extends modules.webcomponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    afterRender() {
        const params = utils.linkode.get_url_params()
        utils.html.handle_location( params, '/#/catalog' )

        if ( params.type !== 'chart' ) return
        
        if ( !projects[ params.selector ] ) {
            window.location.href = '/#/catalog'
        }

        utils.events.start_throttle()

        app.chart = utils.dom.qs( app.tree.selector ) 
        if ( utils.mobile.isMobile() ) modules.tree.zoom.zoomOut()

        app.project = projects[ params.selector ]
        app.tree.nodeStructure = modules.tree.node.generateNode( app.project )
        modules.tree.initTree()

        modules.general.setTitleFavicon( app.project )
        modules.general.handlePan( app.chart, [ 'chart-svg','chart-backdrop' ] )
        modules.general.initIcons()
        modules.general.initCodeHighlight()

        app.chart.classList.remove( 'hide' )

        utils.events.stop_throttle(_ => {
            utils.events.dispatch( 'finished-loading' )
        }, 1000)
    }
}