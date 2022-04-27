
export default class extends modules.component.WebComponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    afterRender() {
        this.toggleDisabled()
    }
    toggleDisabled() {
        modules.tree.disableZoomIn() ?
            this.refs.zoomInBtn.setAttribute( 'disabled', '' ) :
            this.refs.zoomInBtn.removeAttribute( 'disabled' )

        modules.tree.disableZoomOut() ?
            this.refs.zoomOutBtn.setAttribute( 'disabled', '' ) :
            this.refs.zoomOutBtn.removeAttribute( 'disabled' )        
    }
    zoomIn() {
        modules.tree.zoomIn()
        this.toggleDisabled()
    }
    zoomOut() {
        modules.tree.zoomOut()
        this.toggleDisabled()
    }
}
