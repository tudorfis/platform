
function debounce(cb, delay = 1000) {
    let timeout

    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

function throttle(cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs

    const timeoutFunc = () => {
        if (waitingArgs == null) {
            shouldWait = false
        } else {
            cb(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunc, delay)
        }
    }

    return (...args) => {
        if (shouldWait) {
            waitingArgs = args
            return
        }

        cb(...args)
        shouldWait = true

        setTimeout(timeoutFunc, delay)
    }
}

function dispatch( eventName = '', payload = {}) {
    document.dispatchEvent(new CustomEvent( eventName, { detail: payload }))
}

function watch( eventName, cb = _ => {}) {
    document.addEventListener( eventName, e => {
        cb( e.detail )
    })
}

export default { 
    debounce,
    throttle,
    dispatch,
    watch,
}