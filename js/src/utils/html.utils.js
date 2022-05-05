
function html_entities( html ) {
    const div = document.createElement('div');
    div.innerText = html
    
    const entities = div.innerHTML
    return entities.replaceAll('	','  ')
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

function handle_location( params = {}, url = '' ) {
    addEventListener( 'popstate', _ => window.location.reload())
    
    if (
        window.location.pathname === '/index.html' || 
        !params.type 
    ) {
        window.location.href = url
    }
}

function scroll_to_element( element, options = {} ) {
    element.scrollIntoView({ inline: "center", ...options })
}

export default {
    html_entities,
    create_element,
    handle_location,
    scroll_to_element,
}
