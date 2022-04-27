
export function handleLoading() {
    const { mem } = modules.video
    const chart = app.tree.chart

    const chartDebounce = utils.events.debounce( e => {
        mem.chartHover = !!e.target.constructor.toString().match( 'SVGSVGElement' )
    }, 10)

    chart.addEventListener( 'click', e => {
        if ( !mem.video || !mem.chartHover ) return

        mem.video.classList.add( 'hide' )
        utils.dom.qs( 'video', mem.video ).pause()
    })

    chart.addEventListener( 'mousemove', e => {
        chartDebounce(e)
    })

    utils.dom.qsa('.node').forEach( element => {
        const videoDebounce = utils.events.debounce(() => {
            if ( mem.chartHover || ( mem.video && !mem.video?.classList.contains('hide'))) return
            const nodeElement = utils.dom.qs( `.node[id="${mem.videoId}"]`, chart )
            handleVideoLoad( mem, nodeElement, chart )
        }, 770)

        element.addEventListener( 'mouseenter', _ => {
            mem.videoId = element.id
            videoDebounce()
        })

        element.addEventListener( 'click', _ => {
            if ( mem.video?.id === element.id ) {
                modules.video.setVideoPosition( mem.video, element )
                return
            }

            handleVideoLoad( mem, element, chart )
        })
    })
}

function handleVideoLoad( mem, element, chart ) {
    if ( app.events.disableEvents ) return
    
    mem.video?.classList.add( 'hide' )

    const node = modules.tree.findNode( element.id )
    const video = mem.videos[ element.id ] || modules.video.createVideo( chart, element, node )

    video.classList.remove( 'hide' )
    modules.video.setVideoPosition( video, element )
    
    mem.video = video
}
