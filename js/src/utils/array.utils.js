
function range( num = 0, arr = [] ) {
    if ( num === 0 ) return arr

    arr.unshift( num )

    return range( num - 1, arr )
}

function loop( times, cb = _ => {} ) {
    if ( times === 0 ) return
    cb( times )
    return loop( times - 1, cb )
}

export default {
    range,
    loop,
}