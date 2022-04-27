
export function changeBackground( src, bgNum ) {
    const chart = app.tree.chart
    const chartBgNum = chart.getAttribute( 'data-bg-num' )

    chart.classList.remove( `bg-${chartBgNum}` )
    chart.style[ 'background-image' ] = `url('${src}')`

    if ( bgNum === 0 ) {
        chart.classList.remove('bg')
        modules.video.setBackdrop( config.app.backdropNo )
    }
    else {
        chart.classList.add( 'bg', `bg-${bgNum}`  )
        chart.setAttribute( 'data-bg-num', bgNum )
        modules.video.setBackdrop( config.app.backdropCover )
    }
}
