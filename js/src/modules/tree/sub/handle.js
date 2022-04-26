
const mem = {
    video: document.createElement( 'video' ),
    videos: {},
}

export function handleLoading() {
    utils.dom.engage_event_stoper()
    const chart = utils.dom.qs( app.tree.chartSelector )

    utils.dom.qsa('.node').forEach( element => {
        element.addEventListener( 'mouseenter', _ => {
            if ( app.events.disableEvents ) return

            const node = modules.tree.findNode( element.id )
            const video = mem.videos[ element.id ] || createVideo( chart, element, node )

            closePreviousVideo()

            video.classList.remove( 'hide' )
            setVideoPosition( video, element )
            video.play()
            
            mem.video = video
        })

        element.addEventListener( 'click', _ => {
            utils.dom.engage_event_stoper()
            setVideoPosition( mem.videos[ element.id ], element )
            closePreviousVideo()
        })
    })
}

function setVideoPosition( video, element ) {
    Object.assign( video.style, {
        top: calculateTop( element ),
        left: calculateLeft( element ),
    })
}

function calculateTop( element ) {
    return Number(element.style.top.replace('px','')) + element.getBoundingClientRect().height + 'px'
}
function calculateLeft( element ) {
    const left = Number(element.style.left.replace('px',''))
    return ((left < config.app.offsetLeft) ? left : left - config.app.offsetLeft) + 'px'
}

function closePreviousVideo() {
    mem.video.classList.add( 'hide' )
    mem.video.pause()
}

function createVideo( chart, element, node ) {
    const styles = [
        [ 'border-color', node.color ],
        [ 'top', calculateTop( element ) ],
        [ 'left', calculateLeft( element )]
    ]
    
    const style = styles.map( arr => arr.join(':') ).join(';')

    const video = utils.html.create_element( 'video', '', chart, { 
        'class': [ 'video' ],
        'id': element.id,
        'style': style,
        'controls': '',
    })
    
    utils.html.create_element( 'source', '', video, {
        'type': 'video/mp4',
        'src': [ node.folderPath, config.tree.locate.video ].join('/') 
    })

    mem.videos[ element.id ] = video

    return video
}
