
export function handleLoading() {
    const { mem } = modules.video
    const chart = utils.dom.qs( app.tree.chartSelector )

    utils.dom.qsa('.node').forEach( element => {
        element.addEventListener( 'mouseenter', _ => {
            if ( app.events.disableEvents ) return
            if ( modules.video.isPlaying( mem.video ) ) return

            mem.video.classList.add( 'hide' )

            const node = modules.tree.findNode( element.id )
            const video = mem.videos[ element.id ] || modules.video.createVideo( chart, element, node )

            console.log( video )
            video.classList.remove( 'hide' )
            modules.video.setVideoPosition( video, element )
            
            mem.video = video
        })

        element.addEventListener( 'click', _ => {
            mem.video.pause()
            mem.video.classList.add( 'hide' )
            utils.dom.engage_event_stoper( 1000 )
        })
    })
}
