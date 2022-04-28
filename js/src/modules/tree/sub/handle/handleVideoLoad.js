
export function handleVideoLoad( nodeElement ) {
    modules.video.hideVideo()
    
    const mem = modules.video.mem
    const videoWrapper = mem.videos[ nodeElement.id ] || modules.video.createVideo( nodeElement )

    modules.video.showVideo( videoWrapper )
    
    mem.videoWrapper = videoWrapper
    mem.nodeElement = nodeElement
}
