/////// UTILS /////////
import { fetch_scripts, fetch_text } from '/js/src/utils/async.utils.js'
import { qs, qsa, engage_event_stoper } from '/js/src/utils/dom.utils.js'
import { deepclone } from '/js/src/utils/object.utils.js'
import { html_entities, create_element } from '/js/src/utils/html.utils.js'
import { debounce, throttle } from '/js/src/utils/events.utils.js'
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
    object: {
        deepclone
    },
    html: {
        html_entities,
        create_element,
    },
    events: {
        debounce, 
        throttle, 
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
import { zoomIn, zoomOut, disableZoomOut, disableZoomIn } from '/js/src/modules/tree/sub/zoom.js'
import { mem, isPlaying, createVideo, setVideoPosition } from '/js/src/modules/video/video.js'
import { WebComponent } from '/js/src/modules/webcomponent/webcomponent.js'
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
        zoomIn,
        zoomOut,
        disableZoomOut,
        disableZoomIn,
    },
    video: {
        mem,
        isPlaying,
        createVideo,
        setVideoPosition
    },
    component: {
        WebComponent
    }
}

///////// APP ///////////
window.app = {
    tree: {
        chartSelector: '#chart',
        chart: null,
        zoomLevel: 100
    },
    events: {
        disableEvents: false
    }
}