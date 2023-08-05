function stopVideo() {
  const videoPlayer = $("portfolioModal-{{ post.modal-id }}").find("#videoPlayer")[0];
  videoPlayer.pause();

    // Manually close the modal
  $("#portfolioModal-{{ post.modal-id }}").modal("hide");
}

/*function stopVideos(button) {
  const modalId = $(button).data("id");
  const videoPlayer = $("#portfolioModal-" + modalId).find("#videoPlayer")[0];
  videoPlayer.pause();

  // Manually close the modal
  $("#portfolioModal-" + modalId).modal("hide");
}*/

$(document).ready(function () {
  $("#pauseVideo").click(function () {
    stopVideos(); // Call the stopVideo function when the button is clicked
  });
});
