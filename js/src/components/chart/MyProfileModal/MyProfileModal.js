
export default class extends modules.webcomponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    afterRender() {
        modules.webcomponent.htmlSlots( this, 'modal-wrapper', [ 'content' ], element => {
            element.addEventListener( 'click', _ => {
                console.log( 'my-profile' )
            })
        })
    }
}
