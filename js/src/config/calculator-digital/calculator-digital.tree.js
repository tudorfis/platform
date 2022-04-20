import { chartConfig } from '/js/src/config/tree/tree.config.js'
import projectConfig from '/js/src/config/calculator-digital/calculator-digital.config.js' 

console.log(projectConfig)
export default {
    ...chartConfig( '#chart' ),
    
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
