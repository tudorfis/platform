import { hideVideo } from '/js/src/modules/video/video.js'

export default function( videoWrapper ) {
    const closeIcon = utils.html.create_element( 'i', '', videoWrapper, {
        'class': [ 'fa-solid', 'fa-x', 'video-icon', 'close-icon' ],
    })

    closeIcon.addEventListener('click', e => {
        hideVideo()
    })
}
