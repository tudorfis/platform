


function createNodeIcons( nodeElement ) {
    const nodeIcons = utils.html.create_element( 'div', '', nodeElement, { 'class': [ 'node-icons' ]})
    
    createCollapseIcon( nodeIcons, nodeElement )
    createVideoIcon( nodeIcons, nodeElement )
    createCodeIcon( nodeIcons, nodeElement )

    utils.html.create_element( 'div', '', nodeIcons, { 'class': [ 'backdrop' ]})
    return nodeIcons
}

function createCollapseIcon( nodeIcons, nodeElement ) {
    const collapseSwitch = utils.dom.qs( '.collapse-switch', nodeElement )

    if ( collapseSwitch ) {
        const collapseIcon = utils.html.create_element( 'i', '', nodeIcons, { 'class': [ 'fa-solid', 'fa-sitemap', 'collapse-icon' ]})
        collapseIcon.addEventListener( 'click', _ => {
            collapseSwitch.click()
            modules.video.hideVideo()
            modules.code.hideCode()
        })
    }
}

function createVideoIcon( nodeIcons, nodeElement ) {
    const videoIcon = utils.html.create_element( 'i', '', nodeIcons, { 'class': [ 'fa-solid', 'fa-video', 'video-icon' ]})
    
    videoIcon.addEventListener( 'click', _ => {
        modules.tree.handle.handleVideoLoad( nodeElement )
    })
}

function createCodeIcon( nodeIcons, nodeElement ) {
    const codeIcon = utils.html.create_element( 'i', '', nodeIcons, { 'class': [ 'fa-solid', 'fa-code', 'code-icon' ]})
    codeIcon.addEventListener( 'click', _ => {
        modules.tree.handle.handleCodeLoad( nodeElement )
    })
}

export function handleNodeLoad( nodeElement ) {
    modules.video.mem.videoId = nodeElement.id

    const nodeIcons = utils.dom.qs( '.node-icons', nodeElement ) || createNodeIcons( nodeElement )
    nodeIcons.classList.remove( 'hide' )

    nodeIcons.addEventListener( 'mouseleave', _ => {
        nodeIcons.classList.add( 'hide' )
    })
}
