
function handleLoading() {
    const setBackdropThrottle = utils.events.throttle( _ => {
        modules.video.positioning.setBackdrop()
    }, 100)

    app.tree.chart.addEventListener( 'scroll', _ => {
        setBackdropThrottle()
    })

    addEventListener('resize',function(){
        setBackdropThrottle()
    })

    utils.dom.qsa('.node').forEach( nodeElement => {
        nodeElement.addEventListener( 'mouseenter', _ => {
            modules.tree.handle.handleNodeLoad( nodeElement )
        })
    })

    const svg = utils.dom.qs( 'svg', chart ) 
    svg.classList.add( 'chart-svg' )
    utils.html.create_element( 'div', '', svg, { 'class': [ 'backdrop' ]}, 'after' )
}

function handleCodeLoad( nodeElement ) {
    modules.code.hideCode()
    
    const mem = modules.code.mem
    const codeWrapper = mem.codes[ nodeElement.id ] || modules.code.createCode( nodeElement )

    modules.code.showCode( codeWrapper, nodeElement )
    
    mem.codeWrapper = codeWrapper
    mem.nodeElement = nodeElement
}

function handleVideoLoad( nodeElement ) {
    modules.video.hideVideo()
    
    const mem = modules.video.mem
    const videoWrapper = mem.videos[ nodeElement.id ] || modules.video.createVideo( nodeElement )

    modules.video.showVideo( videoWrapper, nodeElement )
    
    mem.videoWrapper = videoWrapper
    mem.nodeElement = nodeElement
}

/////////

import { handleNodeLoad } from '/js/src/modules/tree/sub/handleNodeLoad.js'
export default {
    handleLoading,
    handleCodeLoad,
    handleVideoLoad,
    handleNodeLoad,
}
