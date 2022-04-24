
const libs = [
    '/js/lib/jquery/jquery.min.js',
    '/js/lib/jquery/jquery.easing.js',
    '/js/lib/raphael.js',
    '/js/lib/Treant.js',
]

export function initTree( config ) {
    utils.async.fetch_scripts( libs, _ => {
        new Treant( config )
    })
}
