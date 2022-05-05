
function initTree() {
    utils.async.fetch_scripts([
        '/js/lib/jquery/jquery.min.js',
        '/js/lib/jquery/jquery.easing.js',
        '/js/lib/raphael.js',
        '/js/lib/Treant.js',
    ], _ => {
        app.chart.innerHTML = ''
        app.tree.treeInstance = new Treant({
            chart: {
                container: app.tree.chartSelector ,
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
            },
            nodeStructure: app.tree.nodeStructure
        }, _ => {
            handleLoading()
        })
    })
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

function saveCollapsedState() {
    node.traverseNode( app.tree.nodeStructure, node => {
        const nodeElemenet = node.findNodeElement( node.HTMLid )
        node.collapsed = nodeElemenet.classList.contains( 'collapsed' )
    })
}

/////

import node from '/js/src/modules/tree/node.js'
import zoom from '/js/src/modules/tree/zoom.js'
import { handleNodeLoad, handleLoading } from '/js/src/modules/tree/handleLoading.js'

export default {
    initTree,
    connectorColor,
    saveCollapsedState,
    handleNodeLoad,
    node,
    zoom, 
}
