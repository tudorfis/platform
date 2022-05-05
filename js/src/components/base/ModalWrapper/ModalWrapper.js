
export default class extends modules.webcomponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    afterRender() {
        this.attr( 'size' ) ? this.refs.wrapper.classList.add( this.attr( 'size' ) ) : ''
        utils.dom.qsa('.modal-backdrop').length > 1 ? this.qs( '.modal-backdrop' ).remove() : ''
    }
    showModal() {
        this.hideModal()
        this.refs.wrapper.classList.remove( 'hide' )
        utils.dom.qs( '.modal-backdrop' ).classList.remove('hide')
    }
    hideModal() {
        utils.dom.qsa( '.modal-wrapper' ).forEach( modal => modal.classList.add( 'hide' ) )
        utils.dom.qs( '.modal-backdrop' ).classList.add('hide')
    }
}
