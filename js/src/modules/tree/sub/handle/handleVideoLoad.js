
export function handleVideoLoad( mem, element, chart ) {
    if ( app.events.disableEvents ) return
    
    if ( mem.videoWrapper ) {
        mem.videoWrapper.classList.add( 'hide' )
        utils.dom.qs( 'video', mem.videoWrapper ).pause()
    }

    const node = modules.tree.node.findNode( element.id )
    const videoWrapper = mem.videos[ element.id ] || modules.video.createVideo( chart, element, node )

    modules.video.positioning.setVideoPosition( videoWrapper, element )
    videoWrapper.classList.remove( 'hide' )
    
    const backdropColor = app.tree.chart.classList.contains('bg') ? config.app.backdropDarker: config.app.backdropNo
    modules.video.positioning.setBackdrop( backdropColor )

    utils.dom.qs( 'video', videoWrapper ).play()
    mem.videoWrapper = videoWrapper
}
