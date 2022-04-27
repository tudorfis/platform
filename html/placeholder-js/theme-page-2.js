import ZoomButtons from '/js/src/components/zoom-buttons/zoom-buttons.js'
import BgChange from '/js/src/components/bg-change/bg-change.js'

window.customElements.define( 'zoom-buttons', ZoomButtons )
window.customElements.define( 'bg-change', BgChange )

app.tree.chartSelector = '#chart'
app.tree.nodeStructure = modules.tree.generateNode( projects.calculator )

modules.icons.initIcons()
modules.pan.initPan()
modules.highlight.initHighlight()
modules.tree.initTree()
