
export default {
    chart: {
        container: "#chart",

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
                'stroke': '#01abf8',
                'stroke-width': 5
            }
        },
    },
    nodeStructure: {
        image: "placeholder-img/lana.png",
        children: [
            {
                image: "placeholder-img/malory.png",
                children: [
                    {
                        image: "placeholder-img/malory.png"
                    },
                    {
                        image: "placeholder-img/woodhouse.png"
                    },
                    {
                        image: "placeholder-img/cheryl.png"
                    },
                    {
                        image: "placeholder-img/pam.png"
                    },
                    {
                        image: "placeholder-img/woodhouse.png"
                    },
                    {
                        image: "placeholder-img/cheryl.png"
                    },
                    {
                        image: "placeholder-img/pam.png"
                    },
                    {
                        image: "placeholder-img/woodhouse.png"
                    },
                    {
                        image: "placeholder-img/cheryl.png"
                    },
                    {
                        image: "placeholder-img/pam.png"
                    },
                ]
            },
            {
                image: "placeholder-img/figgs.png",
                childrenDropLevel: 2,
                children: [
                    {
                        image: "placeholder-img/woodhouse.png"
                    },
                    {
                        image: "placeholder-img/cheryl.png"
                    },
                    {
                        image: "placeholder-img/pam.png"
                    },
                    {
                        image: "placeholder-img/woodhouse.png"
                    },
                    {
                        image: "placeholder-img/cheryl.png"
                    },
                    {
                        image: "placeholder-img/pam.png"
                    },
                    {
                        image: "placeholder-img/woodhouse.png"
                    },
                    {
                        image: "placeholder-img/cheryl.png"
                    },
                    {
                        image: "placeholder-img/pam.png"
                    },
                ]
            },
            {
                image: "placeholder-img/sterling.png",
                childrenDropLevel: 4,
                children: [
                    {
                        image: "placeholder-img/woodhouse.png"
                    },
                    {
                        image: "placeholder-img/cheryl.png"
                    },
                    {
                        image: "placeholder-img/pam.png"
                    },
                    {
                        image: "placeholder-img/woodhouse.png"
                    },
                    {
                        image: "placeholder-img/cheryl.png"
                    },
                    {
                        image: "placeholder-img/pam.png"
                    },
                    {
                        image: "placeholder-img/woodhouse.png"
                    },
                    {
                        image: "placeholder-img/cheryl.png"
                    },
                    {
                        image: "placeholder-img/pam.png"
                    },
                ]
            },
        ]
    }
}
