
const mem = {
    videoWrapper: null,
    nodeElement: null,
    videos: {},
}

function createVideo( nodeElement ) {
    const chart = app.tree.chart
    const node = modules.tree.node.findNode( nodeElement.id )

    const styles = [
        [ 'top', positioning.calculateTop( nodeElement ) ],
        [ 'left', positioning.calculateLeft( nodeElement )],
    ]
    
    const style = styles.map( arr => arr.join(':') ).join(';')

    const videoWrapper = utils.html.create_element( 'div', '', chart, { 
        'class': [ 'video-wrapper', 'fade-in' ],
        'id': nodeElement.id,
        'style': style,
    })

    const video = utils.html.create_element( 'video', '', videoWrapper, { 
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

    icons.createArrowIcon( videoWrapper )
    icons.createCloseIcon( videoWrapper )
    icons.createEnlargeIcon( videoWrapper )

    mem.videos[ nodeElement.id ] = videoWrapper
    return videoWrapper
}

function hideVideo() {
    if ( !mem.videoWrapper ) return

    mem.videoWrapper.classList.add( 'hide' )
    utils.dom.qs( 'video', mem.videoWrapper ).pause()
    positioning.setVideoPosition( mem.videoWrapper, mem.nodeElement )
    modules.backdrop.lighterBackdrop()
}

function showVideo( videoWrapper, nodeElement ) {
    modules.backdrop.darkerBackdrop()
    positioning.setVideoPosition( videoWrapper, nodeElement )
    videoWrapper.classList.remove( 'hide' )
    utils.dom.qs( 'video', videoWrapper ).play()
}

function handleVideoLoad( nodeElement ) {
    hideVideo()
    
    const videoWrapper = mem.videos[ nodeElement.id ] || createVideo( nodeElement )

    showVideo( videoWrapper, nodeElement )
    
    mem.videoWrapper = videoWrapper
    mem.nodeElement = nodeElement
}

////////

import positioning from '/js/src/modules/video/positioning.js'
import icons from '/js/src/modules/video/icons.js'

export default {
    mem,
    createVideo,
    hideVideo,
    showVideo,
    handleVideoLoad,
}
