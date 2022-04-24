

const linkode = projects.calculator.config.chart[ 'qwXa' ]

for ( const code of linkode.code ) {
    const fetchUrl = [
        location.origin,
        projects.calculator.config.projectFolder,
        linkode.folderPath,
        config.tree.locate.code+code
    ].join('/')

    utils.async.fetch_text( fetchUrl ).then( text => {
        handle[code](text)
    })
}

const handle = {
    html(text) {
        // text = html_entities( text )
        // console.log( text )
    },
    css(text) {
        
        text = '<style><br>'+ text +'<br></style>'
        console.log( text )
    },
    js() {},
}

// fetch('http://127.0.0.1:5501/media/calculator-digital/1.project/c.html').then( res => res.text() ).then( text => {
//     const pre = document.createElement('pre')
//     pre.innerHTML = html_entities( text ) 
//     pre.classList.add('sh_html')
//     document.body.append(pre)
//     sh_highlightDocument()
// })