
export function handleLoading() {
    utils.dom.qsa('.node').forEach( element => {
        element.addEventListener( 'mouseover', e => {
            console.log( element.id )
        })
    })
}