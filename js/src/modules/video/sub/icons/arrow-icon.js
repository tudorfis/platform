export default function( videoWrapper, node, element ) {
    const extraClasses = []
    
    extraClasses.push([ 
        config.app.jsColor, 
        config.app.cssColor
    ].includes( node.color ) ? 'dark' : 'light')

    utils.html.create_element( 'i', '', videoWrapper, {
        'class': [ 'fa-solid', 'fa-arrow-down', 'video-icon', 'arrow-icon', ...extraClasses ],
    })
}
