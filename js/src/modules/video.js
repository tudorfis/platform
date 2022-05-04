
const mem = {
    wrapper: null,
    nodeElement: null,
    videos: {},
}

function createVideo( nodeElement ) {
    const node = modules.tree.node.findNode( nodeElement.id )

    const wrapper = utils.html.create_element( 'div', '', app.chart, { 
        'class': [ 'video-wrapper', 'fade-in' ],
        'id': nodeElement.id,
    })

    const video = utils.html.create_element( 'video', '', wrapper, { 
        'class': [ 'video' ],
        'style': `
            border-color: ${node.color}; 
            box-shadow: 0 0 7px 4px ${node.color}
        `,
        'controls': '',
    })
    
    utils.html.create_element( 'source', '', video, {
        'type': 'video/mp4',
        'src': utils.linkode.get_video_location( node )
    })

    icons.createArrowIcon( wrapper )
    icons.createCloseIcon( wrapper )
    icons.createPlusMinusIcon( wrapper )

    utils.positioning.setPosition( wrapper, nodeElement )
    mem.videos[ nodeElement.id ] = wrapper
    return wrapper
}

function hideVideo() {
    if ( !mem.wrapper ) return

    mem.wrapper.classList.add( 'hide' )
    utils.dom.qs( 'video', mem.wrapper ).pause()
    utils.positioning.setPosition( mem.wrapper, mem.nodeElement )
    modules.backdrop.lighterBackdrop()
}

function showVideo( wrapper, nodeElement ) {
    modules.backdrop.darkerBackdrop()
    utils.positioning.setPosition( wrapper, nodeElement )
    wrapper.classList.remove( 'hide' )
    utils.dom.qs( 'video', wrapper ).play()
}

function handleVideoLoad( nodeElement ) {
    if ( 
        utils.dom.some_are_visible( '.video-wrapper' ) &&
        mem.nodeElement === nodeElement
    ) {
        hideVideo()
        return
    }

    hideVideo()
    modules.code.hideCode()

    const wrapper = mem.videos[ nodeElement.id ] || createVideo( nodeElement )

    showVideo( wrapper, nodeElement )
    
    mem.wrapper = wrapper
    mem.nodeElement = nodeElement
}

////////

import icons from '/js/src/modules/video/icons.js'

export default {
    hideVideo,
    handleVideoLoad,
}
