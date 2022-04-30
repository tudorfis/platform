
function createArrowIcon( videoWrapper ) {
    utils.html.create_element( 'i', '', videoWrapper, {
        'class': [ 'fa-solid', 'fa-arrow-down', 'video-icon', 'arrow-icon' ],
    })
}

function createCloseIcon( videoWrapper ) {
    const closeIcon = utils.html.create_element( 'i', '', videoWrapper, {
        'class': [ 'fa-solid', 'fa-x', 'video-icon', 'close-icon' ],
    })

    closeIcon.addEventListener('click', e => {
        modules.video.hideVideo()
    })
}

function createEnlargeIcon( videoWrapper ) {
    const enlargeIcon = utils.html.create_element( 'i', '', videoWrapper, {
        'class': [ 'fa-regular', 'fa-hand', 'video-icon', 'enlarge-icon' ],
    })

    utils.behaviour.enlarge_content( videoWrapper, enlargeIcon, _ => {
        modules.backdrop.readjustBackdrop()
    })
}

export default {
    createArrowIcon,
    createCloseIcon,
    createEnlargeIcon,
}
