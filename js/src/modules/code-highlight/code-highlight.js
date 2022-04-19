import { fetchScripts } from '/js/src/utils/async.utils.js'

const libs = [
    '/js/lib/shjs/sh_main.js',
    '/js/lib/shjs/sh_javascript.js',
    '/js/lib/shjs/sh_html.js',
    '/js/lib/shjs/sh_css.js',
    '/js/lib/shjs/sh_php.js',
    '/js/lib/shjs/sh_sql.js',
]

export function initCodeHighlight() {
    fetchScripts( libs, _ => {
        sh_highlightDocument()
    })
}
