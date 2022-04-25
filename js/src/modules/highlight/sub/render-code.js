
export async function renderCode( vidValue = {}, selector = '#code' ) {
    const targetDiv = utils.dom.qs( selector )

    for await ( const code of vidValue.code ) {
        const fetchUrl = [ utils.tree.get_folder( vidValue ), config.tree.locate.code + code ].join('/')
        const text = await utils.async.fetch_text( fetchUrl )
        
        const codeWrapper = utils.html.create_element( 'section', '', targetDiv, { 'class': [ 'code-wrapper' ]})
        handle[code]( codeWrapper, text )
    }

    sh_highlightDocument()

}

const handle = {
    html() {
        const [ parent, text ] = arguments
        utils.html.create_element( 'h1', 'HTML', parent, { 'class': [ 'title' ]})
        
        const escapedHtml = utils.html.html_entities( text )
        utils.html.create_element( 'pre', escapedHtml, parent, { 'class': [ `sh_html` ] })
    },
    css() {
        const [ parent, text ] = arguments
        utils.html.create_element( 'h1', 'CSS', parent, { 'class': [ 'title' ]})
        utils.html.create_element( 'pre', text, parent, { 'class': [ `sh_css` ] })
    },
    js() {
        const [ parent, text ] = arguments
        utils.html.create_element( 'h1', 'JAVASCRIPT', parent, { 'class': [ 'title' ]})
        utils.html.create_element( 'pre', text, parent, { 'class': [ `sh_javascript` ] })
    },
}
