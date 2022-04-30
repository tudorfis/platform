
function setCodePosition( codeWrapper, nodeElement ) {
    Object.assign( codeWrapper.style, {
        top: calculateTop( nodeElement ),
        left: calculateLeft( nodeElement, codeWrapper ),
    })
}

function calculateTop( nodeElement ) {
    return Number(nodeElement.style.top.replace('px','')) - 310 + 'px'
}

function calculateLeft( nodeElement, codeWrapper ) {
    const nodeLeft = Number(nodeElement.style.left.replace('px',''))
    const left = nodeLeft - 200
    
    codeWrapper ? utils.dom.qs( '.arrow-icon', codeWrapper ).classList.toggle( 'left', left < 0 ) : ''
    return (( left < 0 ) ? nodeLeft : left) + 'px'
}

export default {
    setCodePosition,
    calculateTop,
    calculateLeft,
}