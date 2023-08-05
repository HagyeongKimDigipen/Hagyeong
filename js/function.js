function stopVideo(postModalId) {
  const videoPlayer = $("#" + postModalId).find("#videoPlayer")[0];
  videoPlayer.pause();

  //onsole.log("Id is " + postModalId);
  //console.log("full name is " + videoPlayer);

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

window.forLanguage = true; // true = English false = Korean

function changeLanguage()
{
  window.forLanguage = !window.forLanguage;

  if(window.forLanguage)
  {
    console.log("It is True, It is English");
  }
  else
  {
    console.log("It is False, It is Korean");
  }
}

function createLanguageButtons() 
{
  const languageButtonsDiv = document.getElementById("languageButtons");
  
  if (window.forLanguage === true) 
  {
    const englishButton = document.createElement("button");
    englishButton.textContent = "한국어";
    languageButtonsDiv.appendChild(englishButton);
  } else 
  {
    const koreanButton = document.createElement("button");
    koreanButton.textContent = "English";
    languageButtonsDiv.appendChild(koreanButton);
  }
}

$(document).ready(function () {
  $("#languageChange1").click(function () {
    createLanguageButtons(); // change Language
  });
});

$(document).ready(function () {
  $("#languageChange2").click(function () {
    changeLanguage(); // change Language
  });
});

/*window.forLanguage = function() {
  console.log("This is a global function!");
};*/

// 전역 함수 선언
window.myGlobalFunction = function() {
  console.log("This is a global function!");
};