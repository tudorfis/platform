
function get_folder( node ) {
    return [
        location.origin,
        node.folderPath,
    ].join('/')
}

function get_image_location( node ) {
    return [ get_folder( node ), 'i.jpg' ].join('/')
}

function get_gif_location( node ) {
    return [ get_folder( node ), 'i.gif' ].join('/')
}

function get_video_location( node ) {
    return [ node.folderPath, 'v.mp4' ].join('/') 
}

function get_code_location( node, code ) {
    return [ get_folder( node ), `c.${code}` ].join('/')
}

function get_url_params() {
    const keyArr = [ 'type', 'selector', 'param1', 'param2' ] 
    const hashArr = window.location.hash.replace('#/', '').split('/').filter( item => !!item )

    return hashArr
        .map( (value,key) => ({ [keyArr[key]]: value }))
        .reduce( (final, obj) => ({ ...final, ...obj }), {})
}

function* id_generator() {
    while ( true ) {
        yield (Math.random() + 1).toString(36).substring(7)
    }
}

export default {
    get_folder,
    get_image_location,
    get_gif_location,
    get_video_location,
    get_code_location,
    get_url_params,
    id_generator,
}