
export default class extends modules.webcomponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    afterRender() {
        if ( utils.mobile.isMobile() ) {
            document.body.innerHTML = this.innerHTML
        }
    }
}
