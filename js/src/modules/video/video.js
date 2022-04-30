
const mem = {
    videoWrapper: null,
    nodeElement: null,
    videoId: '',
    videos: {},
}

function isPlaying( video ) {
    return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
}

function createVideo( nodeElement ) {
    const chart = app.tree.chart
    const node = modules.tree.node.findNode( nodeElement.id )

    const styles = [
        [ 'top', this.positioning.calculateTop( nodeElement ) ],
        [ 'left', this.positioning.calculateLeft( nodeElement )],
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
        'src': utils.tree.get_video_location( node )
    })

    this.icons.createArrowIcon( videoWrapper )
    this.icons.createCloseIcon( videoWrapper )
    this.icons.createEnlargeIcon( videoWrapper )

    mem.videos[ nodeElement.id ] = videoWrapper
    return videoWrapper
}

function hideVideo() {
    if ( !mem.videoWrapper ) return

    mem.videoWrapper.classList.add( 'hide' )
    utils.dom.qs( 'video', mem.videoWrapper ).pause()
    modules.video.positioning?.setVideoPosition( mem.videoWrapper, mem.nodeElement )
    modules.video.lighterBackdrop()
}

function showVideo( videoWrapper, nodeElement ) {
    modules.video.darkerBackdrop()
    modules.video.positioning?.setVideoPosition( videoWrapper, nodeElement )
    videoWrapper.classList.remove( 'hide' )
    utils.dom.qs( 'video', videoWrapper ).play()
}

function lighterBackdrop() {
    const someOpened = utils.dom.qsa( '.video-wrapper, .code-wrapper' ).some(element => !element.classList.contains( 'hide' ))
    if ( someOpened ) return

    const backdropColor = app.tree.chart.classList.contains('bg') ? config.app.backdropLighter : config.app.backdropNo
    modules.video.positioning.setBackdrop( backdropColor )
}
function darkerBackdrop() {
    const backdropColor = app.tree.chart.classList.contains('bg') ? config.app.backdropDarker : config.app.backdropNo
    modules.video.positioning.setBackdrop( backdropColor )
}

////////

import positioning from '/js/src/modules/video/sub/positioning.js'
import icons from '/js/src/modules/video/sub/icons.js'

export default {
    mem,
    isPlaying,
    createVideo,
    hideVideo,
    showVideo,
    lighterBackdrop,
    darkerBackdrop,
    positioning,
    icons,
}