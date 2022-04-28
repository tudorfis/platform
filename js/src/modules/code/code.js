

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
        'class': [ 'code-wrapper', 'fade-in', 'scroll-y' ],
        'id': nodeElement.id,
        'style': style,
    })

    this.renderCode( node, codeWrapper )

    this.codeMem.codes[ nodeElement.id ] = codeWrapper
    
    return codeWrapper
}

export function hideCode() {
    if ( codeMem.codeWrapper ) {
        codeMem.codeWrapper.classList.add( 'hide' )
        this.positioning.setCodePosition( codeMem.codeWrapper, codeMem.nodeElement )
    }
}

export function showCode( codeWrapper ) {
    codeWrapper.classList.remove( 'hide' )
}
