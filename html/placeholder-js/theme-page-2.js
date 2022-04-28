import NoMobileSupport from '/js/src/components/no-mobile-support/no-mobile-support.js'
import ZoomButtons from '/js/src/components/zoom-buttons/zoom-buttons.js'
import BgChange from '/js/src/components/bg-change/bg-change.js'

window.customElements.define('no-mobile-support', NoMobileSupport)
window.customElements.define('zoom-buttons', ZoomButtons)
window.customElements.define('bg-change', BgChange)

if ( !utils.mobile.isMobile() ) {
    app.tree.chart = utils.dom.qs( app.tree.chartSelector ) 
    app.tree.nodeStructure = modules.tree.node.generateNode(projects.calculator)
    app.tree.chart.classList.add( 'pan', 'scroll-x', 'scroll-y' )
    modules.background.changeBackground( '', 3 )
    
    modules.icons.initIcons()
    modules.pan.initPan()
    modules.code.initCode()
    modules.tree.initTree()
}
