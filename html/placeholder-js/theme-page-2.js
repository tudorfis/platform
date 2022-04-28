import ZoomButtons from '/js/src/components/zoom-buttons/zoom-buttons.js'
import BgChange from '/js/src/components/bg-change/bg-change.js'

window.customElements.define('zoom-buttons', ZoomButtons)
window.customElements.define('bg-change', BgChange)

app.tree.chart = utils.dom.qs( app.tree.chartSelector ) 
app.tree.nodeStructure = modules.tree.node.generateNode(projects.calculator)
app.tree.chart.classList.add( 'pan', 'scroll-x', 'scroll-y' )
modules.background.changeBackground( '/img/bg/4742366.jpg', 10 )

modules.icons.initIcons()
modules.pan.initPan()
modules.highlight.initHighlight()
modules.tree.initTree()

//<i class="fa-regular fa-hand"></i>
//<i class="fa-regular fa-hand-back-fist"></i>
//<i class="fa-solid fa-diagram-project"></i>
//<i class="fa-solid fa-gears"></i>
//<i class="fa-solid fa-sitemap"></i>
//<i class="fa-solid fa-network-wired"></i>