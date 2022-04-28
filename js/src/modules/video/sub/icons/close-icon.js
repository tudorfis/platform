
export default function( videoWrapper ) {
    const closeIcon = utils.html.create_element( 'i', '', videoWrapper, {
        'class': [ 'fa-solid', 'fa-x', 'video-icon', 'close-icon' ],
    })

    closeIcon.addEventListener('click', e => {
        videoWrapper.classList.add( 'hide' )
        utils.dom.qs( 'video', videoWrapper ).pause()
        
        const backdropColor = app.tree.chart.classList.contains('bg') ? config.app.backdropCover: config.app.backdropNo
        
        modules.video.positioning.setBackdrop( backdropColor )
        utils.dom.engage_event_stoper()
    })
}
