
function get_folder( node ) {
    return [
        location.origin,
        node.folderPath,
    ].join('/')
}

function get_image_location( node ) {
    return [ get_folder( node ), 'i.jpg' ].join('/')
}

function get_video_location( node ) {
    return [ node.folderPath, 'v.mp4' ].join('/') 
}

function get_code_location( node, code ) {
    return [ get_folder( node ), `c.${code}` ].join('/')
}

function* id_generator() {
    while ( true ) {
        yield (Math.random() + 1).toString(36).substring(7)
    }
}

export default {
    get_folder,
    get_image_location,
    get_video_location,
    get_code_location,
    id_generator,
}