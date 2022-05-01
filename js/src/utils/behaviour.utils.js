
function enlarge_content( element, icon, cb = _ => {}, target = 'width', 
                            targetElements, enlargeIn = 2, enlargeOut = 2 ) {
    let isPressed = false,
        initialDimension = element.getBoundingClientRect()[ target ],
        dimension = null,
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
    // const enlargeMoveThrottle = e => {
        if ( !isPressed ) return

        const offsetDiff = 50

        let offset = 0

        if ( e.clientX !== clientX) {
            offset = e.clientX > clientX ? +offsetDiff : -offsetDiff
        }
        else if ( e.clientY !== clientY ) {
            offset = e.clientY > clientY ? +offsetDiff : -offsetDiff
        }

        dimension = dimension || initialDimension
        dimension = dimension + offset

        if ( dimension > initialDimension/enlargeIn && dimension < initialDimension*enlargeOut ) {
            const elements = targetElements || [ element ]
            
            elements.forEach( element => {
                Object.assign( element.style, {
                    [target]: dimension + 'px', 
                })
            })
        }

        clientX = e.clientX
        clientY = e.clientY

        cb()
    }, 250)

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
