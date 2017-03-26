$(document).ready(function() {
    var curPage = window.location.href
    InjectDownloadButton(curPage)
    setInterval(function() {
        if (curPage != window.location.href) {
            curPage = window.location.href
            setTimeout(function() {
                InjectDownloadButton(curPage)
            }, 2000)
        }
    }, 1000)
})

function InjectDownloadButton(url) {
    if (url.includes('watch?v=') && $(".download-button").length == 0) {
        $('.yt-uix-videoactionmenu').after('<div class="yt-uix-menu"><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup yt-uix-tooltip download-button" type="button" data-tooltip-text="Convert to MP3"><span class="yt-uix-button-content">Download</span></button></div>')
        $('.download-button').click(function(event) {
            event.preventDefault()
            window.location.href = 'http://www.youtubeinmp3.com/fetch/?video=' + url
        })
    }
}
