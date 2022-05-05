
export default class extends modules.webcomponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    afterRender() {
        // this.refs.catalogBtn
        // this.refs.homeBtn
        // this.refs.infoBtn
        // this.refs.myProfileBtn
    }
    catalog() {
        console.log('catalog')
    }
    home() {
        console.log('home')
    }
    info() {
        console.log('info')
    }
    myProfile() {
        console.log('myProfile')
    }
}
