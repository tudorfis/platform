
export default class extends modules.webcomponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    toggleDisabled() {
        modules.tree.zoom.disableZoomIn() ?
            this.refs.zoomInBtn.setAttribute( 'disabled', '' ) :
            this.refs.zoomInBtn.removeAttribute( 'disabled' )

        modules.tree.zoom.disableZoomOut() ?
            this.refs.zoomOutBtn.setAttribute( 'disabled', '' ) :
            this.refs.zoomOutBtn.removeAttribute( 'disabled' )        
    }
    async zoomIn() {
        this.refs.zoomInBtn.setAttribute( 'disabled', '' )
        this.refs.zoomOutBtn.setAttribute( 'disabled', '' )
        
        await modules.tree.zoom.zoomIn()
        this.toggleDisabled()
    }
    async zoomOut() {
        this.refs.zoomInBtn.setAttribute( 'disabled', '' )
        this.refs.zoomOutBtn.setAttribute( 'disabled', '' )
        
        await modules.tree.zoom.zoomOut()
        this.toggleDisabled()
    }
}
