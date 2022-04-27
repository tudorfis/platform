
export default class extends modules.component.WebComponent {
    constructor() {
        super({ 
            componentUrl: import.meta.url
        })
    }
    afterRender() {

    }
    changeBg({ target: img }) {
        const chart = app.tree.chart
        const bgNum = img.parentNode.getAttribute('data-bg-num')

        const chartBgNum = chart.getAttribute( 'data-bg-num' )
        chart.classList.remove( `bg-${chartBgNum}` )

        if ( bgNum === '0' ) {
            chart.classList.remove('bg')
        }
        else {
            chart.classList.add( 'bg', `bg-${bgNum}`  )
            chart.setAttribute( 'data-bg-num', bgNum )
        }
    }
}
