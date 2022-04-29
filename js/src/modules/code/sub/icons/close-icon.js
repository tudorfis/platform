import { hideCode } from '/js/src/modules/code/code.js'

export default function( codeWrapper ) {
    const closeIcon = utils.html.create_element( 'i', '', codeWrapper, {
        'class': [ 'fa-solid', 'fa-x', 'code-icon', 'close-icon' ],
    })

    closeIcon.addEventListener('click', e => {
        hideCode()
    })
}
