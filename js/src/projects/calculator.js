
import colors from '/js/src/constants/colors.js'

export default {
    title: 'Calculator Digital',
    folderPath: '/media/calculator/1.project',
    lineColor: colors.treeColor,
    color: colors.treeColor,
    code: [ 'html', 'css', 'js' ],
    children: [

        ///// HTML /////
        {
            title: 'Structura HTML al calculatorului digital',
            folderPath: '/media/calculator/2.html',
            lineColor: colors.htmlColor,
            color: colors.htmlColor,
            code: [ 'html' ],
            children: [ 
                {
                    title: 'Tag-uri in HTML ( cum se scriu )',
                    folderPath: '/media/calculator/2.1.tag',
                    color: colors.htmlColor,
                    code: [ 'html' ],
                    children: [],
                },
                {
                    title: 'Comentarii in HTML, scopul lor',
                    folderPath: '/media/calculator/2.2.coments',
                    color: colors.htmlColor,
                    code: [ 'html' ],
                    children: [],
                },
                {
                    title: 'Atribute pentru elemente',
                    folderPath: '/media/calculator/2.3.atribute',
                    lineColor: colors.htmlColor,
                    color: colors.htmlColor,
                    stackChildren: true,
                    code: [ 'html' ],
                    children: [
                        {
                            title: 'Cum se folosesc id-urile',
                            folderPath: '/media/calculator/2.3.1.id-uri',
                            color: colors.htmlColor,
                            code: [ 'html' ],
                            children: [],
                        },
                        {
                            title: 'Cum se folosesc clasele',
                            folderPath: '/media/calculator/2.3.2.clase',
                            color: colors.htmlColor,
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
            lineColor: colors.cssColor,
            color: colors.cssColor,
            children: [
                {
                    title: 'Random text css 1',
                    folderPath: '/media/calculator/3.1',
                    color: colors.cssColor,
                    code: [ 'css' ],
                    children: [],
                },
                {
                    title: 'Random text css 2',
                    folderPath: '/media/calculator/3.2',
                    color: colors.cssColor,
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
            lineColor: colors.jsColor,
            color: colors.jsColor,
            children: [
                {
                    title: 'Random javascript text 1',
                    folderPath: '/media/calculator/4.1',
                    code: [ 'js' ],
                    lineColor: 'yellow',
                    color: colors.jsColor,
                    children: [],
                }
            ],
        }
    ],
}
