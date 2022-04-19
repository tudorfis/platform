import { fetchScripts } from '/js/src/utils/async.utils.js'

const libs = [
    '/js/lib/jquery/jquery.min.js',
    '/js/lib/jquery/jquery.easing.js',
    '/js/lib/raphael.js',
    '/js/lib/Treant.js',
]

export function initTree( config ) {
    fetchScripts( libs, _ => {
        new Treant( config )
    })
}
