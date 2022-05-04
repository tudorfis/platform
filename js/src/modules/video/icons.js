
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

function createPlusMinusIcon( wrapper ) {
    utils.behaviour.plus_minus_enlarge( wrapper, 'width' )
}

export default {
    createArrowIcon,
    createCloseIcon,
    createPlusMinusIcon,
}
