
function createCollapseIcon( nodeIcons, nodeElement ) {
    const collapseSwitch = utils.dom.qs( '.collapse-switch', nodeElement )
    if ( !collapseSwitch ) return

    const collapseIcon = utils.html.create_element( 'i', '', nodeIcons, { 
        'class': [ 'fa-solid', 'fa-sitemap', 'collapse-icon' ]
    })
    
    collapseIcon.addEventListener( 'click', _ => {
        collapseSwitch.click()
        modules.video.hideVideo()
        modules.code.hideCode()
    })
}

function createVideoIcon( nodeIcons, nodeElement ) {
    const videoIcon = utils.html.create_element( 'i', '', nodeIcons, { 
        'class': [ 'fa-solid', 'fa-video', 'video-icon' ]
    })
    
    videoIcon.addEventListener( 'click', _ => {
        modules.video.handleVideoLoad( nodeElement )
        modules.general.setTitleFavicon( modules.tree.node.findNode( nodeElement.id ))
    })
}

function createCodeIcon( nodeIcons, nodeElement ) {
    const codeIcon = utils.html.create_element( 'i', '', nodeIcons, { 
        'class': [ 'fa-solid', 'fa-code', 'code-icon' ]
    })
    
    codeIcon.addEventListener( 'click', _ => {
        modules.code.handleCodeLoad( nodeElement )
        modules.general.setTitleFavicon( modules.tree.node.findNode( nodeElement.id ))
    })
}

export default function( nodeElement ) {
    const node = modules.tree.node.findNode( nodeElement.id )
    const nodeIcons = utils.html.create_element( 'div', '', nodeElement, { 'class': [ 'node-icons' ]})
    
    createCollapseIcon( nodeIcons, nodeElement )
    createVideoIcon( nodeIcons, nodeElement )
    createCodeIcon( nodeIcons, nodeElement )

    utils.html.create_element( 'div', '', nodeIcons, { 'class': [ 'node-backdrop' ]})
    utils.html.create_element( 'h1', node.title, nodeIcons, { 'class': [ 'node-title' ]})

    return nodeIcons
}
