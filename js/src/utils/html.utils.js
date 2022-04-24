
export function html_entities( html ) {
    const div = document.createElement('div');
    div.innerText = html
    
    return div.innerHTML
}

export function create_element( type, html, parent ) {
    const element = document.createElement( type )
    element.innerHTML = html
    parent.append( element )
}