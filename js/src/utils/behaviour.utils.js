
function enlarge_content( element, icon, cb = _ => {} ) {
    let isPressed = false,
        initialWidth = element.getBoundingClientRect().width,
        prevWidth = null,
        clientX = null,
        clientY = null,
        iconX = null,
        iconY = null

    function startEvent(e) {
        icon.classList.remove('fa-hand')
        icon.classList.add('fa-hand-back-fist')
        icon.classList.add('pressed')
        isPressed = true
        
        iconX = e.clientX
        iconY = e.clientY
        clientX = e.clientX
        clientY = e.clientY
    }
    
    function stopEvent(e) {
        icon.classList.add('fa-hand')
        icon.classList.remove('fa-hand-back-fist')
        icon.classList.remove('pressed')
        isPressed = false
    }

    icon.addEventListener('mousedown', e => {
        startEvent(e)
    })
    icon.addEventListener('mouseup', e => {
        stopEvent(e)
    })
    icon.addEventListener('mouseleave', e => {
        stopEvent(e)
    })

    const enlargeMoveThrottle = utils.events.throttle( e => {
        if ( !isPressed ) return

        const offsetDiff = 50

        let offset = 0

        if ( e.clientX !== clientX) {
            offset = e.clientX > clientX ? +offsetDiff : -offsetDiff
        }
        else if ( e.clientY !== clientY ) {
            offset = e.clientY > clientY ? +offsetDiff : -offsetDiff
        }

        prevWidth = prevWidth || initialWidth
        prevWidth = prevWidth + offset

        if ( prevWidth > initialWidth/2 && prevWidth < initialWidth*2 ) {
            Object.assign( element.style, {
                width: prevWidth + 'px', 
                marginLeft: -((prevWidth - initialWidth)/2) + 'px'
            })
        }

        clientX = e.clientX
        clientY = e.clientY

        cb()
    }, 75)

    icon.addEventListener('mousemove', e => {
        enlargeMoveThrottle(e)
    })
}

function clipboard_content( target = [], icon, copyText = '', tooltipLocation = 'top') {
    const tooltipText = utils.html.create_element( 'span', copyText, icon, {
        'class': [ 'tooltiptext', `tooltip-${tooltipLocation}` ],
    })

    icon.addEventListener( 'mouseover', e => {
        tooltipText.classList.add('hide')
    })

    icon.addEventListener('click', e => {
        const element = target[1] ? utils.dom.qs( target[1], target[0] ) : target[0]
        if ( !element ) return

        utils.dom.select_text( element )
        document.execCommand('copy')
        tooltipText.classList.remove('hide')
    })
}


export default {
    enlarge_content,
    clipboard_content,
}
