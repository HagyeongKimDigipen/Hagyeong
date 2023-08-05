function stopVideo() {
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.pause();
  }

function toggleButtonText() {
    const buttonText = document.getElementById("buttonText");
    if (buttonText.textContent === "Close") {
      buttonText.textContent = "Okay";
    } else {
      buttonText.textContent = "Close";
    }
    
    stopVideo();
  }
