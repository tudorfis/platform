
modules.icons.initIcons()
modules.highlight.initHighlight()
modules.pan.initPan()

modules.tree.initTree({
    ...config.tree.chartConfig( '#chart' ),
    ...projects.calculator.tree
})
