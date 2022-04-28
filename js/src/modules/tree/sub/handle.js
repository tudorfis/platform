
export function handleLoading() {
    const { mem } = modules.video
    const chart = app.tree.chart

    chart.addEventListener( 'scroll', e => {
        utils.events.throttle( _ => {
            modules.video.positioning.setBackdrop()
        })
    })

    utils.dom.qsa('.node').forEach( element => {
        element.addEventListener( 'mouseenter', _ => {
            mem.videoId = element.id
            const nodeElement = utils.dom.qs( `.node[id="${mem.videoId}"]`, chart )
            handleVideoLoad( mem, nodeElement, chart )
        })

        element.addEventListener( 'click', _ => {
            if ( mem.videoWrapper?.id === element.id ) {
                modules.video.positioning.setVideoPosition( mem.videoWrapper, element )
                return
            }
        })
    })

    const svg = utils.dom.qs( 'svg', chart ) 
    utils.html.create_element( 'div', '', svg, { 'class': [ 'backdrop' ]}, 'after' )
}

function handleVideoLoad( mem, element, chart ) {
    if ( app.events.disableEvents ) return
    
    mem.videoWrapper?.classList.add( 'hide' )

    const node = modules.tree.node.findNode( element.id )
    const videoWrapper = mem.videos[ element.id ] || modules.video.createVideo( chart, element, node )

    modules.video.positioning.setVideoPosition( videoWrapper, element )
    videoWrapper.classList.remove( 'hide' )
    
    const backdropColor = app.tree.chart.classList.contains('bg') ? config.app.backdropDarker: config.app.backdropNo
    modules.video.positioning.setBackdrop( backdropColor )

    mem.videoWrapper = videoWrapper
}
