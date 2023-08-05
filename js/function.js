function stopVideo(postModalId) {
  const videoPlayer = $("#" + postModalId).find("#videoPlayer")[0];
  videoPlayer.pause();

  console.log("Id is " + postModalId);
  console.log("full name is " + videoPlayer);

  // Manually close the modal
  $("#" + postModalId).modal("hide");
}

/*function stopVideos(button) {
  const modalId = $(button).data("id");
  const videoPlayer = $("#portfolioModal-" + modalId).find("#videoPlayer")[0];
  videoPlayer.pause();

  // Manually close the modal
  $("#portfolioModal-" + modalId).modal("hide");
}*/

$(document).ready(function () {
  $(".pauseVideoButton").click(function () {
    const postModalId = $(this).data("modal-id");
    stopVideo(postModalId); // Call the stopVideo function when the button is clicked
  });
});
