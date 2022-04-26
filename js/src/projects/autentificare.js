import app from '/js/src/config/app.config.js'

export default {
    title: 'Proiect web - authentificare - html, css, javascript',
    folderPath: '/media/autentificare/1.project',
    lineColor: app.treeColor,
    code: [ 'html', 'css', 'js' ],
    children: [
        ///// HTML /////
        {
            title: 'Structura HTML al autentificarii',
            folderPath: '/media/autentificare/2.html',
            lineColor: app.htmlColor,
            code: [ 'html' ],
            children: []
        },
        ///// CSS /////
        {
            title: 'Designul CSS al autentificarii',
            folderPath: '/media/autentificare/3.css',
            lineColor: app.cssColor,
            code: [ 'css' ],
            children: []
        },
        ///// JS /////
        {
            title: 'Functionalitatea autentificarii',
            folderPath: '/media/autentificare/4.js',
            lineColor: app.jsColor,
            code: [ 'js' ],
            children: []
        },
    ]
}