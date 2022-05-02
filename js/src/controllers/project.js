import NoMobileSupport from '/js/src/components/no-mobile-support/no-mobile-support.js'
import ZoomButtons from '/js/src/components/zoom-buttons/zoom-buttons.js'
import BgChange from '/js/src/components/bg-change/bg-change.js'
import SearchChart from '/js/src/components/search-chart/search-chart.js'

customElements.define('no-mobile-support', NoMobileSupport)
customElements.define('zoom-buttons', ZoomButtons)
customElements.define('search-chart', SearchChart)
customElements.define('bg-change', BgChange)

if ( !utils.mobile.isMobile() ) {
    modules.general.initProject()
}
