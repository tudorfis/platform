
const params = utils.linkode.get_url_params()

if ( !params.type ) {
    window.location = '/#/project/calculator'
    window.location.reload()
}

if ( !utils.mobile.isMobile() ) {
    addEventListener( 'popstate', _ => window.location.reload())
    
    app.chart = utils.dom.qs( app.tree.chartSelector ) 
    app.project = projects[ params.selector ]
    app.tree.nodeStructure = modules.tree.node.generateNode( app.project )
   
    modules.general.setTitleFavicon( app.project )
    modules.general.changeBackground( '', params.param1 || 0 )
    modules.general.handlePan( app.chart, 'chart-svg' )
    modules.general.initIcons()
    modules.general.initCodeHighlight()
    modules.tree.initTree()
}

import NoMobileSupport from '/js/src/components/no-mobile-support/no-mobile-support.js'
import ZoomButtons from '/js/src/components/zoom-buttons/zoom-buttons.js'
import BgChange from '/js/src/components/bg-change/bg-change.js'

window.customElements.define('no-mobile-support', NoMobileSupport)
window.customElements.define('zoom-buttons', ZoomButtons)
window.customElements.define('bg-change', BgChange)
