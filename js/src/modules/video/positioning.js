
function setVideoPosition( videoWrapper, nodeElement ) {
    Object.assign( videoWrapper.style, {
        top: calculateTop( nodeElement ),
        left: calculateLeft( nodeElement ),
    })
}

function calculateTop( nodeElement ) {
    return Number(nodeElement.style.top.replace('px','')) + nodeElement.getBoundingClientRect().height * 1.08 + 'px'
}

function calculateLeft( nodeElement ) {
    return Number(nodeElement.style.left.replace('px','')) - 110 + 'px'
}

export default {
    setVideoPosition,
    calculateTop,
    calculateLeft,
}
