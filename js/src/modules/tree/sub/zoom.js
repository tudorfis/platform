
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

    let offset = 1.25
    if (  app.tree.zoomLevel === 75 ) offset = 0.85
    else if (  app.tree.zoomLevel === 50 ) offset = 0.60

    Object.assign( utils.dom.qs( '.backdrop', chart ).style, {
        width: `${zoomDimension*offset}%`,
        height: `${zoomDimension*offset}%`,
    })

    document.body.style.zoom = `${app.tree.zoomLevel}%`
}