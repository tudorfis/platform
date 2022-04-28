
export function handleLoading() {
    const { mem } = modules.video
    const chart = app.tree.chart

    chart.addEventListener( 'scroll', e => {
        utils.events.throttle( _ => {
            modules.video.positioning.setBackdrop()
        })
    })

    utils.dom.qsa('.node').forEach( element => {
        element.addEventListener( 'mouseenter', _ => {
            handleNodeLoad( element )
        })

        element.addEventListener( 'click', e => {
            if ( mem.videoWrapper?.id !== element.id ) {
                mem.videoWrapper?.classList.add( 'hide' )
                return   
            }

            modules.video.positioning.setVideoPosition( mem.videoWrapper, element )
        })
    })

    const svg = utils.dom.qs( 'svg', chart ) 
    utils.html.create_element( 'div', '', svg, { 'class': [ 'backdrop' ]}, 'after' )
}

function handleNodeLoad( element ) {
    const { mem } = modules.video
    const chart = app.tree.chart

    mem.videoId = element.id

    const nodeIcons = utils.dom.qs( '.node-icons', element ) || createNodeIcons( element )
    nodeIcons.classList.remove( 'hide' )

    nodeIcons.addEventListener( 'mouseleave', _ => {
        nodeIcons.classList.add( 'hide' )
    })

    function createNodeIcons( element ) {
        const { mem } = modules.video
        const nodeIcons = utils.html.create_element( 'div', '', element, { 'class': [ 'node-icons' ]})
        
        const collapseSwitch = utils.dom.qs( '.collapse-switch', element )

        if ( collapseSwitch ) {
            const collapseIcon = utils.html.create_element( 'i', '', nodeIcons, { 'class': [ 'fa-solid', 'fa-sitemap', 'collapse-icon' ]})
            collapseIcon.addEventListener( 'click', _ => {
                collapseSwitch.click()
                mem.videoWrapper ? utils.dom.qs( 'video', mem.videoWrapper ).pause() : ''
            })
        }

        const videoIcon = utils.html.create_element( 'i', '', nodeIcons, { 'class': [ 'fa-solid', 'fa-video', 'video-icon' ]})
        videoIcon.addEventListener( 'click', _ => handleVideoLoad(mem, element, chart ))

        const codeIcon = utils.html.create_element( 'i', '', nodeIcons, { 'class': [ 'fa-solid', 'fa-code', 'code-icon' ]})
        
        utils.html.create_element( 'div', '', nodeIcons, { 'class': [ 'backdrop' ]})
        
        return nodeIcons
    }
}

function handleVideoLoad( mem, element, chart ) {
    if ( app.events.disableEvents ) return
    
    if ( mem.videoWrapper ) {
        mem.videoWrapper.classList.add( 'hide' )
        utils.dom.qs( 'video', mem.videoWrapper ).pause()
    }

    const node = modules.tree.node.findNode( element.id )
    const videoWrapper = mem.videos[ element.id ] || modules.video.createVideo( chart, element, node )

    modules.video.positioning.setVideoPosition( videoWrapper, element )
    videoWrapper.classList.remove( 'hide' )
    
    const backdropColor = app.tree.chart.classList.contains('bg') ? config.app.backdropDarker: config.app.backdropNo
    modules.video.positioning.setBackdrop( backdropColor )

    utils.dom.qs( 'video', videoWrapper ).play()
    mem.videoWrapper = videoWrapper
}
