
export function handleNodeLoad( element ) {
    const { mem } = modules.video

    mem.videoId = element.id

    const nodeIcons = utils.dom.qs( '.node-icons', element ) || createNodeIcons( element )
    nodeIcons.classList.remove( 'hide' )

    nodeIcons.addEventListener( 'mouseleave', _ => {
        nodeIcons.classList.add( 'hide' )
    })
}

function createNodeIcons( element ) {
    const { mem } = modules.video
    const chart = app.tree.chart
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
    videoIcon.addEventListener( 'click', _ => {
        modules.tree.handle.handleVideoLoad(mem, element, chart )
    })

    const codeIcon = utils.html.create_element( 'i', '', nodeIcons, { 'class': [ 'fa-solid', 'fa-code', 'code-icon' ]})
    
    utils.html.create_element( 'div', '', nodeIcons, { 'class': [ 'backdrop' ]})
    
    return nodeIcons
}
