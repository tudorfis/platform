
modules.icons.initIcons()
modules.pan.initPan()
modules.highlight.initHighlight()

window.nodeStructure = modules.tree.generateNode( projects.calculator )
modules.tree.initTree( '#chart', nodeStructure )
