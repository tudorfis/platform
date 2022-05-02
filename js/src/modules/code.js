

const mem = {
    wrapper: null,
    nodeElement: null,
    codes: {},
}

function createCode( nodeElement ) {
    const node = modules.tree.node.findNode( nodeElement.id )

    const wrapper = utils.html.create_element( 'div', '', app.chart, { 
        'class': [ 'code-wrapper', 'fade-in' ],
        'id': nodeElement.id,
    })

    const subWrapper = utils.html.create_element( 'div', '', wrapper, { 
        'class': [ 'code-sub-wrapper', 'scroll-y' ],
    })
    
    const backdrop = utils.html.create_element( 'div', '', wrapper, { 
        'class': [ 'code-backdrop' ],
    })

    renderCode( node, subWrapper )
    modules.general.handlePan( wrapper, 'code-backdrop', subWrapper )
    
    icons.createArrowIcon( wrapper )
    icons.createCloseIcon( wrapper )
    icons.createCopyIcon( wrapper )
    icons.createEnlargeIcon( wrapper, subWrapper, backdrop )

   

    window.wrapper = wrapper
    utils.positioning.setPosition( wrapper, nodeElement )
    mem.codes[ nodeElement.id ] = wrapper
    return wrapper
}

function hideCode() {
    if ( !mem.wrapper ) return

    mem.wrapper.classList.add( 'hide' )
    utils.positioning.setPosition( mem.wrapper, mem.nodeElement )
    modules.backdrop.lighterBackdrop()
}

function showCode( wrapper, nodeElement ) {
    modules.backdrop.darkerBackdrop()
    utils.positioning.setPosition( wrapper, nodeElement )
    wrapper.classList.remove( 'hide' )
}

function handleCodeLoad( nodeElement ) {
    hideCode()
    modules.video.hideVideo()
    
    const wrapper = mem.codes[ nodeElement.id ] || createCode( nodeElement )

    showCode( wrapper, nodeElement )
    
    mem.wrapper = wrapper
    mem.nodeElement = nodeElement
}


///////////

import icons from '/js/src/modules/code/icons.js'
import renderCode from '/js/src/modules/code/render-code.js'

export default {
    hideCode,
    handleCodeLoad,
}