
export function qs(selector, parent = document) {
    return parent.querySelector(selector)
}

export function qsa(selector, parent = document) {
    return [...parent.querySelectorAll(selector)]
}

export function engage_event_stoper() {
    app.events.disableEvents = true
    
    setTimeout(_ => {
        app.events.disableEvents = false
    }, 330)
}
