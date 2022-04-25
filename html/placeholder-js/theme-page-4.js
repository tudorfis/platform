
modules.highlight.initHighlight(_ => {
    const vidId = 'qwXa'
    const project = projects.calculator
    const vidValue = project.chart[ vidId ]

    modules.highlight.renderCode( project, vidValue, '#code' )
})

