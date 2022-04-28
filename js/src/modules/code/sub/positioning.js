
export function setCodePosition( codeWrapper, nodeElement ) {
    Object.assign( codeWrapper.style, {
        top: calculateCodeTop( nodeElement ),
        left: calculateCodeLeft( nodeElement ),
    })
}

export function calculateCodeTop( nodeElement ) {
    return Number(nodeElement.style.top.replace('px','')) - config.app.offsetCodeTop + 'px'
}

export function calculateCodeLeft( nodeElement ) {
    return Number(nodeElement.style.left.replace('px','')) - config.app.offsetCodeLeft + 'px'
}
