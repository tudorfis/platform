import app from '/js/src/config/app/app.config.js'

export default {
    projecTtitle: 'Proiect web - calculator digital - html, css, javascript',
    projectFolder: 'media/calculator-digital',     

    chart: {
        'qwXa': {
            id: 'clcd',
            title: 'Proiect web - calculator digital - html, css, javascript',
            folderPath: '1.project',
            lineColor: app.treeColor,
            code: [ 'html', 'css', 'js' ],
            children: [ 'htex', 'we2A', 'kOlM' ],
        },

        ///// HTML /////
        'htex': {
            title: 'Structura HTML al calculatorului digital',
            folderPath: '2.html',
            lineColor: app.htmlColor,
            code: [ 'html' ],
            children: [ 'wxec','w2ec', 'w5ec' ],
        },

            'wxec': {
                title: 'Tag-uri in HTML ( cum se scriu )',
                folderPath: '2.1.tag',
                code: [ 'html' ],
                children: [],
            },
            'w2ec': {
                title: 'Comentarii in HTML, scopul lor',
                folderPath: '2.2.coments',
                code: [ 'html' ],
                children: [],
            },
            'w5ec': {
                title: 'Atribute pentru elemente',
                folderPath: '2.3.atribute',
                lineColor: '#f06329',
                stackChildren: true,
                code: [ 'html' ],
                children: [ 'a5ec', 'b5ec' ],
            },
                'a5ec': {
                    title: 'Atribute pentru elemente',
                    folderPath: '2.3.1.id-uri',
                    code: [ 'html' ],
                    children: [],
                },
                'b5ec': {
                    title: 'Atribute pentru elemente',
                    folderPath: '2.3.2.clase',
                    code: [ 'html' ],
                    children: [],
                },

        ///// CSS //////
        'we2A': {
            title: 'Design-ul CSS, aspectul aplicatiei',
            folderPath: '3.css',
            code: [ 'css' ],
            lineColor: app.cssColor,
            children: [ 'css1', 'css2' ],
        },
            'css1': {
                title: 'Random text css 1',
                folderPath: '3.1',
                code: [ 'css' ],
                children: [],
            },
            'css2': {
                title: 'Random text css 2',
                folderPath: '3.2',
                code: [ 'css' ],
                children: [],
            },

        ///// JS //////
        'kOlM': {
            title: 'Functionalitatea JavaScript',
            folderPath: '4.js',
            code: [ 'js' ],
            lineColor: app.jsColor,
            children: [ 'js01' ],
        },
        'js01': {
            title: 'Random javascript text 1',
            folderPath: '4.1',
            code: [ 'js' ],
            lineColor: 'yellow',
            children: [],
        }
    }
}
