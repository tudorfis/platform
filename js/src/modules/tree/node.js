
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

function generateNode( nodeValue, parentNodeId = '' ) {
    collapsedDefault( nodeValue )
    const HTMLid = nodeId()
    
    return {
        HTMLid,
        image: utils.linkode.get_image_location( nodeValue ),
        children: nodeValue.children.map( nodeValue => generateNode( nodeValue, HTMLid ) ),
        
        title: nodeValue.title,
        folderPath: nodeValue.folderPath,
        code: nodeValue.code,
        parentId: parentNodeId,
        
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

function traverseNode( cb = _ => {}, node = app.tree.nodeStructure, ) {
    if ( !node ) return

    cb( node )

    node.children.forEach( node => traverseNode( cb, node ))
}

function traverseNodeUp( nodeId, cb = _ => {} ) {
    const node = findNode( nodeId )
    if ( !node ) return

    cb( nodeId )

    return traverseNodeUp( node.parentId, cb )
}

function findNodeElement( nodeId ) {
    return utils.dom.qs( `.node[id="${nodeId}"]` )
}

export default {
    generateNode,
    findNode,
    traverseNode,
    traverseNodeUp,
    findNodeElement,
}
