
const zoomDimensions = {
    50: 200,
    75: 133,
    100: 100,
}

const zoomChange = 25
const zoomMax = 100
const zoomMin = 50

export function zoomIn() {
    if ( disableZoomIn() ) return

    app.tree.zoomLevel -= zoomChange
    handleZoom()
}

export function zoomOut() {
    if ( disableZoomOut() ) return
    
    app.tree.zoomLevel += zoomChange
    handleZoom()
}

export function disableZoomOut() {
    return app.tree.zoomLevel === zoomMax
}

export function disableZoomIn() {
    return app.tree.zoomLevel === zoomMin
}

function handleZoom() {
    const zoomDimension = zoomDimensions[ app.tree.zoomLevel ]

    Object.assign( utils.dom.qs( app.tree.chartSelector ).style, {
        width: `${zoomDimension}vw`,
        height: `${zoomDimension}vh`,
    })

    document.body.style.zoom = `${app.tree.zoomLevel}%`
}