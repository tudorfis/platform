
export async function renderCode( node = {}, codeWrapper ) {
    for await ( const code of node.code ) {
        const fetchUrl = [ utils.tree.get_folder( node ), config.tree.locate.code + code ].join('/')
        const text = await utils.async.fetch_text( fetchUrl )
        
        const codeSection = utils.html.create_element( 'section', '', codeWrapper, { 'class': [ 'code-wrapper' ]})
        handle[code]( codeSection, text )
    }

    sh_highlightDocument()

}

const handle = {
    html() {
        const [ codeSection, text ] = arguments
        utils.html.create_element( 'h1', 'HTML', codeSection )
        
        const escapedHtml = utils.html.html_entities( text )
        utils.html.create_element( 'pre', escapedHtml, codeSection, { 'class': [ 'sh_html' ] })
    },
    css() {
        const [ codeSection, text ] = arguments
        utils.html.create_element( 'h1', 'CSS', codeSection )
        utils.html.create_element( 'pre', text, codeSection, { 'class': [ 'sh_css' ] })
    },
    js() {
        const [ codeSection, text ] = arguments
        utils.html.create_element( 'h1', 'JS', codeSection )
        utils.html.create_element( 'pre', text, codeSection, { 'class': [ 'sh_javascript' ] })
    },
}
