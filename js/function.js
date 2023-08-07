function stopVideo(postModalId) {
  const videoPlayer = $("#" + postModalId).find("#videoPlayer")[0];
  videoPlayer.pause();

  console.log("Id is " + postModalId);
  //console.log("full name is " + videoPlayer);

  // Manually close the modal
  $("#" + postModalId).modal("hide");
}

// 디버그 메시지를 출력할 요소 선택
const debugMessageElement = document.getElementById("debugMessage");

// 이미지 요소들 선택
//const portfolioItems = document.querySelectorAll(".portfolio-item");

// 각 이미지 요소에 마우스 오버 이벤트 리스너 추가
//portfolioItems.forEach(item => {
//  const modalId = item.querySelector(".portfolio-link").getAttribute("href");
  
//  item.addEventListener("mouseover", () => {
//    debugMessageElement.textContent = `Mouse over image with modal-id: ${modalId}`;
//  });

//  item.addEventListener("mouseout", () => {
//    debugMessageElement.textContent = "";
//  });
//});

window.forLanguage = true; // true = English false = Korean

const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioItems.forEach(item => 
{
  const modalId = item.querySelector(".portfolio-link").getAttribute("href");

  const modalIdElement = $(modalId).find("#getModalId");
  //const icons = modalIdElement.find("img");

  item.addEventListener("mouseover", () => {
    debugMessageElement.textContent = `Mouse over image with modal-id: ${modalId}`;
    if (window.forLanguage === true)  //english use
    {
      if(modalId == "#portfolioModal-1")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/GameProject.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/TeamProejct.ico";
      }
      else if(modalId == "#portfolioModal-2")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/GameProject.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/TeamProejct.ico";
      }
      else if(modalId == "#portfolioModal-3")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/GameProject.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/TeamProejct.ico";       
      }
      else if(modalId == "#portfolioModal-4")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/GameProject.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/SoloProejct.ico"; 
      }
      else if(modalId == "#portfolioModal-5")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/GraphicEngine.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/SoloProejct.ico";           
      }
      else if(modalId == "#portfolioModal-6")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/GraphicEngine.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/SoloProejct.ico";   
      }
      else if(modalId == "#portfolioModal-7")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/GraphicEngine.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/SoloProejct.ico";                
      }
      else if(modalId == "#portfolioModal-8")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/GraphicEngine.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/SoloProejct.ico";                 
      }
      else if(modalId == "#portfolioModal-9")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/ARProejct.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/TeamProejct.ico";   
      }
      else if(modalId == "#portfolioModal-10")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/MoblieProject.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/TeamProejct.ico";  
      }
      else if(modalId == "#portfolioModal-11")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/PortableProject.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/TeamProejct.ico";  
      }
    } 
    else  //korean use
    {
      if(modalId == "#portfolioModal-1")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/GameProjectKor.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/TeamProejctKor.ico";
      }
      else if(modalId == "#portfolioModal-2")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/GameProjectKor.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/TeamProejctKor.ico";
      }
      else if(modalId == "#portfolioModal-3")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/GameProjectKor.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/TeamProejctKor.ico";       
      }
      else if(modalId == "#portfolioModal-4")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/GameProjectKor.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/SoloProejctKor.ico"; 
      }
      else if(modalId == "#portfolioModal-5")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/GraphicEngineKor.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/SoloProejctKor.ico";           
      }
     else if(modalId == "#portfolioModal-6")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/GraphicEngineKor.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/SoloProejcKort.ico";   
      }
      else if(modalId == "#portfolioModal-7")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/GraphicEngineKor.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/SoloProejctKor.ico";                
      }
      else if(modalId == "#portfolioModal-8")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/GraphicEngineKor.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/SoloProejctKor.ico";                 
      }
      else if(modalId == "#portfolioModal-9")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/ARProejctKor.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/TeamProejctKor.ico";   
      }
      else if(modalId == "#portfolioModal-10")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/MoblieProjectKor.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/TeamProejcKort.ico";  
      }
      else if(modalId == "#portfolioModal-11")
      {
        modalIdElement.getElementById("firstIcon").src = "img/tagIcon/PortableProjectKor.ico";
        modalIdElement.getElementById("secondIcon").src = "img/tagIcon/TeamProejctKor.ico";  
      }
    }
  });
});

$(document).ready(function () {
  $(".pauseVideoButton").click(function () {
    const postModalId = $(this).data("modal-id");
    stopVideo(postModalId); // Call the stopVideo function when the button is clicked
  });
});

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
  $('.portfolio-link').on('click', function(event) {

    event.preventDefault();
    console.log("change the word!!");

    const postModalId = $(this).attr('href').substring(1);

    const description = $("#" + postModalId).find("#descriptionForLanguage");
    const role = $("#" + postModalId).find("#roleForLanguage");
    const date = $("#" + postModalId).find("#dateForLanguage");
    const category = $("#" + postModalId).find("#categoryForLanguage");

    if (window.forLanguage === true)  //english use
    {
      //start to description
      if(postModalId == "portfolioModal-1")
      {
        description.text(postModalId + "More detailed descriptions will be added soon. 27");
        role.text("Producer");
        date.text("September 2019 - June 2020");
        category.text("Team Game Project");
      }
      else if(postModalId == "portfolioModal-2")
      {
        description.text(postModalId + "More detailed descriptions will be added soon.");
        role.text("GamePlay Programmer");
        date.text("September 2021 - April 2022");
        category.text("Team Game Project");
      }
      else if(postModalId == "portfolioModal-3")
      {
        description.text(postModalId + "More detailed descriptions will be added soon.");
        role.text("Producer");
        date.text("March 2019 - June 2019");
        category.text("Team Game Project");
      }
      else if(postModalId == "portfolioModal-4")
      {
        description.text(postModalId + "More detailed descriptions will be added soon.");
        role.text("Solo Proejct");
        date.text("March 2020 - August 2020");
        category.text("Academic Game Project");
      }
      else if(postModalId == "portfolioModal-5")
      {
        description.text(postModalId + "More detailed descriptions will be added soon.");
        role.text("Solo Proejct");
        date.text("September 2021 - November 2021");
        category.text("Graphics Engine");
      }
      else if(postModalId == "portfolioModal-6")
      {
        description.text(postModalId + "More detailed descriptions will be added soon.");
        role.text("Solo Proejct");
        date.text("September 2021 - November 2021");
        category.text("Graphics Engine");
      }
      else if(postModalId == "portfolioModal-7")
      {
        description.text(postModalId + "More detailed descriptions will be added soon.");
        role.text("Solo Proejct");
        date.text("March 2020 - August 2020");
        category.text("Graphics Engine");
      }
      else if(postModalId == "portfolioModal-8")
      {
        description.text(postModalId + "More detailed descriptions will be added soon.");
        role.text("Solo Proejct");
        date.text("March 2020 - August 2020");
        category.text("Graphics Engine");
      }
      else if(postModalId == "portfolioModal-9")
      {
        description.text(postModalId + "More detailed descriptions will be added soon.");
        role.text("Programmer (2 member)");
        date.text("September 2022 - April 2023");
        category.text("AR Project");
      }
      else if(postModalId == "portfolioModal-10")
      {
        description.text(postModalId + "More detailed descriptions will be added soon.");
        role.text("Programmer (2 member)");
        date.text("May 2022 - August 2022");
        category.text("Mobile Game Project");
      }
      else if(postModalId == "portfolioModal-11")
      {
        description.text(postModalId + "More detailed descriptions will be added soon.");
        role.text("Programmer");
        date.text("September 2022 - December 2022");
        category.text("Portable Game Project");
      }
      else if(postModalId == "portfolioModal-12")
      {
        description.text(postModalId + "More detailed descriptions will be added soon.");
        role.text("Undefined");
        date.text("Undefined");
        category.text("Undefined");
      }
      //end description
    } 
    else  //korean use
    {
      //start to description
      if(postModalId == "portfolioModal-1")
      {
        description.text(postModalId + "더 자세한 설명이 추가 될 예정입니다.");
        console.log("it worksss!!! KOR");
        role.text("프로듀서");
        date.text("2019년 9월 - 2020년 6월");
        category.text("팀 게임 프로젝트");
      }
      else if(postModalId == "portfolioModal-2")
      {
        description.text(postModalId + "더 자세한 설명이 추가 될 예정입니다.");
        role.text("게임플레이 프로그래머");
        date.text("2021년 9월 - 2022년 4월");
        category.text("팀 게임 프로젝트");
      }
      else if(postModalId == "portfolioModal-3")
      {
        description.text(postModalId + "더 자세한 설명이 추가 될 예정입니다.");
        role.text("프로듀서");
        date.text("2019년 3월 - 2019년 6월");
        category.text("팀 게임 프로젝트");
      }
      else if(postModalId == "portfolioModal-4")
      {
        description.text(postModalId + "더 자세한 설명이 추가 될 예정입니다.");
        role.text("1인 프로젝트");
        date.text("2020년 3월 - 2020년 9월");
        category.text("아카데믹 게임 프로젝트");
      }
      else if(postModalId == "portfolioModal-5")
      {
        description.text(postModalId + "더 자세한 설명이 추가 될 예정입니다.");
        role.text("1인 프로젝트");
        date.text("2021년 9월 - 2021년 11월");
        category.text("그래픽 프로젝트");
      }
      else if(postModalId == "portfolioModal-6")
      {
        description.text(postModalId + "더 자세한 설명이 추가 될 예정입니다.");
        role.text("1인 프로젝트");
        date.text("2021년 9월 - 2020년 11월");
        category.text("그래픽 프로젝트");
      }
      else if(postModalId == "portfolioModal-7")
      {
        description.text(postModalId + "더 자세한 설명이 추가 될 예정입니다.");
        role.text("1인 프로젝트");
        date.text("2020년 3월 - 2020년 8월");
        category.text("그래픽 프로젝트");
      }
      else if(postModalId == "portfolioModal-8")
      {
        description.text(postModalId + "더 자세한 설명이 추가 될 예정입니다.");
        role.text("1인 프로젝트");
        date.text("2020sus 3dnjf - 2020sus 8월");
        category.text("그래픽 프로젝트");
      }
      else if(postModalId == "portfolioModal-9")
      {
        description.text(postModalId + "더 자세한 설명이 추가 될 예정입니다.");
        role.text("2인 프로젝트");
        date.text("2022년 9월 - 2023년 4월");
        category.text("AR 프로젝트");
      }
      else if(postModalId == "portfolioModal-10")
      {
        description.text(postModalId + "더 자세한 설명이 추가 될 예정입니다.");
        role.text("2인 프로젝트");
        date.text("2022년 5월 - 2022년 8월");
        category.text("모바일 게임 프로젝트");
      }
      else if(postModalId == "portfolioModal-11")
      {
        description.text(postModalId + "더 자세한 설명이 추가 될 예정입니다.");
        role.text("프로그래머 (3인 프로젝트)");
        date.text("2022년 9월 - 2022년 12월");
        category.text("휴대용 게임 프로젝트");
      }
      else if(postModalId == "portfolioModal-12")
      {
        description.text(postModalId + "더 자세한 설명이 추가 될 예정입니다.");
        role.text("미정");
        date.text("미정");
        category.text("미정");
      }
    }
  });
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
      const eduDate = $("#schoolDateFoLanguager");

      const BSEduKor = $("#BSForLanguageKor");
      const eduNameKor = $("#SchoolForLanguageKor");
      const eduDateKor = $("#schoolDateFoLanguagerKor");

      const work = $("#workForLanguage");
      const workDescription = $("#workDescriptionForLanguage");
      const workDate = $("#workDateForLanguage");

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
      event.preventDefault();
  });
});