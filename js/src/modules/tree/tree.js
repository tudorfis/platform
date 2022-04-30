
const libs = [
    '/js/lib/jquery/jquery.min.js',
    '/js/lib/jquery/jquery.easing.js',
    '/js/lib/raphael.js',
    '/js/lib/Treant.js',
]

export function initTree() {
    utils.async.fetch_scripts( libs, _ => {
        window.treeInstance = new Treant({
            ...modules.tree.chartConfig( app.tree.chartSelector ),
            nodeStructure: app.tree.nodeStructure
        }, _ => {
            modules.tree.handle.handleLoading()
            modules.tree.zoom.handleZoom()
        })
    })
}

export function reloadTree() {
    app.tree.nodeStructure = modules.tree.node.generateNode(projects.calculator)
    modules.tree.initTree()
}


export function chartConfig( container ) {
    return {
        chart: {
            container,
            animateOnInit: true,
            node: {
                collapsable: true
            },
            levelSeparation: 75,
            siblingSeparation: 50,
            padding: 150,
            animation: {
                nodeAnimation: "linear",
                nodeSpeed: 700,
                connectorsAnimation: "linear",
                connectorsSpeed: 300,
                connectorsType: 'step'
            },
            ...connectorColor( config.app.brandColor )
        }
    }
}

export function connectorColor( color ) {
    return {
        connectors: {
            type: 'step',
            style: {
                'stroke': color,
                'stroke-width': 5
            }
        },
    }
}
