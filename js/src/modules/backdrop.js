
const widgetSelectors = '.video-wrapper, .code-wrapper'

function lighterBackdrop() {
    const someOpened = utils.dom.qsa( widgetSelectors ).some(element => !element.classList.contains( 'hide' ))
    if ( someOpened ) return

    const backdrop = utils.dom.qs('.backdrop', app.tree.chart)
    if ( !backdrop ) return
    backdrop.style.background = config.app.backdropLighter
}

function darkerBackdrop() {
    const backdrop = utils.dom.qs('.backdrop', app.tree.chart)
    if ( !backdrop ) return
    backdrop.style.background = config.app.backdropDarker
}

function readjustBackdrop() {
    const backdrop = utils.dom.qs('.backdrop', app.tree.chart)
    if ( !backdrop ) return
    
    Object.assign( backdrop.style, {
        width: '0px',
        height: '0px',
    })

    Object.assign( backdrop.style, {
        width: app.tree.chart.scrollWidth+'px',
        height: app.tree.chart.scrollHeight+'px',
    })
}

export default {
    lighterBackdrop,
    darkerBackdrop,
    readjustBackdrop,
}