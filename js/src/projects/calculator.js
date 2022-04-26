import app from '/js/src/config/app.config.js'

export default {
    title: 'Proiect web - calculator digital - html, css, javascript',
    folderPath: '/media/calculator/1.project',
    lineColor: app.treeColor,
    code: [ 'html', 'css', 'js' ],
    children: [

        ///// HTML /////
        {
            title: 'Structura HTML al calculatorului digital',
            folderPath: '/media/calculator/2.html',
            lineColor: app.htmlColor,
            code: [ 'html' ],
            children: [ 
                {
                    title: 'Tag-uri in HTML ( cum se scriu )',
                    folderPath: '/media/calculator/2.1.tag',
                    code: [ 'html' ],
                    children: [],
                },
                {
                    title: 'Comentarii in HTML, scopul lor',
                    folderPath: '/media/calculator/2.2.coments',
                    code: [ 'html' ],
                    children: [],
                },
                {
                    title: 'Atribute pentru elemente',
                    folderPath: '/media/calculator/2.3.atribute',
                    lineColor: '#f06329',
                    stackChildren: true,
                    code: [ 'html' ],
                    children: [
                        {
                            title: 'Cum se folosesc id-urile',
                            folderPath: '/media/calculator/2.3.1.id-uri',
                            code: [ 'html' ],
                            children: [],
                        },
                        {
                            title: 'Cum se folosesc clasele',
                            folderPath: '/media/calculator/2.3.2.clase',
                            code: [ 'html' ],
                            children: [],
                        }
                    ],
                }
            ],
        },

        ///// CSS //////
        {
            title: 'Design-ul CSS, aspectul aplicatiei',
            folderPath: '/media/calculator/3.css',
            code: [ 'css' ],
            lineColor: app.cssColor,
            children: [
                {
                    title: 'Random text css 1',
                    folderPath: '/media/calculator/3.1',
                    code: [ 'css' ],
                    children: [],
                },
                {
                    title: 'Random text css 2',
                    folderPath: '/media/calculator/3.2',
                    code: [ 'css' ],
                    children: [],
                },
            ],
        },

        ///// JS //////
        {
            title: 'Functionalitatea JavaScript',
            folderPath: '/media/calculator/4.js',
            code: [ 'js' ],
            lineColor: app.jsColor,
            children: [
                {
                    title: 'Random javascript text 1',
                    folderPath: '/media/calculator/4.1',
                    code: [ 'js' ],
                    lineColor: 'yellow',
                    children: [],
                }
            ],
        }
    ],
}
