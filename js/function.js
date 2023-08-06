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
      const postModalId = $(this).data("modal-id");
      console.debug("modal ID is " + postModalId);

      changeLanguage()

      const name = $("#nameForLanguage");

      const aboutLeft = $("#aboutLeft");
      const aboutRight = $("#aboutRight");

      const BSEdu = $("#BSForLanguage");
      const eduName = $("#SchoolForLanguage");
      const eduDate = $("#SchoolDateForLanguage");

      const BSEduKor = $("#BSForLanguageKor");
      const eduNameKor = $("#SchoolForLanguageKor");
      const eduDateKor = $("#SchoolDateForLanguageKor");

      const work = $("#workForLanguage");
      const workDescription = $("#workDescriptionForLanguage");
      const workDate = $("#workDateForLanguage");

      const descriptionEng = $("#descriptionForLanguageEng");
      const descriptionKor = $("#descriptionForLanguageKor");

      if (window.forLanguage === true)  //english use
      {
        $(this).text("한국어");
        name.text("Hagyeong Kim");

        aboutLeft.text("From a young age, I've been captivated by computers and dreamed of becoming a programmer. Pursuing this passion, I went to the United States to study computer. During my time at college, I delved into various programming projects, creating games and tackling diverse challenges. Overcoming numerous hurdles in programming, I found joy in problem-solving.");
        aboutRight.text("While my focus was primarily on game and graphics engineering at school, my curiosity extends to exploring and embracing fresh challenges. Programming is the inspiration driving me to explore and learn. Thank you for visiting my portfolio, where I hope you see my unwavering enthusiasm and commitment.");
        
        BSEdu.text("BS in Computer Science in Real-Time Interactive Simulation");
        eduName.text("Digipen Institue of Technology");
        eduDate.text("2018 - 2023");

        BSEduKor.text("");
        eduNameKor.text("");
        eduDateKor.text("");

        work.text("Mickey Music Academy");
        workDescription.text("I worked as a piano assistant instructor at a music academy, instructing numerous students ranging from kindergarten to middle school. <br>Additionally, I assisted with various administrative tasks at the academy.");
        workDate.text("2020 - 2021");

        //descriptionOutput.textContent = "{{ post.description }}";
        
        //$(".descriptionForLanguageEng").show();
        //$(".descriptionForLanguageKor").hide();

        //start to description
        if(postModalId == "portfolioModal-1")
        {
          descriptionEng.text("hihi");
          descriptionKor.text("");
        }
        else if(postModalId == "portfolioModal-2")
        {
          descriptionEng.text("hihi2");
          descriptionKor.text("");
        }
        else if(postModalId == "portfolioModal-3")
        {
          descriptionEng.text("hihi3");
          descriptionKor.text("");
        }
        else if(postModalId == "portfolioModal-4")
        {
          descriptionEng.text("hihi4");
          descriptionKor.text("");
        }
        else if(postModalId == "portfolioModal-5")
        {
          descriptionEng.text("hihi5");
          descriptionKor.text("");
        }
        else if(postModalId == "portfolioModal-6")
        {
          descriptionEng.text("hihi6");
          descriptionKor.text("");
        }
        else if(postModalId == "portfolioModal-7")
        {
          descriptionEng.text("hihi7");
          descriptionKor.text("");
        }
        else if(postModalId == "portfolioModal-8")
        {
          descriptionEng.text("hihi8");
          descriptionKor.text("");
        }
        else if(postModalId == "portfolioModal-9")
        {
          descriptionEng.text("hihi9");
          descriptionKor.text("");
        }
        else if(postModalId == "portfolioModal-10")
        {
          descriptionEng.text("hihi10");
          descriptionKor.text("");
        }
        else if(postModalId == "portfolioModal-11")
        {
          descriptionEng.text("hihi11");
          descriptionKor.text("");
        }
        else if(postModalId == "portfolioModal-12")
        {
          descriptionEng.text("hihi12");
          descriptionKor.text("");
        }
        //end description
      } 
      else  //korean use
      {
        $(this).text("English");
        name.text("김하경");

        aboutLeft.text("한국어 설명이 곧 추가 될 예정입니다.");
        aboutRight.text("한국어 설명이 곧 추가 될 예정입니다.");

        BSEdu.text("BS in Computer Science in Real-Time Interactive Simulation");
        eduName.text("Digipen Institue of Technology");
        eduDate.text("2018 - 2023");

        BSEduKor.text("디지펜게임공학과");
        eduNameKor.text("계명대학교");
        eduDateKor.text("2018 - 2023");

        work.text("미키 음악 학원");
        workDescription.text("음악 학원에서 피아노 보조 강사로 일했습니다, 유치부 부터 중등부까지 많은 학생들의 방과후 활동을 지도하였고 부가적으로 학원의 업무를 보조 하였습니다.");
        workDate.text("2020 - 2021");

        //start to description
        if(postModalId == "portfolioModal-1")
        {
          descriptionKor.text("더 자세한 설명이 추가 될 예정입니다.");
          descriptionEng.text("");
        }
        else if(postModalId == "portfolioModal-2")
        {
          descriptionKor.text("byebye");
          descriptionEng.text("");
        }
        else if(postModalId == "portfolioModal-3")
        {
          descriptionKor.text("byebye");
          descriptionEng.text("");
        }
        else if(postModalId == "portfolioModal-4")
        {
          descriptionKor.text("byebye");
          descriptionEng.text("");
        }
        else if(postModalId == "portfolioModal-5")
        {
          descriptionKor.text("byebye");
          descriptionEng.text("");
        }
        else if(postModalId == "portfolioModal-6")
        {
          descriptionKor.text("byebye");
          descriptionEng.text("");
        }
        else if(postModalId == "portfolioModal-7")
        {
          descriptionKor.text("byebye");
          descriptionEng.text("");
        }
        else if(postModalId == "portfolioModal-8")
        {
          descriptionKor.text("byebye");
          descriptionEng.text("");
        }
        else if(postModalId == "portfolioModal-9")
        {
          descriptionKor.text("byebye");
          descriptionEng.text("");
        }
        else if(postModalId == "portfolioModal-10")
        {
          descriptionKor.text("byebye");
          descriptionEng.text("");
        }
        else if(postModalId == "portfolioModal-11")
        {
          descriptionKor.text("byebye");
          descriptionEng.text("");
        }
        else if(postModalId == "portfolioModal-12")
        {
          descriptionKor.text("byebye");
          descriptionEng.text("");
        }
        //end description
      }

      //showDescription();

      console.log("workDate:" + work);
      console.log("workDate#" + $("#workDateForLanguage"));

      console.log("work:" + eduDate);
      console.log("work#" + $("#workForLanguage"));

      event.preventDefault();
  });
});


/*function showDescription() {
  //const nameEnglish = document.getElementById("name-english");
  //const nameKorean = document.getElementById("name-korean");
  const englishDescription = document.getElementById("english-description");
  const koreanDescription = document.getElementById("korean-description");
  const englishDescriptionSchool = document.getElementById("english-description-school");
  const koreanDescriptionSchool = document.getElementById("korean-description-school");

  if (window.forLanguage === false) //Korean
  {
    //nameEnglish.style.display = "none";
    //nameKorean.style.display = "inline-block";
    englishDescription.style.display = "none";
    koreanDescription.style.display = "inline-block";
    englishDescriptionSchool.style.display = "inline-block"
    koreanDescriptionSchool.style.display = "inline-block"
  } 
  else //English 
  {
    //nameEnglish.style.display = "inline-block";
    //nameKorean.style.display = "none";
    englishDescription.style.display = "inline-block";
    koreanDescription.style.display = "none"; //block
    englishDescriptionSchool.style.display = "inline-block"
    koreanDescriptionSchool.style.display = "none"
  }
}*/

//$(document).ready(function () {
//  showDescription(); // set language to display at loading 
//});

//$(document).ready(function () {
//  $("#languageChange1").click(function () {
//    changeLanguage(); // change Language
//  });
//});

/*window.forLanguage = function() {
  console.log("This is a global function!");
};*/