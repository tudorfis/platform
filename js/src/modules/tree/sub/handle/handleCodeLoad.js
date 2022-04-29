
export function handleCodeLoad( nodeElement ) {
    modules.code.hideCode()
    
    const codeMem = modules.code.codeMem
    const codeWrapper = codeMem.codes[ nodeElement.id ] || modules.code.createCode( nodeElement )

    modules.code.showCode( codeWrapper, nodeElement )
    
    codeMem.codeWrapper = codeWrapper
    codeMem.nodeElement = nodeElement
}
