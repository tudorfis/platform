
export default class extends modules.webcomponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    afterRender() {
        utils.events.watch( 'finished-loading', _ => {
            this.refs.wrapper.style.display = 'none'
        })
    }
}
