
modules.general.initIcons()
modules.general.initPan()

modules.highlight.initHighlight(_ => {
    sh_highlightDocument()
})

modules.tree.initTree({
    ...modules.tree.chartConfig( '#chart' ),
    ...projects.calculator.tree
})
