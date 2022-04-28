
export function setVideoPosition( videoWrapper, element ) {
    Object.assign( videoWrapper.style, {
        top: calculateTop( element ),
        left: calculateLeft( element ),
    })
}

export function setBackdrop( backdropColor = '' ) {
    const backdrop = utils.dom.qs('.backdrop', app.tree.chart)
    
    if ( !backdrop ) return
    
    if ( backdropColor ) {
        backdrop.style.background = backdropColor
    }

    Object.assign( backdrop.style, {
        width: '0px',
        height: '0px',
    })

    Object.assign( backdrop.style, {
        width: app.tree.chart.scrollWidth+'px',
        height: app.tree.chart.scrollHeight+'px',
    })
}

export function calculateTop( element ) {
    return Number(element.style.top.replace('px','')) + element.getBoundingClientRect().height * 1.08 + 'px'
}

export function calculateLeft( element ) {
    const left = Number(element.style.left.replace('px',''))
    const offset = element.getBoundingClientRect().width / 2

    return left - (left < offset ? 0 : offset) + 'px'
}
