
function createArrowIcon( wrapper ) {
    utils.html.create_element( 'i', '', wrapper, {
        'class': [ 'fa-solid', 'fa-arrow-down', 'code-icon', 'arrow-icon' ],
    })
}

function createCloseIcon( wrapper ) {
    const closeIcon = utils.html.create_element( 'i', '', wrapper, {
        'class': [ 'fa-solid', 'fa-x', 'code-icon', 'close-icon' ],
    })

    closeIcon.addEventListener('click', e => {
        modules.code.hideCode()
    })
}

function createCopyIcon( wrapper ) {
    const copyIcon = utils.html.create_element( 'i', '', wrapper, {
        'class': [ 'fa-solid', 'fa-copy', 'code-icon', 'copy-icon', 'tooltip' ],
    })

    utils.behaviour.clipboard_content( [ wrapper, 'pre' ], copyIcon, 'Codul a fost <br>copiat in clipboard!')
}

export default { 
    createArrowIcon,
    createCloseIcon,
    createCopyIcon,
}
