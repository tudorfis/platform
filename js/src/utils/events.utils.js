
const state = {
    timeBeforeThrottle: 0,
    throttleTime: 1000,
    totalThrottleTime: 0,
}

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
    dispatchEvent(new CustomEvent( eventName, { detail: payload }))
}

function watch( eventName, cb = _ => {}) {
    addEventListener( eventName, e => {
        cb( e.detail )
    })
}

function start_throttle() {
    state.timeBeforeThrottle = performance.now()
}

function stop_throttle(cb = _ => {}, timeoutTime = state.throttleTime ) {
    state.totalThrottleTime = performance.now() - state.timeBeforeThrottle
    
    if ( state.totalThrottleTime < state.throttleTime ) {
        setTimeout(
            _ => cb(),
            timeoutTime - state.totalThrottleTime 
        )
    } 
    else {
        cb()
    }
}

export default { 
    debounce,
    throttle,
    dispatch,
    watch,
    start_throttle,
    stop_throttle,
}
