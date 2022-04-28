
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
            modules.tree.handle.handleNodeLoad( element )
        })

        element.addEventListener( 'click', e => {
            if ( mem.videoWrapper?.id !== element.id ) {
                mem.videoWrapper?.classList.add( 'hide' )
                return   
            }

            modules.video.positioning.setVideoPosition( mem.videoWrapper, element )
        })
    })

    const svg = utils.dom.qs( 'svg', chart ) 
    utils.html.create_element( 'div', '', svg, { 'class': [ 'backdrop' ]}, 'after' )
}
