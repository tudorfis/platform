
export function html_entities( html ) {
    const div = document.createElement('div');
    div.innerText = html
    
    return div.innerHTML
}

export function create_element( type, html, parent, props ) {
    const element = document.createElement( type )
    element.innerHTML = html
    parent.append( element )

    if ( props.class ) {
        for ( const className of props.class ) {
            element.classList.add( className )
        }
    }

    return element
}