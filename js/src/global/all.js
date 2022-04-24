/////// UTILS /////////
import { fetch_scripts, fetch_text } from '/js/src/utils/async.utils.js'
import { qs, qsa } from '/js/src/utils/dom.utils.js'
import { html_entities, create_element } from '/js/src/utils/html.utils.js'

window.utils = {
    async: {
        fetch_scripts,
        fetch_text
    },
    dom: {
        qs,
        qsa
    },
    html: {
        html_entities,
        create_element
    }
}

/////// CONFIG /////////
import app from '/js/src/config/app/app.config.js'
import { locate, chartConfig } from '/js/src/config/tree/tree.config.js'

window.config = {
    app,
    tree: {
        locate,
        chartConfig
    },
   
}

/////// PROJECTS /////////
import calculatorConfig from '/js/src/config/calculator-digital/calculator-digital.config.js'
import calculatorTree from '/js/src/config/calculator-digital/calculator-digital.tree.js'

window.projects = {
    calculator: {
        config: calculatorConfig,
        tree: calculatorTree
    }
}

/////// MODULES /////////
import { initIcons } from '/js/src/modules/icons/icons.js'
import { initPan } from '/js/src/modules/pan/pan.js'
import { initHighlight } from '/js/src/modules/highlight/highlight.js'
import { initTree } from '/js/src/modules/tree/tree.js'

window.modules = {
    icons: {
        initIcons
    },
    pan: {
        initPan
    },
    highlight: {
        initHighlight
    },
    tree: {
        initTree
    },
}
