
function createArrowIcon( wrapper ) {
    utils.html.create_element( 'i', '', wrapper, {
        'class': [ 'fa-solid', 'fa-arrow-down', 'widget-icon', 'arrow-icon' ],
    })
}

function createCloseIcon( wrapper ) {
    const closeIcon = utils.html.create_element( 'i', '', wrapper, {
        'class': [ 'fa-solid', 'fa-x', 'widget-icon', 'close-icon' ],
    })

    closeIcon.addEventListener('click', e => {
        modules.video.hideVideo()
    })
}

function createEnlargeIcon( wrapper ) {
    const enlargeIcon = utils.html.create_element( 'i', '', wrapper, {
        'class': [ 'fa-regular', 'fa-hand', 'widget-icon', 'enlarge-icon' ],
    })

    utils.behaviour.enlarge_content( wrapper, enlargeIcon, _ => {
        modules.backdrop.readjustBackdrop()
    })
}

export default {
    createArrowIcon,
    createCloseIcon,
    createEnlargeIcon,
}
