
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
        modules.code.hideCode()
    })
}

function createCopyIcon( wrapper ) {
    const copyIcon = utils.html.create_element( 'i', '', wrapper, {
        'class': [ 'fa-solid', 'fa-copy', 'widget-icon', 'copy-icon', 'tooltip' ],
    })

    utils.behaviour.clipboard_content( [ wrapper, 'pre' ], copyIcon, 'Codul a fost <br>copiat in clipboard!')
}

function createEnlargeIcon( wrapper, subWrapper, backdrop ) {
    const enlargeIcon = utils.html.create_element( 'i', '', wrapper, {
        'class': [ 'fa-regular', 'fa-hand', 'widget-icon', 'enlarge-icon' ],
    })

    utils.behaviour.enlarge_content( subWrapper, enlargeIcon, _ => {
        modules.backdrop.readjustBackdrop()
    }, 'height', [ wrapper, backdrop, subWrapper ], 1.5, 3.5 )
}

export default { 
    createArrowIcon,
    createCloseIcon,
    createCopyIcon,
    createEnlargeIcon,
}
