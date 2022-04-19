
import { qsa } from '/js/src/utils/dom.utils.js'

const panningConfig = {}

export function pan( element  ) {
    panningConfig[ element ] = {
        isPanning: false
    }

    element.addEventListener( 'mousedown', _ => {
        panningConfig[ element ].isPanning = true
        element.style.cursor = 'grab';
    })
    element.addEventListener( 'mouseup', _ => {
        panningConfig[ element ].isPanning = false
        element.style.cursor = 'auto';
    })
    element.addEventListener( 'mouseleave', _ => {
        panningConfig[ element ].isPanning = false
        element.style.cursor = 'auto';
    })
    element.addEventListener( 'mousemove', event => {
        if( !panningConfig[ element ]?.isPanning ) return
        event.preventDefault()

        element.scrollBy( - ( event.movementX * 2 ), - ( event.movementY * 2 ) )
    })
}

export function initPan() {
    document.addEventListener( 'DOMContentLoaded', _ => {
        qsa( '.pan' ).forEach( pan )
    })
}