import globalConfig from '/js/src/config/global.config.js'

export function chartConfig( container ) {
    return {
        chart: {
            container,
            animateOnInit: true,
            node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "linear",
                nodeSpeed: 700,
                connectorsAnimation: "linear",
                connectorsSpeed: 300,
                connectorsType: 'step'
            },
            connectors: {
                type: 'step',
                style: {
                    'stroke': globalConfig.brandColor,
                    'stroke-width': 5
                }
            },
        }
    }
}
