
export function handleLoading() {
    utils.dom.qsa('.node').forEach( element => {
        element.addEventListener( 'mouseenter', _ => {
            const node = modules.tree.findNode( element.id )
            console.log(node?.folderPath)
        })
    })
}
