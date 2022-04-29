/////// UTILS /////////
import { fetch_scripts, fetch_text } from '/js/src/utils/async.utils.js'
import { qs, qsa, engage_event_stoper, find_parent, select_text } from '/js/src/utils/dom.utils.js'
import { deepclone } from '/js/src/utils/object.utils.js'
import { html_entities, create_element } from '/js/src/utils/html.utils.js'
import { debounce, throttle } from '/js/src/utils/events.utils.js'
import { get_folder, get_image_location, id_generator } from '/js/src/utils/tree.utils.js'
import { isMobile, isIOSMobile } from '/js/src/utils/mobile.utils.js'
window.utils = {
    async: {
        fetch_scripts,
        fetch_text,
    },
    dom: {
        qs,
        qsa,
        engage_event_stoper,
        find_parent,
        select_text,
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
    },
    mobile: {
        isMobile,
        isIOSMobile,
    }
}

/////// CONFIG /////////
import app from '/js/src/config/app.config.js'
import bg from '/js/src/config/bg.config.js'
import { locate, chartConfig, connectorColor } from '/js/src/config/tree.config.js'
window.config = {
    app,
    bg,
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
import { handlePan } from '/js/src/modules/pan/pan.js'
import { initTree, reloadTree } from '/js/src/modules/tree/tree.js'
import { generateNode, findNode } from '/js/src/modules/tree/sub/node.js'
import { handleLoading } from '/js/src/modules/tree/sub/handle.js'
import { handleNodeLoad } from '/js/src/modules/tree/sub/handle/handleNodeLoad.js'
import { handleVideoLoad } from '/js/src/modules/tree/sub/handle/handleVideoLoad.js'
import { handleCodeLoad } from '/js/src/modules/tree/sub/handle/handleCodeLoad.js'
import { zoomIn, zoomOut, disableZoomOut, disableZoomIn, handleZoom } from '/js/src/modules/tree/sub/zoom.js'
import { mem, isPlaying, createVideo, showVideo, hideVideo, lighterBackdrop, darkerBackdrop } from '/js/src/modules/video/video.js'
import { setVideoPosition, setBackdrop, calculateTop, calculateLeft } from '/js/src/modules/video/sub/positioning.js'
import { createArrowIcon, createCloseIcon, createEnlargeIcon } from '/js/src/modules/video/sub/icons.js'
import { initCode, codeMem, createCode, showCode, hideCode } from '/js/src/modules/code/code.js'
import { setCodePosition, calculateCodeTop, calculateCodeLeft } from '/js/src/modules/code/sub/positioning.js'
import { createCodeArrowIcon, createCodeCloseIcon, createCodeCopyIcon } from '/js/src/modules/code/sub/icons.js'
import { renderCode } from '/js/src/modules/code/sub/render-code.js'
import { WebComponent } from '/js/src/modules/webcomponent/webcomponent.js'
import { changeBackground } from '/js/src/modules/background/background.js'
window.modules = {
    icons: {
        initIcons,
    },
    pan: {
        handlePan,
    },
    tree: {
        initTree,
        reloadTree,
        node: {
            generateNode,
            findNode,
        },
        handle: {
            handleLoading,
            handleNodeLoad,
            handleVideoLoad,
            handleCodeLoad,
        },
        zoom: {
            zoomIn,
            zoomOut,
            disableZoomOut,
            disableZoomIn,
            handleZoom,
        }
    },
    video: {
        mem,
        isPlaying,
        createVideo,
        showVideo,
        hideVideo,
        lighterBackdrop, 
        darkerBackdrop,
        positioning: {
            setVideoPosition,
            setBackdrop,
            calculateTop, 
            calculateLeft,
        },
        icons: {
            createArrowIcon,
            createCloseIcon,
            createEnlargeIcon,
        }
    },
    code: {
        initCode,
        codeMem, 
        createCode, 
        showCode, 
        hideCode,
        renderCode,
        positioning: {
            setCodePosition,
            calculateCodeTop,
            calculateCodeLeft,
        },
        icons: {
            createCodeArrowIcon, 
            createCodeCloseIcon,
            createCodeCopyIcon,
        }
    },
    component: {
        WebComponent
    },
    background: {
        changeBackground,
    }
}

///////// APP ///////////
window.app = {
    tree: {
        chartSelector: '#chart',
        chart: null,
        zoomLevel: 75
    },
    events: {
        disableEvents: false
    }
}