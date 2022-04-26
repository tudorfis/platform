
export function handleLoading() {
    const { mem } = modules.video
    const chart = utils.dom.qs( app.tree.chartSelector )

    utils.dom.qsa('.node').forEach( element => {
        element.addEventListener( 'mouseenter', _ => {
            if ( mem.video && !mem.video?.classList.contains('hide') ) return

            handleVideoLoad( mem, element, chart )
        })

        element.addEventListener( 'click', _ => {
            if ( mem.video.id === element.id ) {
                modules.video.setVideoPosition( mem.video, element )
                return
            }

            if ( utils.dom.qs( '.collapse-switch', element ) ) {
                mem.video?.classList.add( 'hide' )
                return
            }

            handleVideoLoad( mem, element, chart )
        })
    })
}

function handleVideoLoad( mem, element, chart ) {
    mem.video?.classList.add( 'hide' )

    const node = modules.tree.findNode( element.id )
    const video = mem.videos[ element.id ] || modules.video.createVideo( chart, element, node )

    video.classList.remove( 'hide' )
    modules.video.setVideoPosition( video, element )
    
    mem.video = video
}