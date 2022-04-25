
export function generateChart( project ) {
    const nodeStructure = {}

    const vidValue = Object.values( project.chart )[0]

    nodeStructure.image = utils.linkode.get_image_location( project, vidValue )
    nodeStructure.children = generateChildren( project, vidValue.children )

    
    if ( vidValue.id ) {
        Object.assign( nodeStructure, {
            HTMLid: vidValue.id
        })
    }

    if ( vidValue.lineColor ) {
        Object.assign( nodeStructure, config.tree.connectorColor( vidValue.lineColor ) )
    }

    return {
        nodeStructure
    }
}

function generateChildren( project, children ) {
    const childrenObj = []

    for ( const vidId of children ) {
        const vidValue = project.chart[ vidId ]
        if ( !vidValue ) continue 

        childrenObj.push({
            image: utils.linkode.get_image_location( project, vidValue ),
            children: generateChildren( project, vidValue.children ),

            ...( !!vidValue.stackChildren ? { stackChildren: vidValue.stackChildren } : {} ),
            ...( !!vidValue.lineColor ? config.tree.connectorColor( vidValue.lineColor ) : {} )
        })
    }

    return childrenObj
}
