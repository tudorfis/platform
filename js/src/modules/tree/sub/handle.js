
export function handleLoading() {
    const setBackdropThrottle = utils.events.throttle( _ => {
        modules.video.positioning.setBackdrop()
    }, 100)

    app.tree.chart.addEventListener( 'scroll', _ => {
        setBackdropThrottle()
    })

    addEventListener('resize',function(){
        setBackdropThrottle()
    })

    utils.dom.qsa('.node').forEach( nodeElement => {
        nodeElement.addEventListener( 'mouseenter', _ => {
            modules.tree.handle.handleNodeLoad( nodeElement )
        })
    })

    const svg = utils.dom.qs( 'svg', chart ) 
    utils.html.create_element( 'div', '', svg, { 'class': [ 'backdrop' ]}, 'after' )
}
