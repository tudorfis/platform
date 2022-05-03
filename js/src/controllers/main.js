import NoMobileSupport from '/js/src/components/base/NoMobileSupport/NoMobileSupport.js'
import LoadingScreen from '/js/src/components/base/LoadingScreen/LoadingScreen.js'
import ZoomButtons from '/js/src/components/topmenu/ZoomButtons/ZoomButtons.js'
import BgChange from '/js/src/components/topmenu/BgChange/BgChange.js'
import SearchChart from '/js/src/components/topmenu/SearchChart/SearchChart.js'

customElements.define('loading-screen', LoadingScreen)
customElements.define('no-mobile-support', NoMobileSupport)
customElements.define('zoom-buttons', ZoomButtons)
customElements.define('search-chart', SearchChart)
customElements.define('bg-change', BgChange)

;(_ => {
    if ( !utils.mobile.isMobile() ) {
        const params = utils.linkode.get_url_params()
        if ( utils.html.handle_location( params, '/#/project/calculator' ) ) return
    
        if ( params.type === 'project' ) {
            modules.general.initProject( params )
        }
    }
})()
