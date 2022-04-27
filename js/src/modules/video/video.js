
export const mem = {
    video: null,
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
        'class': [ 'video-wrapper', 'fade-in' ],
        'id': element.id,
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

    createCodeIcon( videoWrapper, node )
    createCloseIcon( videoWrapper, node )

    mem.videos[ element.id ] = videoWrapper

    return videoWrapper
}

    function createCodeIcon( videoWrapper, node ) {
        const codeIcon = utils.html.create_element( 'i', '', videoWrapper, {
            'class': [ 'fa-solid', 'fa-code', 'tooltip', 'video-icon', 'code-icon' ],
            'style': `background: ${node.color}`
        })

        utils.html.create_element( 'span', 'Arata codul sursa<br>pentru aceasta lectie', codeIcon, {
            'class': [ 'tooltiptext', 'tooltip-bottom', 'tooltip-arrow' ],
        })

        return codeIcon
    }

    function createCloseIcon( videoWrapper, node ) {
        const closeIcon = utils.html.create_element( 'i', '', videoWrapper, {
            'class': [ 'fa-solid', 'fa-x', 'tooltip', 'video-icon', 'close-icon' ],
        })

        utils.html.create_element( 'span', 'Inchide videoul acestei lectii', closeIcon, {
            'class': [ 'tooltiptext', 'tooltip-right', 'tooltip-arrow' ],
        })

        closeIcon.addEventListener('click', e => {
            videoWrapper.classList.add( 'hide' )
            utils.dom.qs( 'video', videoWrapper ).pause()
            utils.dom.engage_event_stoper()
        })

        return closeIcon
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