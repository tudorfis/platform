import colors from '/js/src/constants/colors.js'

export default {
    title: 'Authentificare web',
    folderPath: '/media/autentificare/1.project',
    lineColor: colors.treeColor,
    color: colors.treeColor,
    code: [ 'html', 'css', 'js' ],
    children: [
        ///// HTML /////
        {
            title: 'Structura HTML al autentificarii',
            folderPath: '/media/autentificare/2.html',
            lineColor: colors.htmlColor,
            color: colors.htmlColor,
            code: [ 'html' ],
            children: []
        },
        ///// CSS /////
        {
            title: 'Designul CSS al autentificarii',
            folderPath: '/media/autentificare/3.css',
            lineColor: colors.cssColor,
            color: colors.cssColor,
            code: [ 'css' ],
            children: []
        },
        ///// JS /////
        {
            title: 'Functionalitatea autentificarii',
            folderPath: '/media/autentificare/4.js',
            lineColor: colors.jsColor,
            color: colors.jsColor,
            code: [ 'js' ],
            children: []
        },
    ]
}
