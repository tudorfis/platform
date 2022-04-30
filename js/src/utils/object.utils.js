
function deepclone( obj ) {
    return JSON.parse(JSON.stringify( obj ))
}

export default {
    deepclone
}
