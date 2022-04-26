
const mem = {
    video: document.createElement( 'video' ),
    videos: {},
    videoHover: {}
}

let timeout = null

export function handleLoading() {
    const chart = utils.dom.qs( app.tree.chartSelector )

    utils.dom.qsa('.node').forEach( element => {
        element.addEventListener( 'mouseenter', _ => {
            const node = modules.tree.findNode( element.id )
            const video = queryVideo( element.id ) || createVideo( chart, element, node )

            clearTimeout( timeout )
            video.classList.remove( 'hide' )
            mem.video.classList.add( 'hide' )
            mem.video = video
        })

        element.addEventListener( 'mouseleave', _ => {
            timeout = setTimeout( _ => {
                if ( !mem.videoHover[ mem.video.id ] ) {
                    mem.video.classList.add( 'hide' )
                }
            }, 330)
        })

        element.addEventListener( 'click', _ => {
            utils.dom.qs( `video[id="${element.id}"]`, chart ).style.top = calculateTop( element )
        })
    })
}

function queryVideo( id ) {
    utils.dom.qs( `video[id="${id}"]`, chart )
}

function calculateTop( element ) {
    return Number(element.style.top.replace('px','')) + element.getBoundingClientRect().height * 2 + 'px'
}

function createVideo( chart, element, node ) {
    const styles = [
        [ 'border-color', node.lineColor ],
        [ 'top', calculateTop( element ) ],
        [ 'left', element.style.left ]
    ]
    
    const style = styles.map( arr => arr.join(':') ).join(';')

    const video = utils.html.create_element( 'video', '', chart, { 
        'class': [ 'video' ],
        'id': element.id,
        'style': style,
        'autoplay': '',
        'controls': '',
    })
    
    utils.html.create_element( 'source', '', video, {
        'type': 'video/mp4',
        'src': [ node.folderPath, config.tree.locate.video ].join('/') 
    })

    video.addEventListener( 'mouseover', _ => {
        mem.videoHover[ video.id ] = true
    })
    video.addEventListener( 'mouseleave', _ => {
        mem.videoHover[ video.id ] = false
        setTimeout( _ => {
            video.classList.add( 'hide' )
        }, 330)
    })

    return video
}
