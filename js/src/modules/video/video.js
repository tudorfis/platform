
export const mem = {
    videoWrapper: null,
    nodeElement: null,
    videoId: '',
    videos: {},
}

export function isPlaying( video ) {
    return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
}

export function createVideo( nodeElement ) {
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
        'src': [ node.folderPath, config.tree.locate.video ].join('/') 
    })

    this.icons.createArrowIcon( videoWrapper, node, nodeElement )
    this.icons.createCloseIcon( videoWrapper )
    this.icons.createEnlargeIcon( videoWrapper )

    mem.videos[ nodeElement.id ] = videoWrapper
    return videoWrapper
}

export function hideVideo() {
    if ( !mem.videoWrapper ) return

    mem.videoWrapper.classList.add( 'hide' )
    utils.dom.qs( 'video', mem.videoWrapper ).pause()
    this.positioning.setVideoPosition( mem.videoWrapper, mem.nodeElement )
    const backdropColor = app.tree.chart.classList.contains('bg') ? config.app.backdropLighter: config.app.backdropNo
    this.positioning.setBackdrop( backdropColor )
}

export function showVideo( videoWrapper ) {
    videoWrapper.classList.remove( 'hide' )
    utils.dom.qs( 'video', videoWrapper ).play()
    const backdropColor = app.tree.chart.classList.contains('bg') ? config.app.backdropDarker: config.app.backdropNo
    this.positioning.setBackdrop( backdropColor )
}
