
export const mem = {
    video: document.createElement( 'video' ),
    videos: {},
}

export function isPlaying( video ) {
    return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
}

export function createVideo( chart, element, node ) {
    const styles = [
        [ 'top', calculateTop( element ) ],
        [ 'left', calculateLeft( element )],
    ]
    
    const style = styles.map( arr => arr.join(':') ).join(';')

    const videoWrapper = utils.html.create_element( 'div', '', chart, { 
        'class': [ 'video-wrapper' ],
        'id': element.id,
        'style': style,
    })

    const video = utils.html.create_element( 'video', '', videoWrapper, { 
        'class': [ 'video' ],
        'style': `border-color: ${node.color}; box-shadow: 0 0 7px 4px ${node.color}`,
        'controls': '',
    })
    
    utils.html.create_element( 'source', '', video, {
        'type': 'video/mp4',
        'src': [ node.folderPath, config.tree.locate.video ].join('/') 
    })

    createCodeIcon( videoWrapper, node )

    mem.videos[ element.id ] = videoWrapper

    return videoWrapper
}

function createCodeIcon( videoWrapper, node ) {
    const codeIcon = utils.html.create_element( 'i', '', videoWrapper, {
        'class': [ 'fa-solid', 'fa-code', 'tooltip', 'code-icon', 'js_code_icon' ],
        'style': `background: ${node.color}`
    })

    utils.html.create_element( 'span', 'Show the source code of this video', codeIcon, {
        'class': [ 'tooltiptext' ],
    })

    return codeIcon
}

export function setVideoPosition( video, element ) {
    Object.assign( video.style, {
        top: calculateTop( element ),
        left: calculateLeft( element ),
    })
}

function calculateTop( element ) {
    return Number(element.style.top.replace('px','')) + element.getBoundingClientRect().height * 1.08 + 'px'
}
function calculateLeft( element ) {
    const left = Number(element.style.left.replace('px',''))
    const offset = element.getBoundingClientRect().width / 2

    return left - (left < offset ? 0 : offset) + 'px'
}
