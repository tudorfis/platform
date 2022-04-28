
export default function( videoWrapper, node ) {
    const codeIcon = utils.html.create_element( 'i', '', videoWrapper, {
        'class': [ 'fa-solid', 'fa-code', 'tooltip', 'video-icon', 'code-icon' ],
        'style': `background: ${node.color}`
    })

    utils.html.create_element( 'span', 'Arata codul sursa<br>pentru aceasta lectie', codeIcon, {
        'class': [ 'tooltiptext', 'tooltip-bottom', 'tooltip-arrow' ],
    })

    codeIcon.addEventListener( 'click', function(){
        console.log( 'codeIcon' )
    })
}
