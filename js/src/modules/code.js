

const mem = {
    codeWrapper: null,
    nodeElement: null,
    codes: {},
}

function createCode( nodeElement ) {
    const node = modules.tree.node.findNode( nodeElement.id )

    const styles = [
        [ 'top', positioning.calculateTop( nodeElement ) ],
        [ 'left', positioning.calculateLeft( nodeElement )],
    ]

    const style = styles.map( arr => arr.join(':') ).join(';')

    const codeWrapper = utils.html.create_element( 'div', '', app.chart, { 
        'class': [ 'code-wrapper', 'fade-in' ],
        'id': nodeElement.id,
        'style': style,
    })

    const codeSubWrapper = utils.html.create_element( 'div', '', codeWrapper, { 
        'class': [ 'code-sub-wrapper', 'scroll-y' ],
    })
    
    renderCode( node, codeSubWrapper )
    modules.general.handlePan( codeWrapper, 'code-backdrop', codeSubWrapper )
    
    icons.createArrowIcon( codeWrapper )
    icons.createCloseIcon( codeWrapper )
    icons.createCopyIcon( codeWrapper )

    utils.html.create_element( 'div', '', codeWrapper, { 
        'class': [ 'code-backdrop' ],
    })

    positioning.setCodePosition( codeWrapper, nodeElement )
    mem.codes[ nodeElement.id ] = codeWrapper
    return codeWrapper
}

function hideCode() {
    if ( !mem.codeWrapper ) return

    mem.codeWrapper.classList.add( 'hide' )
    positioning.setCodePosition( mem.codeWrapper, mem.nodeElement )
    modules.backdrop.lighterBackdrop()
}

function showCode( codeWrapper, nodeElement ) {
    modules.backdrop.darkerBackdrop()
    positioning.setCodePosition( codeWrapper, nodeElement )
    codeWrapper.classList.remove( 'hide' )
}

function handleCodeLoad( nodeElement ) {
    hideCode()
    
    const codeWrapper = mem.codes[ nodeElement.id ] || createCode( nodeElement )

    showCode( codeWrapper, nodeElement )
    
    mem.codeWrapper = codeWrapper
    mem.nodeElement = nodeElement
}


///////////

import positioning from '/js/src/modules/code/positioning.js'
import icons from '/js/src/modules/code/icons.js'
import renderCode from '/js/src/modules/code/render-code.js'

export default {
    createCode, 
    showCode, 
    hideCode,
    handleCodeLoad,
}