
function fetch_scripts( libs, callbackFn ) {
    const obj = { index: 0 }
    libs = libs.map( lib => [ lib, false ] )

    create_script( libs, obj, callbackFn )
}

function create_script( libs, obj, cb = _ => {} ) {
    if ( !libs[obj.index]) {
        cb()
        return
    }

    const src = libs[obj.index][0]
    obj.index++

    if ( utils.dom.qs(`script[src="${src}"]`) ) {
        create_script( libs, obj, cb )
    }
    else {
        const script = document.createElement( 'script' )
        script.setAttribute( 'src', src )
        document.body.append(script)
    
        script.onload = function() {
            create_script( libs, obj, cb )
        }
    }
}

async function fetch_text( url ) {
    return await (await fetch( url )).text()
}

export default {
    fetch_scripts,
    fetch_text
}