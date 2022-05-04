

const heightAdjust = {
    content: [],
}

const handle = {
    html() {
        const [ codeWrapper, text, lengthierCode ] = arguments
        
        const escapedHtml = utils.html.html_entities( text )
        return utils.html.create_element( 'pre', escapedHtml, codeWrapper, { 'class': [ 'code-pre', 'sh_html' ] })
    },
    css() {
        let [ codeWrapper, text, lengthierCode ] = arguments
        
        if ( lengthierCode ) text = '\n\n&lt;style&gt;\n' + text + '\n&lt;/style&gt;'
        return utils.html.create_element( 'pre', text, codeWrapper, { 'class': [ 'code-pre', 'sh_css' ] })
    },
    js() {
        let [ codeWrapper, text, lengthierCode ] = arguments

        if ( lengthierCode ) text = '\n\n&lt;script&gt;\n' + text + '\n&lt;/script&gt;'
        return utils.html.create_element( 'pre', text, codeWrapper, { 'class': [ 'code-pre', 'sh_javascript' ] })
    },
}


function fixHeights() {
    const offset = 50
    const heights = heightAdjust.content.map( pre => pre.getBoundingClientRect().height )
    let totalHeight = heights[ 0 ] + offset
    
    for ( let i = 1; i < heights.length; i++ ) {
        heightAdjust.content[ i ].style.top = totalHeight+'px'
        totalHeight += heights[i] + offset
    }
}

////

export default async function( node = {}, codeWrapper ) {
    heightAdjust.content = []
    heightAdjust.heights = []

    for await ( const code of node.code ) {
        const fetchUrl = utils.linkode.get_code_location( node, code )
        const text = await utils.async.fetch_text( fetchUrl )

        const pre = handle[code]( codeWrapper, text, node.code.length > 1 )
        heightAdjust.content.push( pre )
    }

    sh_highlightDocument()
    fixHeights()
}