
const zoomDimensions = {
    50: 200,
    75: 133,
    100: 100,
}

const zoomChange = 25
const zoomOutLimit = 50
const zoomInLimit = 100

export function zoomOut() {
    if ( disableZoomOut() ) return

    app.tree.zoomLevel -= zoomChange
    handleZoom()
}

export function zoomIn() {
    if ( disableZoomIn() ) return
    
    app.tree.zoomLevel += zoomChange
    handleZoom()
}

export function disableZoomOut() {
    return app.tree.zoomLevel === zoomOutLimit
}

export function disableZoomIn() {
    return app.tree.zoomLevel === zoomInLimit
}

export function handleZoom() {
    const chart = app.tree.chart
    const zoomDimension = zoomDimensions[ app.tree.zoomLevel ]

    const width = `${zoomDimension}vw`
    const height = `${zoomDimension}vh`

    Object.assign( chart.style, {
        'background-size': `${width} ${height}`,
        width,
        height,
    })

    Object.assign( utils.dom.qs( 'svg', chart ).style, {
        width,
        height,
    })

    modules.video.positioning.setBackdrop()
    chart.style.zoom = `${app.tree.zoomLevel}%`
}
