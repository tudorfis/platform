

function setPosition( wrapper, nodeElement ) {
    Object.assign( wrapper.style, {
        top: calculateTop( nodeElement, wrapper ),
        left: calculateLeft( nodeElement, wrapper ),
    })
}

function calculateTop( nodeElement ) {
    const nodeTop = Number(nodeElement.style.top.replace('px',''))
    const nodeHeight = nodeElement.getBoundingClientRect().height
    
    return nodeTop + nodeHeight * 1.10 + 'px'
}

function calculateLeft( nodeElement, wrapper ) {
    return Number(nodeElement.style.left.replace('px','')) + 'px'
}

export default {
    setPosition,
    calculateTop,
    calculateLeft,
}
