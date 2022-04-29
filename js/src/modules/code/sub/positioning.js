
export function setCodePosition( codeWrapper, nodeElement ) {
    Object.assign( codeWrapper.style, {
        top: calculateCodeTop( nodeElement ),
        left: calculateCodeLeft( nodeElement, codeWrapper ),
    })
}

export function calculateCodeTop( nodeElement ) {
    return Number(nodeElement.style.top.replace('px','')) - config.app.offsetCodeTop + 'px'
}

export function calculateCodeLeft( nodeElement, codeWrapper ) {
    const nodeLeft = Number(nodeElement.style.left.replace('px',''))
    const left = nodeLeft - config.app.offsetCodeLeft
    
    codeWrapper ? utils.dom.qs( '.arrow-icon', codeWrapper ).classList.toggle( 'left', left < 0 ) : ''
    return (( left < 0 ) ? nodeLeft : left) + 'px'
}
