

const panningConfig = {}

function setTitleFavicon( node ) {
    document.title = `${node.title} # Linkode`
    utils.dom.qs( 'link[rel="icon"]', document.head ).setAttribute('href', utils.linkode.get_image_location( node ))
}

function handlePan( element, matchClass = 'className', elementScroll ) {
    panningConfig[ element ] = {
        isPanning: false
    }

    element.addEventListener( 'mousedown', event => {
        if (!event.target.classList.contains( matchClass )) return

        panningConfig[ element ].isPanning = true
        element.style.cursor = 'grab';
        modules.backdrop.readjustBackdrop()
    })
    element.addEventListener( 'mouseup', _ => {
        panningConfig[ element ].isPanning = false
        element.style.cursor = 'auto';
    })
    element.addEventListener( 'mouseleave', _ => {
        panningConfig[ element ].isPanning = false
        element.style.cursor = 'auto';
    })
    element.addEventListener( 'mousemove', event => {
        if (!panningConfig[ element ].isPanning) return
        if (!event.target.classList.contains( matchClass )) return

        event.preventDefault()
        ;( elementScroll || element ).scrollBy( - ( event.movementX * 2 ), - ( event.movementY * 2 ) )
    })
}

function changeBackground( src = '', bgNum = 0 ) {
    src = src || constants.bgColors.find( (_, index) => index === bgNum - 1 )

    const chartBgNum = app.chart.getAttribute( 'data-bg-num' )
    
    app.chart.classList.remove( `bg-${chartBgNum}` )
    app.chart.style[ 'background-image' ] = src ? `url('${src}')` : 'none'
    
    if ( bgNum === 0 ) {
        app.chart.classList.remove('bg')
        modules.backdrop.darkerBackdrop()
    }
    else {
        app.chart.classList.add( 'bg', `bg-${bgNum}`  )
        app.chart.setAttribute( 'data-bg-num', bgNum )
        modules.backdrop.lighterBackdrop()
    }
}

function initIcons() {
    utils.async.fetch_scripts([ '/js/lib/font-awesome/font-awesome.js' ])
}

function initCodeHighlight( cb = _ => {} ) {
    utils.async.fetch_scripts([
        '/js/lib/shjs/sh_main.js',
        '/js/lib/shjs/sh_javascript.js',
        '/js/lib/shjs/sh_html.js',
        '/js/lib/shjs/sh_css.js',
        '/js/lib/shjs/sh_php.js',
        '/js/lib/shjs/sh_sql.js',
    ], _ => {
        if ( cb ) cb()
    })
}

function initProject() {
    const params = utils.linkode.get_url_params()
    if ( utils.html.handle_location( params, '/#/project/calculator' ) ) return

    app.chart = utils.dom.qs( app.tree.chartSelector ) 
    app.project = projects[ params.selector ]
    app.tree.nodeStructure = modules.tree.node.generateNode( app.project )
    modules.tree.initTree()

    setTitleFavicon( app.project )
    changeBackground( '', params.param1 || 0 )
    handlePan( app.chart, 'chart-svg' )
    initIcons()
    initCodeHighlight()
}

export default {
    setTitleFavicon,
    changeBackground,
    handlePan,
    initProject
}
