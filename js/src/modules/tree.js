
const libs = [
    '/js/lib/jquery/jquery.min.js',
    '/js/lib/jquery/jquery.easing.js',
    '/js/lib/raphael.js',
    '/js/lib/Treant.js',
]

function initTree() {
    utils.async.fetch_scripts( libs, _ => {
        window.treeInstance = new Treant({
            ...chartConfig( app.tree.chartSelector ),
            nodeStructure: app.tree.nodeStructure
        }, _ => {
            handleLoading()
            modules.tree.zoom.handleZoom()
        })
    })
}

function chartConfig( container ) {
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

function connectorColor( color ) {
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

/////

import node from '/js/src/modules/tree/node.js'
import zoom from '/js/src/modules/tree/zoom.js'
import handleLoading from '/js/src/modules/tree/handleLoading.js'

export default {
    initTree,
    connectorColor,
    node,
    zoom, 
}
