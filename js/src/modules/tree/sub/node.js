
function nodeId() {
    const id = utils.tree.id_generator()
    return id.next().value
}

export function generateNode( nodeValue ) {
    collapsedDefault( nodeValue )

    return {
        HTMLid: nodeId(),
        image: utils.tree.get_image_location( nodeValue ),
        children: nodeValue.children.map( nodeValue => generateNode( nodeValue ) ),
        
        title: nodeValue.title,
        folderPath: nodeValue.folderPath,
        code: nodeValue.code,
        
        ...( nodeValue.collapsed !== undefined ? { collapsed: nodeValue.collapsed } : {} ),
        ...( nodeValue.stackChildren !== undefined ? { stackChildren: nodeValue.stackChildren } : {} ),
        ...( nodeValue.color !== undefined ? { color: nodeValue.color } : {} ),
        ...( nodeValue.lineColor !== undefined ? modules.tree.connectorColor( nodeValue.lineColor ) : {} ),
    }
}

export function findNode( nodeId, node = app.tree.nodeStructure ) {
    if ( nodeId === node.HTMLid ) return node

    return node.children
        .map( node => findNode( nodeId, node ))
        .find( node => !!node )
}

function collapsedDefault( nodeValue ) {
    if (
        nodeValue.collapsed === undefined &&
        nodeValue.children.length 
    ) {
        nodeValue.collapsed = true
    }
}
