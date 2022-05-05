
export default class extends modules.webcomponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    async zoomIn() {
        if ( this.refs.zoomInBtn.classList.contains( 'disabled' ) ) return
        this.allDisabled()

        await modules.tree.zoom.zoomIn()
        this.toggleDisabled()
    }
    async zoomOut() {
        if ( this.refs.zoomOutBtn.classList.contains( 'disabled' ) ) return
        this.allDisabled()

        await modules.tree.zoom.zoomOut()
        this.toggleDisabled()
    }
    toggleDisabled() {
        this.refs.zoomInBtn.classList.toggle( 'disabled', modules.tree.zoom.disableZoomIn() ) 
        this.refs.zoomOutBtn.classList.toggle( 'disabled', modules.tree.zoom.disableZoomOut() )
    }
    allDisabled() {
        this.refs.zoomInBtn.classList.add( 'disabled' )
        this.refs.zoomOutBtn.classList.add( 'disabled' )
    }
}
