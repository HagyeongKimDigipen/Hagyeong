function stopVideo(postModalId) {
  const videoPlayer = $("#" + postModalId).find("#videoPlayer")[0];
  videoPlayer.pause();

  console.log("Id is " + postModalId);
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

$(document).ready(function() {
  $('.modalLanguage a').on('click', function(event) 
  {
  });
});

$('.modal').on('shown.bs.modal', function () {
  //$('.modalLanguage a').on('click', function(event) 
  //{
      console.log("clickkkkkk!!");

      const postModalId = $(this).data("modal-id");
      const description = $("#descriptionForLanguage");

      if (window.forLanguage === true)  //english use
      {
        //start to description
        if(postModalId == "portfolioModal-1")
        {
          description.text("hihi");
          console.log("it worksss!!! ENG");
        }
        else if(postModalId == "portfolioModal-2")
        {
          description.text("hihi2");
        }
        else if(postModalId == "portfolioModal-3")
        {
          description.text("hihi3");
        }
        else if(postModalId == "portfolioModal-4")
        {
          description.text("hihi4");
        }
        else if(postModalId == "portfolioModal-5")
        {
          description.text("hihi5");
        }
        else if(postModalId == "portfolioModal-6")
        {
          description.text("hihi6");
        }
        else if(postModalId == "portfolioModal-7")
        {
          description.text("hihi7");
        }
        else if(postModalId == "portfolioModal-8")
        {
          description.text("hihi8");
        }
        else if(postModalId == "portfolioModal-9")
        {
          description.text("hihi9");
        }
        else if(postModalId == "portfolioModal-10")
        {
          description.text("hihi10");
        }
        else if(postModalId == "portfolioModal-11")
        {
          description.text("hihi11");
        }
        else if(postModalId == "portfolioModal-12")
        {
          description.text("hihi12");
        }
        //end description
      } 
      else  //korean use
      {
        //start to description
        if(postModalId == "portfolioModal-1")
        {
          description.text("더 자세한 설명이 추가 될 예정입니다.");
          console.log("it worksss!!! KOR");
        }
        else if(postModalId == "portfolioModal-2")
        {
          description.text("byebye");
        }
        else if(postModalId == "portfolioModal-3")
        {
          description.text("byebye");
        }
        else if(postModalId == "portfolioModal-4")
        {
          description.text("byebye");
        }
        else if(postModalId == "portfolioModal-5")
        {
          description.text("byebye");
        }
        else if(postModalId == "portfolioModal-6")
        {
          description.text("byebye");
        }
        else if(postModalId == "portfolioModal-7")
        {
          description.text("byebye");
        }
        else if(postModalId == "portfolioModal-8")
        {
          description.text("byebye");
        }
        else if(postModalId == "portfolioModal-9")
        {
          description.text("byebye");
        }
        else if(postModalId == "portfolioModal-10")
        {
          description.text("byebye");
        }
        else if(postModalId == "portfolioModal-11")
        {
          description.text("byebye");
        }
        else if(postModalId == "portfolioModal-12")
        {
          description.text("byebye");
        }
      }
      //event.preventDefault();
  //});
});

$(function() {
  $('.change-language a').bind('click', function(event) 
  {
      var $anchor = $(this);

      changeLanguage()

      const name = $("#nameForLanguage");

      const aboutLeft = $("#aboutLeft");
      const aboutRight = $("#aboutRight");

      const BSEdu = $("#BSForLanguage");
      const eduName = $("#SchoolForLanguage");
      const eduDate = $("#BSForLanguage span");

      const BSEduKor = $("#BSForLanguageKor");
      const eduNameKor = $("#SchoolForLanguageKor");
      const eduDateKor = $("#SchoolForLanguageKor span");

      const work = $("#workForLanguage");
      const workDescription = $("#workDescriptionForLanguage");
      const workDate = $("#workForLanguage span");

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
      }

      //showDescription();

      //console.log("workDate:" + work);
      //console.log("workDate#" + $("#workDateForLanguage"));

      //console.log("work:" + eduDate);
      //console.log("work#" + $("#workForLanguage"));

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