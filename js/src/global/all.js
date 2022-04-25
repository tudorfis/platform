/////// UTILS /////////
import { fetch_scripts, fetch_text } from '/js/src/utils/async.utils.js'
import { qs, qsa } from '/js/src/utils/dom.utils.js'
import { html_entities, create_element } from '/js/src/utils/html.utils.js'
import { get_folder, get_image_location } from '/js/src/utils/linkode.utils.js'

window.utils = {
    async: {
        fetch_scripts,
        fetch_text,
    },
    dom: {
        qs,
        qsa,
    },
    html: {
        html_entities,
        create_element,
    },
    linkode: {
        get_folder,
        get_image_location,
    }
}

/////// CONFIG /////////
import app from '/js/src/config/app/app.config.js'
import { locate, chartConfig, connectorColor } from '/js/src/config/tree/tree.config.js'

window.config = {
    app,
    tree: {
        locate,
        chartConfig,
        connectorColor,
    },
}

/////// PROJECTS /////////
import calculator from '/js/src/projects/calculator.js'
window.projects = {
    calculator,
}

/////// MODULES /////////
import { initIcons } from '/js/src/modules/icons/icons.js'
import { initPan } from '/js/src/modules/pan/pan.js'
import { initHighlight } from '/js/src/modules/highlight/highlight.js'
import { renderCode } from '/js/src/modules/highlight/sub/render-code.js'
import { initTree } from '/js/src/modules/tree/tree.js'
import { generateChart } from '/js/src/modules/tree/sub/generate-chart.js'
import { handleLoading } from '/js/src/modules/tree/sub/handle-loading.js'

window.modules = {
    icons: {
        initIcons,
    },
    pan: {
        initPan,
    },
    highlight: {
        initHighlight,
        renderCode,
    },
    tree: {
        initTree,
        generateChart,
        handleLoading,
    },
}
