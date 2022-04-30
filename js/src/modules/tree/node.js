
function nodeId() {
    const id = utils.linkode.id_generator()
    return id.next().value
}

function collapsedDefault( nodeValue ) {
    if (
        nodeValue.collapsed === undefined &&
        nodeValue.children.length 
    ) {
        nodeValue.collapsed = true
    }
}

function generateNode( nodeValue ) {
    collapsedDefault( nodeValue )

    return {
        HTMLid: nodeId(),
        image: utils.linkode.get_image_location( nodeValue ),
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

function findNode( nodeId, node = app.tree.nodeStructure ) {
    if ( nodeId === node.HTMLid ) return node

    return node.children
        .map( node => findNode( nodeId, node ))
        .find( node => !!node )
}

export default {
    generateNode,
    findNode,
}
