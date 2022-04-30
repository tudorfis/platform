
function qs(selector, parent = document) {
    return parent.querySelector(selector)
}

function qsa(selector, parent = document) {
    return [...parent.querySelectorAll(selector)]
}

function engage_event_stoper( timeoutTime = 330 ) {
    app.events.disableEvents = true
    
    setTimeout(_ => {
        app.events.disableEvents = false
    }, timeoutTime)
}

function find_parent( element, className = '', id = '') {
    if ( element.classList.contains( className ) ) return element

    return element.parentNode ? find_parent( element.parentNode, className, id ) : null
}

function select_text( element ){
	if (window.getSelection && document.createRange ) { 
	  const selection = window.getSelection()
	  
        const range = document.createRange() 
        range.selectNodeContents(element) 
        selection.removeAllRanges() 
        selection.addRange(range)
	}
    else if (document.selection) { 
        range = document.body.createTextRange()
        range.moveToElementText(el)
        range.select() 
	}
}

export default {
    qs,
    qsa,
    engage_event_stoper,
    find_parent,
    select_text,
}
