
modules.icons.initIcons()
modules.pan.initPan()

modules.highlight.initHighlight(_ => {
    sh_highlightDocument()
})

modules.tree.initTree({
    ...config.tree.chartConfig( '#chart' ),
    ...projects.calculator.tree
})
