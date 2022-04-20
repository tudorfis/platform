
import { initPan } from '/js/src/modules/pan/pan.js'
import { initCodeHighlight } from '/js/src/modules/code-highlight/code-highlight.js'
import { initTree } from '/js/src/modules/tree/tree.js'
import CALCULATOR_DIGITAL_CONFIG from '/js/src/config/calculator-digital/calculator-digital.tree.js'

initCodeHighlight()
initPan()
initTree(CALCULATOR_DIGITAL_CONFIG)
