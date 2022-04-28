
const libs = [
    '/js/lib/jquery/jquery.min.js',
    '/js/lib/jquery/jquery.easing.js',
    '/js/lib/raphael.js',
    '/js/lib/Treant.js',
]

export function initTree() {
    utils.async.fetch_scripts( libs, _ => {
        window.treeInstance = new Treant({
            ...config.tree.chartConfig( app.tree.chartSelector ),
            nodeStructure: app.tree.nodeStructure
        }, _ => {
            modules.tree.handle.handleLoading()
            modules.tree.zoom.handleZoom()
        })
    })
}

export function reloadTree() {
    app.tree.nodeStructure = modules.tree.node.generateNode(projects.calculator)
    // app.tree.chart.innerHTML = ''
    modules.tree.initTree()
}
