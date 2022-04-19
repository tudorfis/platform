import { qs } from '/js/src/utils/dom.utils.js'

export function fetchScripts( libs, callbackFn ) {
    const obj = { index: 0 }
    libs = libs.map( lib => [ lib, false ] )

    createScript( libs, obj, callbackFn )
}

function createScript( libs, obj, cb ) {
    if ( !libs[obj.index]) {
        cb()
        return
    }

    const src = libs[obj.index][0]
    obj.index++

    if ( qs(`script[src="${src}"]`) ) {
        createScript( libs, obj, cb )
    }
    else {
        const script = document.createElement( 'script' )
        script.setAttribute( 'src', src )
        document.body.append(script)
    
        script.onload = function() {
            createScript( libs, obj, cb )
        }
    }
}
