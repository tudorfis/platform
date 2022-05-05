
import NoMobileSupport from '/js/src/components/base/NoMobileSupport/NoMobileSupport.js'
import LoadingScreen from '/js/src/components/base/LoadingScreen/LoadingScreen.js'
import Chart from '/js/src/components/chart/Chart/Chart.js'
import ZoomButtons from '/js/src/components/chart/ZoomButtons/ZoomButtons.js'
import BgChange from '/js/src/components/chart/BgChange/BgChange.js'
import SearchChart from '/js/src/components/chart/SearchChart/SearchChart.js'
import NavigationButtons from '/js/src/components/chart/NavigationButtons/NavigationButtons.js'
import Catalog from '/js/src/components/catalog/Catalog/Catalog.js'

customElements.define('loading-screen', LoadingScreen)
customElements.define('no-mobile-support', NoMobileSupport)
customElements.define('zoom-buttons', ZoomButtons)
customElements.define('search-chart', SearchChart)
customElements.define('bg-change', BgChange)
customElements.define('navigation-buttons', NavigationButtons)
customElements.define('app-chart', Chart)
customElements.define('app-catalog', Catalog)
