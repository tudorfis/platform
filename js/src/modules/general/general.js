

const panningConfig = {}

function handlePan( element, matchClass = 'className', elementScroll ) {
    panningConfig[ element ] = {
        isPanning: false
    }

    element.addEventListener( 'mousedown', event => {
        if (!event.target.classList.contains( matchClass )) return

        panningConfig[ element ].isPanning = true
        element.style.cursor = 'grab';
        modules.video.positioning.setBackdrop()
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
    if( src === '' ) src = constants.bgColors.find( (_, index) => index === bgNum - 1 )

    const chart = app.tree.chart
    const chartBgNum = chart.getAttribute( 'data-bg-num' )

    chart.classList.remove( `bg-${chartBgNum}` )
    chart.style[ 'background-image' ] = `url('${src}')`

    if ( bgNum === 0 ) {
        chart.classList.remove('bg')
        modules.video.positioning.setBackdrop( config.app.backdropNo )
    }
    else {
        chart.classList.add( 'bg', `bg-${bgNum}`  )
        chart.setAttribute( 'data-bg-num', bgNum )
        modules.video.positioning.setBackdrop( config.app.backdropLighter )
    }
}

function initIcons() {
    utils.async.fetch_scripts([ '/js/lib/font-awesome/font-awesome.js' ])
}

export default {
    changeBackground,
    handlePan,
    initIcons,
}