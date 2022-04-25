
export function get_folder( nodeValue ) {
    return [
        location.origin,
        nodeValue.folderPath,
    ].join('/')
}

export function get_image_location( nodeValue ) {
    return [ get_folder( nodeValue ), config.tree.locate.image ].join('/')
}

export function* id_generator() {
    while ( true ) {
        yield (Math.random() + 1).toString(36).substring(7)
    }
}
