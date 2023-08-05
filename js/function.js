function stopVideo() {
  const videoPlayer = $("#videoPlayer")[0];
  videoPlayer.pause();
}

function toggleButtonText() {
  const buttonText = $("#buttonText"); // Convert to jQuery object
  if (buttonText.text() === "Close") {
    buttonText.text("Okay");
  } else {
    buttonText.text("Close");
  }

  stopVideo();
}

// Attach the click event to the button
$(document).ready(function () {
  $("#toggleButton").click(function () {
    toggleButtonText();
  });
});

$(document).ready(function () {
  $("#pauseVideo").click(function () {
    stopVideo();
  });
});