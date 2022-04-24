
export const locate = {
    image: 'i.jpg',
    video: 'v.mp4',
    code: 'c.'
}

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
                    'stroke': config.global.brandColor,
                    'stroke-width': 5
                }
            },
        }
    }
}
