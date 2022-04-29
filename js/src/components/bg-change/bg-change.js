

export default class extends modules.component.WebComponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    afterRender() {
        this.refs.wrapper.innerHTML = config.bg.map( (src, bgNum) => `
            <button 
                data-bg-num="${bgNum+1}"
                onclick="modules.background.changeBackground( '${src}', ${bgNum+1} )"
            >
                <img src="${src.replace('.','_small.')}" />
            </button>
        `).join('') + this.refs.wrapper.innerHTML

        modules.pan.handlePan( this.refs.wrapper, 'bg-change' )
    }
}
