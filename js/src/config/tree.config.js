
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
            levelSeparation: 75,
            siblingSeparation: 50,
            padding: 150,
            animation: {
                nodeAnimation: "linear",
                nodeSpeed: 700,
                connectorsAnimation: "linear",
                connectorsSpeed: 300,
                connectorsType: 'step'
            },
            ...connectorColor( config.app.brandColor )
        }
    }
}

export function connectorColor( color ) {
    return {
        connectors: {
            type: 'step',
            style: {
                'stroke': color,
                'stroke-width': 5
            }
        },
    }
}
