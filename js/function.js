function stopVideo() {
  const videoPlayer = $("#videoPlayer")[0];
  videoPlayer.pause();

    // Manually close the modal
  $("#portfolioModal-{{ post.modal-id }}").modal("hide");
}


$(document).ready(function () {
  $("#pauseVideo").click(function () {
    //event.stopPropagation(); // Prevent the default behavior of the data-dismiss attribute
    stopVideo(); // Call the stopVideo function when the button is clicked
  });
});
