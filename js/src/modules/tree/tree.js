
const libs = [
    '/js/lib/jquery/jquery.min.js',
    '/js/lib/jquery/jquery.easing.js',
    '/js/lib/raphael.js',
    '/js/lib/Treant.js',
]

export function initTree( selector, nodeStructure ) {
    utils.async.fetch_scripts( libs, _ => {
        new Treant({
            ...config.tree.chartConfig( selector ),
            nodeStructure
        }, _ => {
            modules.tree.handleLoading()
        } )
    })
}
