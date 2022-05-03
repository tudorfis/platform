
function range( num = 0, arr = [] ) {
    if ( num === 0 ) return arr

    arr.unshift( num )

    return range( num - 1, arr )
}

export default {
    range,
}