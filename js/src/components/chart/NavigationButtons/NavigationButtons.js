
export default class extends modules.webcomponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    afterRender() {
        // this.refs.homeBtn
        // this.refs.catalogBtn
        // this.refs.infoBtn
        // this.refs.myProfileBtn
    }
    home() {
        window.location.href = 'https://www.linkode.ro'
    }
    catalog() {
        window.location.href = '/#/catalog'
    }
    info() {
        utils.dom.qs('chart-info-modal modal-wrapper').showModal()
        utils.dom.qs('chart-info-modal video').play()
    }
    myProfile() {
        utils.dom.qs('my-profile-modal modal-wrapper').showModal()
    }
}
