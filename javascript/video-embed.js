/* Click-to-load YouTube embeds.
 *
 * The page ships a local thumbnail instead of an <iframe>, so no request
 * reaches YouTube (and no third-party cookie is set) until the visitor
 * presses play. The click is the opt-in, which is what lets the site run
 * without a consent banner.
 */
document.querySelectorAll(".video-embed__facade").forEach(function (facade) {
  facade.addEventListener("click", function () {
    var iframe = document.createElement("iframe")
    iframe.src =
      "https://www.youtube.com/embed/" +
      encodeURIComponent(facade.dataset.videoId) +
      "?autoplay=1"
    iframe.title = facade.dataset.videoTitle || "Video"
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    iframe.allowFullscreen = true
    facade.replaceWith(iframe)
  })
})
