
export default class extends modules.component.WebComponent {
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
