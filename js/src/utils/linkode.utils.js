
export function get_folder( project, vidValue ) {
    return [
        location.origin,
        project.projectFolder,
        vidValue.folderPath,
    ].join('/')
}

export function get_image_location( project, vidValue ) {
    return [ get_folder( project, vidValue ), config.tree.locate.image ].join('/')
}