import ZoomButtons from '/js/src/components/zoom-buttons/zoom-buttons.js'
window.customElements.define( 'zoom-buttons', ZoomButtons )

app.tree.chartSelector = '#chart'
app.tree.nodeStructure = modules.tree.generateNode( projects.calculator )

modules.icons.initIcons()
modules.pan.initPan()
modules.highlight.initHighlight()
modules.tree.initTree()
