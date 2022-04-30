

const libs = [
    '/js/lib/shjs/sh_main.js',
    '/js/lib/shjs/sh_javascript.js',
    '/js/lib/shjs/sh_html.js',
    '/js/lib/shjs/sh_css.js',
    '/js/lib/shjs/sh_php.js',
    '/js/lib/shjs/sh_sql.js',
]

function initCode( cb = _ => {} ) {
    utils.async.fetch_scripts( libs, _ => {
        if ( cb ) cb()
    })
}

const mem = {
    codeWrapper: null,
    nodeElement: null,
    codeId: '',
    codes: {},
}

function createCode( nodeElement ) {
    const chart = app.tree.chart
    const node = modules.tree.node.findNode( nodeElement.id )

    const styles = [
        [ 'top', this.positioning.calculateCodeTop( nodeElement ) ],
        [ 'left', this.positioning.calculateCodeLeft( nodeElement )],
    ]

    const style = styles.map( arr => arr.join(':') ).join(';')

    const codeWrapper = utils.html.create_element( 'div', '', chart, { 
        'class': [ 'code-wrapper', 'fade-in' ],
        'id': nodeElement.id,
        'style': style,
    })

    const codeSubWrapper = utils.html.create_element( 'div', '', codeWrapper, { 
        'class': [ 'code-sub-wrapper', 'scroll-y' ],
    })
    
    this.renderCode( node, codeSubWrapper )
    modules.general.handlePan( codeWrapper, 'code-backdrop', codeSubWrapper )
    
    this.icons.createArrowIcon( codeWrapper )
    this.icons.createCloseIcon( codeWrapper )
    this.icons.createCopyIcon( codeWrapper )

    utils.html.create_element( 'div', '', codeWrapper, { 
        'class': [ 'code-backdrop' ],
    })

    this.positioning.setCodePosition( codeWrapper, nodeElement )
    this.mem.codes[ nodeElement.id ] = codeWrapper
    return codeWrapper
}

function hideCode() {
    if ( !mem.codeWrapper ) return

    mem.codeWrapper.classList.add( 'hide' )
    modules.code.positioning.setCodePosition( mem.codeWrapper, mem.nodeElement )
    modules.video.lighterBackdrop()
}

function showCode( codeWrapper, nodeElement ) {
    modules.code.positioning.setCodePosition( codeWrapper, nodeElement )
    modules.video.darkerBackdrop()
    codeWrapper.classList.remove( 'hide' )
}

///////////

import positioning from '/js/src/modules/code/sub/positioning.js'
import icons from '/js/src/modules/code/sub/icons.js'
import { renderCode } from '/js/src/modules/code/sub/render-code.js'

export default {
    initCode,
    mem, 
    createCode, 
    showCode, 
    hideCode,
    positioning,
    icons,
    renderCode,
}