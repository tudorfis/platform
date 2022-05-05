
import colors from '/js/src/constants/colors.js'

export default class extends modules.webcomponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    afterRender() {
        const params = utils.linkode.get_url_params()
        utils.html.handle_location( params, '/#/catalog' )

        if ( params.type !== 'catalog' ) return
        
        modules.general.initIcons()
        app.catalog = utils.dom.qs( app.catalog.selector )
        document.title = `Catalog # Linkode`
        this.renderCatalog()

        app.catalog.classList.remove( 'hide' )
        utils.events.dispatch( 'finished-loading' )
    }
    renderCatalog() {
        let timeoutTime = 300

        Object.keys( projects ).forEach( projectName => {
            const project = projects[ projectName ] 

            const projectItem = utils.html.create_element( 'div', `
                <img src="${ utils.linkode.get_image_location( project ) }" />
                <h1>${ project.title }</h1>
                <ul class="tags">
                    ${ project.code.map( code => `
                        <li style="
                            background: ${getColor( code )};
                            color: var(--${ isDarkColor(code) ? 'dark': 'light' }-color);
                        ">${ code }</li>
                    `).join('') }
                </ul>
                <button>
                    <i class="fa-solid fa-angles-right"></i>
                    START
                </button>
            `, this.refs.wrapper, {
                'class': [ 'catalog-item', 'fade-in', 'hide' ]
            })

            projectItem.addEventListener('mouseenter', _ => {
                utils.dom.qs( 'img', projectItem ).setAttribute('src',utils.linkode.get_gif_location( project ))
            })
            projectItem.addEventListener('mouseleave', _ => {
                utils.dom.qs( 'img', projectItem ).setAttribute('src',utils.linkode.get_image_location( project ))
            })

            utils.dom.qs( 'button', projectItem ).addEventListener( 'click', _ => {
                window.location.href = `/#/chart/${projectName}`
            })

            setTimeout( _ => {
                projectItem.classList.remove('hide')
            }, timeoutTime)

            timeoutTime += 300
        })
    }
}
function getColor( code ) {
    return colors[ `${code}Color` ]
}
function isDarkColor( code = '') {
    return [ 'js' ].includes( code )
}
