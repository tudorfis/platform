
const widgetSelectors = '.video-wrapper, .code-wrapper'

function lighterBackdrop() {
    const someOpened = utils.dom.qsa( widgetSelectors ).some(element => !element.classList.contains( 'hide' ))
    if ( someOpened ) return

    const backdrop = utils.dom.qs('.chart-backdrop', app.chart)
    if ( !backdrop ) return
    backdrop.style.background = constants.colors.backdropLighter
}

function darkerBackdrop() {
    const backdrop = utils.dom.qs('.chart-backdrop', app.chart)
    if ( !backdrop ) return
    backdrop.style.background = constants.colors.backdropDarker
}

function readjustBackdrop() {
    const backdrop = utils.dom.qs('.chart-backdrop', app.chart)
    if ( !backdrop ) return
    
    Object.assign( backdrop.style, {
        width: '0px',
        height: '0px',
    })

    Object.assign( backdrop.style, {
        width: app.chart.scrollWidth+'px',
        height: app.chart.scrollHeight+'px',
    })
}

export default {
    lighterBackdrop,
    darkerBackdrop,
    readjustBackdrop,
}