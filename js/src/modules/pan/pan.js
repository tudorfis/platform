
const panningConfig = {}

export function pan( element, matchConstructor = 'SVGSVGElement' ) {
    panningConfig[ element ] = {
        isPanning: false
    }

    element.addEventListener( 'mousedown', e => {
        if ( 
            !e.target.constructor.toString().match( matchConstructor ) && 
            !e.target.classList.contains('backdrop') 
        ) return

        app.events.disableEvents = true
        panningConfig[ element ].isPanning = true
        element.style.cursor = 'grab';
        modules.video.positioning.setBackdrop()
    })
    element.addEventListener( 'mouseup', _ => {
        panningConfig[ element ].isPanning = false
        element.style.cursor = 'auto';
        app.events.disableEvents = false
    })
    element.addEventListener( 'mouseleave', _ => {
        panningConfig[ element ].isPanning = false
        element.style.cursor = 'auto';
        app.events.disableEvents = false
    })
    element.addEventListener( 'mousemove', event => {
        if( !panningConfig[ element ]?.isPanning ) return
        event.preventDefault()
        element.scrollBy( - ( event.movementX * 2 ), - ( event.movementY * 2 ) )
    })
}

export function initPan() {
    document.addEventListener( 'DOMContentLoaded', _ => {
        utils.dom.qsa( '.pan' ).forEach( element => pan( element ))
    })
}