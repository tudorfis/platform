
export default function( videoWrapper ) {
    const enlargeIcon = utils.html.create_element( 'i', '', videoWrapper, {
        'class': [ 'fa-regular', 'fa-hand', 'video-icon', 'enlarge-icon' ],
    })

    let isPressed = false,
        initialWidth = videoWrapper.getBoundingClientRect().width,
        clientX = null,
        clientY = null,
        iconX = null,
        iconY = null

    function startEvent(e) {
        enlargeIcon.classList.remove('fa-hand')
        enlargeIcon.classList.add('fa-hand-back-fist')
        enlargeIcon.classList.add('pressed')
        isPressed = true
        
        iconX = e.clientX
        iconY = e.clientY
        clientX = e.clientX
        clientY = e.clientY
    }
    
    function stopEvent(e) {
        enlargeIcon.classList.add('fa-hand')
        enlargeIcon.classList.remove('fa-hand-back-fist')
        enlargeIcon.classList.remove('pressed')
        isPressed = false
        
        iconX = null
        iconY = null
        clientX = null
        clientY = null
    }

    enlargeIcon.addEventListener('mousedown', e => {
        startEvent(e)
    })
    enlargeIcon.addEventListener('mouseup', e => {
        stopEvent(e)
    })
    enlargeIcon.addEventListener('mouseleave', e => {
        stopEvent(e)
    })

    const enlargeMoveThrottle = utils.events.throttle( e => {
        if ( !isPressed ) return

        const offsetDiff = 50

        let offset = 0

        if ( e.clientX !== clientX) {
            if ( e.clientX > clientX ) {
                offset = offsetDiff
            } else {
                offset = -offsetDiff
            }
        }
        
        if ( e.clientY !== clientY ) {
            if ( e.clientY > clientY ) {
                offset = offsetDiff
            } else {
                offset = -offsetDiff
            }
        }
        const { width } = videoWrapper.getBoundingClientRect() 

        Object.assign( videoWrapper.style, {
            width: width + offset + 'px', 
            marginLeft: -(((width + offset) - initialWidth)/2) + 'px'
        })

        clientX = e.clientX
        clientY = e.clientY

        modules.video.positioning.setBackdrop()
    }, 150)

    enlargeIcon.addEventListener('mousemove', e => {
        enlargeMoveThrottle(e)
    })
}
