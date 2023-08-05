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

$(function() {
  $('.change-language a').bind('click', function(event) 
  {
      var $anchor = $(this);

      changeLanguage()

      if (window.forLanguage === true) 
      {
        $(this).text("한국어");
      } 
      else 
      {
        $(this).text("English");
      }

      showDescription();
      event.preventDefault();
  });
});

function showDescription() {
  const nameEnglish = document.getElementById("name-english");
  const nameKorean = document.getElementById("name-korean");
  const englishDescription = document.getElementById("english-description");
  const koreanDescription = document.getElementById("korean-description");

  if (window.forLanguage === false) //Korean
  {
    nameEnglish.style.display = "none";
    nameKorean.style.display = "inline";
    englishDescription.style.display = "none";
    koreanDescription.style.display = "inline";
  } 
  else //English 
  {
    nameEnglish.style.display = "inline";
    nameKorean.style.display = "none";
    englishDescription.style.display = "inline";
    koreanDescription.style.display = "none"; //block
  }
}

$(document).ready(function () {
  showDescription(); // set language to display at loading 
});

$(document).ready(function () {
  $("#languageChange1").click(function () {
    changeLanguage(); // change Language
  });
});

/*window.forLanguage = function() {
  console.log("This is a global function!");
};*/