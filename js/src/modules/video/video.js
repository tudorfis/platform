
export const mem = {
    videoWrapper: null,
    videoId: '',
    videos: {},
}

export function isPlaying( video ) {
    return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
}

export function createVideo( chart, element, node ) {
    const video = this

    const styles = [
        [ 'top', video.positioning.calculateTop( element ) ],
        [ 'left', video.positioning.calculateLeft( element )],
    ]
    
    const style = styles.map( arr => arr.join(':') ).join(';')

    const videoWrapper = utils.html.create_element( 'div', '', chart, { 
        'class': [ 'video-wrapper', 'fade-in' ],
        'id': element.id,
        'style': style,
    })

    const videoElement = utils.html.create_element( 'video', '', videoWrapper, { 
        'class': [ 'video' ],
        'style': `
            border-color: ${node.color}; 
            box-shadow: 0 0 7px 4px ${node.color}
        `,
        'controls': '',
    })
    
    utils.html.create_element( 'source', '', videoElement, {
        'type': 'video/mp4',
        'src': [ node.folderPath, config.tree.locate.video ].join('/') 
    })

    video.icons.createArrowIcon( videoWrapper, node, element )
    video.icons.createCloseIcon( videoWrapper )
    video.icons.createEnlargeIcon( videoWrapper )

    mem.videos[ element.id ] = videoWrapper
    return videoWrapper
}
