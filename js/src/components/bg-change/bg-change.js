

export default class extends modules.component.WebComponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    afterRender() {
        this.refs.wrapper.innerHTML = constants.bgColors.map( (src, bgNum) => `
            <button 
                data-bg-num="${bgNum+1}"
                onclick="modules.general.changeBackground( '${src}', ${bgNum+1} )"
            >
                <img src="${src.replace('.','_small.')}" />
            </button>
        `).join('') + this.refs.wrapper.innerHTML

        modules.general.handlePan( this.refs.wrapper, 'bg-change' )
    }
}
