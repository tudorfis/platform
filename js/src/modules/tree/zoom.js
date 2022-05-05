
const zoomChange = 25
const zoomOutLimit = 75
const zoomInLimit = 125

const zoomDimensions = {
    75: 133.3,
    100: 100,
    125: 80,
}

async function zoomOut() {
    if ( disableZoomOut() ) return

    handleZoom(app.tree.zoomLevel - zoomChange)

    utils.array.loop(10, num => {
        setTimeout( _ => {
            app.tree.zoomLevel -= zoomChange/10
            app.chart.style.zoom = `${app.tree.zoomLevel}%`
        }, num * 20)
    })

    return new Promise(resolve => setTimeout(_ => resolve(),200))
}

async function zoomIn() {
    if ( disableZoomIn() ) return
    
    utils.array.loop(10, num => {
        setTimeout( _ => {
            app.tree.zoomLevel += zoomChange/10
            app.chart.style.zoom = `${app.tree.zoomLevel}%`
            handleZoom(app.tree.zoomLevel)
        }, num * 20)
    })

    return new Promise(resolve => setTimeout(_ => resolve(),200))
}

function disableZoomOut() {
    return app.tree.zoomLevel === zoomOutLimit
}

function disableZoomIn() {
    return app.tree.zoomLevel === zoomInLimit
}

function handleZoom( zoomLevel ) {
    const zoomDimension = zoomDimensions[ zoomLevel ]

    Object.assign( app.chart.style, {
        'width': `${zoomDimension}vw`,
        'height': `${zoomDimension}vh`,
    })

    modules.backdrop.readjustBackdrop()
    app.chart.style.zoom = `${app.tree.zoomLevel}%`
}

export default {
    zoomIn,
    zoomOut,
    disableZoomOut,
    disableZoomIn,
    handleZoom,
}
