
export function createArrowIcon( videoWrapper, node, element ) {
    const extraClasses = []
    
    extraClasses.push([ 
        config.app.jsColor, 
        config.app.cssColor
    ].includes( node.color ) ? 'dark' : 'light')

    const left = Number(videoWrapper.style.left.replace('px',''))
    const offset = element.getBoundingClientRect().width / 2
    if ( left < offset ) {
        extraClasses.push('left')
    }

    utils.html.create_element( 'i', '', videoWrapper, {
        'class': [ 'fa-solid', 'fa-arrow-down', 'video-icon', 'arrow-icon', ...extraClasses ],
    })
}

export function createCodeIcon( videoWrapper, node ) {
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

export function createCloseIcon( videoWrapper, node ) {
    const closeIcon = utils.html.create_element( 'i', '', videoWrapper, {
        'class': [ 'fa-solid', 'fa-x', 'tooltip', 'video-icon', 'close-icon' ],
    })

    utils.html.create_element( 'span', 'Inchide videoul acestei lectii', closeIcon, {
        'class': [ 'tooltiptext', 'tooltip-right', 'tooltip-arrow' ],
    })

    closeIcon.addEventListener('click', e => {
        videoWrapper.classList.add( 'hide' )
        utils.dom.qs( 'video', videoWrapper ).pause()
        
        const backdropColor = app.tree.chart.classList.contains('bg') ? config.app.backdropCover: config.app.backdropNo
        
        modules.video.positioning.setBackdrop( backdropColor )
        utils.dom.engage_event_stoper()
    })
}
