
function enlarge_content( element, parentIcon, cb = _ => {}, 
            target = 'height', targetElements, enlargeIn = 1.5, enlargeOut = 2.5 ) {

    const icon = utils.html.create_element( 'i', '', parentIcon, {
        'class': [ 'fa-solid', 'fa-arrows-up-down', 'widget-icon', 'enlarge-icon' ],
    })

    let isPressed = false,
        initialDimension = element.getBoundingClientRect()[ target ],
        dimension = null,
        clientX = null,
        clientY = null

    function startEvent(e) {
        icon.style.transform = 'scale(1.2)'
        icon.classList.add('pressed')
        isPressed = true
        
        clientX = e.clientX
        clientY = e.clientY
    }
    
    function stopEvent(e) {
        icon.style.transform = 'scale(1)'
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

        const offsetDiff = 5

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
    }, 5)

    icon.addEventListener('mousemove', e => {
        enlargeMoveThrottle(e)
    })
}

function plus_minus_enlarge( wrapper, target = 'width' ) {
    const offset = 2
    const initialDimension = wrapper.getBoundingClientRect()[target]

    const plusIcon = utils.html.create_element( 'i', '', wrapper, {
        'class': [ 'fa-solid', 'fa-circle-plus', 'widget-icon', 'plus' ],
    })
    
    plusIcon.addEventListener( 'click', _ => {
        const targetDim = wrapper.getBoundingClientRect()[target]
        if ( plusIcon.classList.contains('disabled') ) return
        
        Object.assign( wrapper.style, {
            [target]: targetDim * offset + 'px', 
        })

        setDisabledButtons( targetDim )
    })
    
    const minusIcon = utils.html.create_element( 'i', '', wrapper, {
        'class': [ 'fa-solid', 'fa-circle-minus', 'widget-icon', 'minus' ],
    })
    
    minusIcon.addEventListener( 'click', _ => {
        const targetDim = wrapper.getBoundingClientRect()[target]
        if ( minusIcon.classList.contains('disabled') ) return
        
        Object.assign( wrapper.style, {
            [target]: targetDim/offset + 'px', 
        })

        setDisabledButtons( targetDim )
    })

    function setDisabledButtons( targetDim ) {
        const dim = Number(wrapper.style[target].replace('px',''))
        plusIcon.classList.toggle( 'disabled', dim >= initialDimension*offset ) 
        minusIcon.classList.toggle( 'disabled', dim <= initialDimension/offset )
    }
}

function clipboard_content( target = null, icon, copyText = '', tooltipLocation = 'top') {
    const tooltipText = utils.html.create_element( 'span', copyText, icon, {
        'class': [ 'tooltiptext', `tooltip-${tooltipLocation}` ],
    })

    icon.addEventListener( 'mouseover', e => {
        tooltipText.classList.add('hide')
    })

    icon.addEventListener('click', e => {
        utils.dom.select_text( target )
        document.execCommand('copy')
        tooltipText.classList.remove('hide')
    })
}


export default {
    enlarge_content,
    clipboard_content,
    plus_minus_enlarge,
}
