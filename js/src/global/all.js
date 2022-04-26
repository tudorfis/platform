/////// UTILS /////////
import { fetch_scripts, fetch_text } from '/js/src/utils/async.utils.js'
import { qs, qsa, engage_event_stoper } from '/js/src/utils/dom.utils.js'
import { html_entities, create_element } from '/js/src/utils/html.utils.js'
import { get_folder, get_image_location, id_generator } from '/js/src/utils/tree.utils.js'
window.utils = {
    async: {
        fetch_scripts,
        fetch_text,
    },
    dom: {
        qs,
        qsa,
        engage_event_stoper,
    },
    html: {
        html_entities,
        create_element,
    },
    tree: {
        id_generator,
        get_folder,
        get_image_location,
    }
}

/////// CONFIG /////////
import app from '/js/src/config/app.config.js'
import { locate, chartConfig, connectorColor } from '/js/src/config/tree.config.js'
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
import autentificare from '/js/src/projects/autentificare.js'
window.projects = {
    calculator,
    autentificare,
}

/////// MODULES /////////
import { initIcons } from '/js/src/modules/icons/icons.js'
import { initPan } from '/js/src/modules/pan/pan.js'
import { initHighlight } from '/js/src/modules/highlight/highlight.js'
import { renderCode } from '/js/src/modules/highlight/sub/render-code.js'
import { initTree } from '/js/src/modules/tree/tree.js'
import { generateNode, findNode } from '/js/src/modules/tree/sub/node.js'
import { handleLoading } from '/js/src/modules/tree/sub/handle.js'
import { mem, isPlaying, createVideo, setVideoPosition } from '/js/src/modules/video/video.js'
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
        findNode,
        generateNode,
        handleLoading,
    },
    video: {
        mem,
        isPlaying,
        createVideo,
        setVideoPosition
    }
}

///////// APP ///////////
window.app = {
    tree: {},
    events: {
        disableEvents: false
    }
}