
function html_entities( html ) {
    const div = document.createElement('div');
    div.innerText = html
    
    return div.innerHTML
}

function create_element( 
    type = '', 
    html = '', 
    parent = HTMLElement, 
    props = {
        class: ''
    }, 
    operation = 'append' 
) {
    const element = document.createElement( type )
    element.innerHTML = html
    parent[ operation ]( element )

    if ( props.class ) {
        for ( const className of props.class ) {
            element.classList.add( className )
        }
        delete props.class
    }

    for ( const propName in props ) {
        element.setAttribute( propName, props[ propName ] )
    }

    return element
}

export default {
    html_entities,
    create_element,
}