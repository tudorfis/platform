
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

/////// UTILS /////////
import async from '/js/src/utils/async.utils.js'
import dom from '/js/src/utils/dom.utils.js'
import object from '/js/src/utils/object.utils.js'
import html from '/js/src/utils/html.utils.js'
import events from '/js/src/utils/events.utils.js'
import tree from '/js/src/utils/tree.utils.js'
import mobile from '/js/src/utils/mobile.utils.js'
window.utils = {
    async,
    dom,
    object,
    html,
    events,
    tree,
    mobile,
}

/////// CONFIG /////////
import app from '/js/src/config/app.config.js'
window.config = {
    app,
}

/////// CONSTANTS ////////
import bgColors from '/js/src/constants/bgColors.js'
window.constants = {
    bgColors,
}

/////// PROJECTS /////////
import calculator from '/js/src/projects/calculator.js'
import autentificare from '/js/src/projects/autentificare.js'
window.projects = {
    calculator,
    autentificare,
}

/////// MODULES /////////
import general from '/js/src/modules/general/general.js'

import { initTree, reloadTree, chartConfig, connectorColor } from '/js/src/modules/tree/tree.js'
import { generateNode, findNode } from '/js/src/modules/tree/sub/node.js'
import { handleLoading } from '/js/src/modules/tree/sub/handle.js'
import { handleNodeLoad } from '/js/src/modules/tree/sub/handle/handleNodeLoad.js'
import { handleVideoLoad } from '/js/src/modules/tree/sub/handle/handleVideoLoad.js'
import { handleCodeLoad } from '/js/src/modules/tree/sub/handle/handleCodeLoad.js'

import { zoomIn, zoomOut, disableZoomOut, disableZoomIn, handleZoom } from '/js/src/modules/tree/sub/zoom.js'
import video from '/js/src/modules/video/video.js'
import { initCode, codeMem, createCode, showCode, hideCode } from '/js/src/modules/code/code.js'
import { setCodePosition, calculateCodeTop, calculateCodeLeft } from '/js/src/modules/code/sub/positioning.js'
import { createCodeArrowIcon, createCodeCloseIcon, createCodeCopyIcon } from '/js/src/modules/code/sub/icons.js'
import { renderCode } from '/js/src/modules/code/sub/render-code.js'
import { WebComponent } from '/js/src/modules/webcomponent/webcomponent.js'

window.modules = {
    general,
    tree: {
        initTree,
        reloadTree,
        chartConfig, 
        connectorColor,
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
    video,
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
}
