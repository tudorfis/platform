
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
        console.log('info')
    }
    myProfile() {
        console.log('myProfile')
    }
}
