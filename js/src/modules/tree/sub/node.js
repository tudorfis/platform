
function nodeId() {
    const id = utils.tree.id_generator()
    return id.next().value
}

export function generateNode( nodeValue ) {
    return {
        HTMLid: nodeId(),
        image: utils.tree.get_image_location( nodeValue ),
        children: nodeValue.children.map( nodeValue => generateNode( nodeValue ) ),
        
        title: nodeValue.title,
        folderPath: nodeValue.folderPath,
        code: nodeValue.code,
        
        ...( !!nodeValue.stackChildren ? { stackChildren: nodeValue.stackChildren } : {} ),
        ...( !!nodeValue.color ? { color: nodeValue.color } : {} ),
        ...( !!nodeValue.lineColor ? config.tree.connectorColor( nodeValue.lineColor ) : {} ),
    }
}

export function findNode( nodeId, node = app.tree.nodeStructure ) {
    if ( nodeId === node.HTMLid ) return node

    return node.children
        .map( node => findNode( nodeId, node ))
        .find( node => !!node )
}
