
const panningConfig = {}

export function handlePan( element, matchClass = 'className', elementScroll ) {
    panningConfig[ element ] = {
        isPanning: false
    }

    element.addEventListener( 'mousedown', event => {
        if (!event.target.classList.contains( matchClass )) return

        panningConfig[ element ].isPanning = true
        element.style.cursor = 'grab';
        modules.video.positioning.setBackdrop()
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
        if (!panningConfig[ element ].isPanning) return
        if (!event.target.classList.contains( matchClass )) return

        event.preventDefault()
        ;( elementScroll || element ).scrollBy( - ( event.movementX * 2 ), - ( event.movementY * 2 ) )
    })
}
