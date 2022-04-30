
const params = utils.linkode.get_url_params()

if ( !utils.mobile.isMobile() ) {
    app.tree.chart = utils.dom.qs( app.tree.chartSelector ) 
    app.tree.nodeStructure = modules.tree.node.generateNode( projects[ params.selector ] )
    app.tree.chart.classList.add( 'scroll-x', 'scroll-y' )
   
    modules.general.changeBackground( '', params.param1 || 0 )
    modules.general.handlePan( app.tree.chart, 'chart-svg' )
    modules.general.initIcons()
    modules.general.initCodeHighlight()

    modules.tree.initTree()

    addEventListener( 'popstate', _ => {
        window.location.reload()
    })
}

import NoMobileSupport from '/js/src/components/no-mobile-support/no-mobile-support.js'
import ZoomButtons from '/js/src/components/zoom-buttons/zoom-buttons.js'
import BgChange from '/js/src/components/bg-change/bg-change.js'

window.customElements.define('no-mobile-support', NoMobileSupport)
window.customElements.define('zoom-buttons', ZoomButtons)
window.customElements.define('bg-change', BgChange)
