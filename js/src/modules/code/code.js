

const libs = [
    '/js/lib/shjs/sh_main.js',
    '/js/lib/shjs/sh_javascript.js',
    '/js/lib/shjs/sh_html.js',
    '/js/lib/shjs/sh_css.js',
    '/js/lib/shjs/sh_php.js',
    '/js/lib/shjs/sh_sql.js',
]

export function initCode( cb = _ => {} ) {
    utils.async.fetch_scripts( libs, _ => {
        if ( cb ) cb()
    })
}

export const codeMem = {
    codeWrapper: null,
    nodeElement: null,
    codeId: '',
    codes: {},
}

export function createCode( nodeElement ) {
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
    modules.pan.handlePan( codeWrapper, 'code-backdrop', codeSubWrapper )
    
    this.icons.createCodeArrowIcon( codeWrapper )
    this.icons.createCodeCloseIcon( codeWrapper )
    this.icons.createCodeCopyIcon( codeWrapper )

    utils.html.create_element( 'div', '', codeWrapper, { 
        'class': [ 'code-backdrop' ],
    })

    this.positioning.setCodePosition( codeWrapper, nodeElement )
    this.codeMem.codes[ nodeElement.id ] = codeWrapper
    return codeWrapper
}

export function hideCode() {
    if ( !codeMem.codeWrapper ) return

    codeMem.codeWrapper.classList.add( 'hide' )
    modules.code.positioning.setCodePosition( codeMem.codeWrapper, codeMem.nodeElement )
    modules.video.lighterBackdrop()
}

export function showCode( codeWrapper, nodeElement ) {
    modules.code.positioning.setCodePosition( codeWrapper, nodeElement )
    modules.video.darkerBackdrop()
    codeWrapper.classList.remove( 'hide' )
}
