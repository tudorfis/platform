

function handleNodeLoad( nodeElement ) {
    const nodeIcons = utils.dom.qs( '.node-icons', nodeElement ) || createNodeIcons( nodeElement )
    nodeIcons.classList.remove( 'hide' )

    nodeIcons.addEventListener( 'mouseleave', _ => {
        nodeIcons.classList.add( 'hide' )
    })
}

import createNodeIcons from '/js/src/modules/tree/createNodeIcons.js'

export default function() {
    const readjustBackdropThrottle = utils.events.throttle( _ => {
        modules.backdrop.readjustBackdrop()
    }, 100)

    app.tree.chart.addEventListener( 'scroll', _ => {
        readjustBackdropThrottle()
    })

    addEventListener('resize',function(){
        readjustBackdropThrottle()
    })

    utils.dom.qsa('.node').forEach( nodeElement => {
        nodeElement.addEventListener( 'mouseenter', _ => {
            handleNodeLoad( nodeElement )
        })
    })

    const svg = utils.dom.qs( 'svg', chart ) 
    svg.classList.add( 'chart-svg' )
    utils.html.create_element( 'div', '', svg, { 'class': [ 'backdrop' ]}, 'after' )
}