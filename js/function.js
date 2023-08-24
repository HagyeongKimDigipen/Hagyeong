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

  const getImg = $(item).find("#getModalId");
  //const icons = modalIdElement.find("img");

  item.addEventListener("mouseover", () => {
    //debugMessageElement.textContent = `Mouse over image with modal-id: ${modalId}`;
    if (window.forLanguage === true)  //english use
    {
      if(modalId == "#portfolioModal-1")
      {
        document.getElementById("firstIcon1").src = "img/tagIcon/GameProject.ico";
        document.getElementById("secondIcon1").src = "img/tagIcon/TeamProject.ico";
      }
      else if(modalId == "#portfolioModal-2")
      {
        document.getElementById("firstIcon2").src = "img/tagIcon/GameProject.ico";
        document.getElementById("secondIcon2").src = "img/tagIcon/TeamProject.ico";
      }
      else if(modalId == "#portfolioModal-3")
      {
        document.getElementById("firstIcon3").src = "img/tagIcon/GameProject.ico";
        document.getElementById("secondIcon3").src = "img/tagIcon/TeamProject.ico";       
      }
      else if(modalId == "#portfolioModal-4")
      {
        document.getElementById("firstIcon4").src = "img/tagIcon/GameProject.ico";
        document.getElementById("secondIcon4").src = "img/tagIcon/SoloProject.ico"; 
      }
      else if(modalId == "#portfolioModal-5")
      {
        document.getElementById("firstIcon5").src = "img/tagIcon/GraphicEngine.ico";
        document.getElementById("secondIcon5").src = "img/tagIcon/SoloProject.ico";           
      }
      else if(modalId == "#portfolioModal-6")
      {
        document.getElementById("firstIcon6").src = "img/tagIcon/GraphicEngine.ico";
        document.getElementById("secondIcon6").src = "img/tagIcon/SoloProject.ico";   
      }
      else if(modalId == "#portfolioModal-7")
      {
        document.getElementById("firstIcon7").src = "img/tagIcon/GraphicEngine.ico";
        document.getElementById("secondIcon7").src = "img/tagIcon/SoloProject.ico";                
      }
      else if(modalId == "#portfolioModal-8")
      {
        document.getElementById("firstIcon8").src = "img/tagIcon/GraphicEngine.ico";
        document.getElementById("secondIcon8").src = "img/tagIcon/SoloProject.ico";                 
      }
      else if(modalId == "#portfolioModal-9")
      {
        document.getElementById("firstIcon9").src = "img/tagIcon/ARProejct.ico";
        document.getElementById("secondIcon9").src = "img/tagIcon/TeamProject.ico";   
      }
      else if(modalId == "#portfolioModal-10")
      {
        document.getElementById("firstIcon10").src = "img/tagIcon/MoblieProject.ico";
        document.getElementById("secondIcon10").src = "img/tagIcon/TeamProject.ico";  
      }
      else if(modalId == "#portfolioModal-11")
      {
        document.getElementById("firstIcon11").src = "img/tagIcon/PortableProject.ico";
        document.getElementById("secondIcon11").src = "img/tagIcon/TeamProject.ico";  
      }
    } 
    else  //korean use
    {
      if(modalId == "#portfolioModal-1")
      {
        document.getElementById("firstIcon1").src = "img/tagIcon/GameProjectKor.ico";
        document.getElementById("secondIcon1").src = "img/tagIcon/TeamProjectKor.ico";
      }
      else if(modalId == "#portfolioModal-2")
      {
        document.getElementById("firstIcon2").src = "img/tagIcon/GameProjectKor.ico";
        document.getElementById("secondIcon2").src = "img/tagIcon/TeamProjectKor.ico";
      }
      else if(modalId == "#portfolioModal-3")
      {
        document.getElementById("firstIcon3").src = "img/tagIcon/GameProjectKor.ico";
        document.getElementById("secondIcon3").src = "img/tagIcon/TeamProjectKor.ico";       
      }
      else if(modalId == "#portfolioModal-4")
      {
        document.getElementById("firstIcon4").src = "img/tagIcon/GameProjectKor.ico";
        document.getElementById("secondIcon4").src = "img/tagIcon/SoloProjectKor.ico"; 
      }
      else if(modalId == "#portfolioModal-5")
      {
        document.getElementById("firstIcon5").src = "img/tagIcon/GraphicEngineKor.ico";
        document.getElementById("secondIcon5").src = "img/tagIcon/SoloProjectKor.ico";           
      }
     else if(modalId == "#portfolioModal-6")
      {
        document.getElementById("firstIcon6").src = "img/tagIcon/GraphicEngineKor.ico";
        document.getElementById("secondIcon6").src = "img/tagIcon/SoloProjectKor.ico";   
      }
      else if(modalId == "#portfolioModal-7")
      {
        document.getElementById("firstIcon7").src = "img/tagIcon/GraphicEngineKor.ico";
        document.getElementById("secondIcon7").src = "img/tagIcon/SoloProjectKor.ico";                
      }
      else if(modalId == "#portfolioModal-8")
      {
        document.getElementById("firstIcon8").src = "img/tagIcon/GraphicEngineKor.ico";
        document.getElementById("secondIcon8").src = "img/tagIcon/SoloProjectKor.ico";                 
      }
      else if(modalId == "#portfolioModal-9")
      {
        document.getElementById("firstIcon9").src = "img/tagIcon/ARProejctKor.ico";
        document.getElementById("secondIcon9").src = "img/tagIcon/TeamProjectKor.ico";   
      }
      else if(modalId == "#portfolioModal-10")
      {
        document.getElementById("firstIcon10").src = "img/tagIcon/MoblieProjectKor.ico";
        document.getElementById("secondIcon10").src = "img/tagIcon/TeamProjectKor.ico";  
      }
      else if(modalId == "#portfolioModal-11")
      {
        document.getElementById("firstIcon11").src = "img/tagIcon/PortableProjectKor.ico";
        document.getElementById("secondIcon11").src = "img/tagIcon/TeamProjectKor.ico";  
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
        description.html("PooPooPiPe is 2D puzzle game that connect to pipes from start to end so that the main character, Poo, Players can use the mouse to drag and move pipe puzzle pieces, and click to rotates the direction of the pipes. Once the pipe puzzle is completed, Poo moves to the destination, advancing to the next stage.<br> This project was developed in C++ and implemented with a self-made engine. As the producer of the team, I oversaw the overall process of the project, implemented the game engine, and created most of the game stages and elements. <br> When I made my own game engine, I faced difficulties due to the lack of specific information, but by researching various resources and reading books on game design, I was able to create the engine.  Since our team needed to develop the game quickly, time for creating the engine was limited, which made it challenging, but it was also a valuable learning experience to create an engine from the ground up.<br>Furthermore, during the project, there were conflicts between team members due to one team member not completing tasks on time. However, as the producer, I conducted meetings to reconcile the team and personally helped the team member with assigned tasks to resolve the conflict. <br> It was my first project to make my own engine, so I had a lot of difficulties while making it, and I ran out of time, but the completed game reflects our team's unique style, and it was good to make everything myself from the beginning to the end of the game. Moreover, successfully wrapping up this project as a complete game made it a meaningful endeavor.");
        role.html("Producer");
        date.html("September 2019 - June 2020");
        category.html("Team Game Project");
      }
      else if(postModalId == "portfolioModal-2")
      {
        description.text("Release From Perdition is a 3D first-person shooter game that features a journey to defeat numerous monsters with shooting and special abilities and find missing team members. Players can move to the keyboard, use the mouse to change weapons and shoot, and use the special ability to change positions and spawn shadows that have the ability to explode. <br> This project was developed using Unreal Engine 4 and C++. As the team's gameplay programmer, I was responsible for player movement, monster spawning, and implementing monster spawn effects and health. Additionally, I collaborated with the team member responsible for creating monsters to enhance the AI behavior of the monsters. <br> Since this was my first experience with Unreal Engine, I faced many challenges due to my limited understanding of the engine. However, I made efforts to quickly familiarize myself with Unreal Engine by researching various resources. Moreover, as there weren't many available resources, I focused on self-solving problems as much as possible. <br> Especially as the person responsible for the spawn system, which had to manage multiple monsters created by different team members, I encountered some difficulties. Therefore, I implemented the spawn system that could track the number of live monsters in the field, allowing game designers to easily set the type, quantity, and respawn frequency of monsters when creating maps. <br> Collaborating with team members from different backgrounds in terms of race, age, and majors, I was able to learn about the process of creating a game. Our team held weekly meetings to share difficulties and solve problems together. Through sharing ideas and constantly pondering how to improve the game in a better direction, I learned a lot during this project.");
        role.text("GamePlay Programmer");
        date.text("September 2021 - April 2022");
        category.text("Team Game Project");
      }
      else if(postModalId == "portfolioModal-3")
      {
        description.text(postModalId + "Pang Pang Dust is a 2D platformer shooting game where players use a vacuum cleaner to catch up fine dust particles, attack and purify ultrafine dust, and run to the finish line Players can move using the keyboard, shoot using the mouse, and enjoy the game using various items. <br> This project was developed in C++ and implemented using a custom engine created by the professor, not a commercial engine. As the team's producer, I oversaw the members and was responsible for the game's health system, spawning dust, and character movement. I also handled the game's scoring system, map design, and created the shooting gauge. <br> Since this was my first direct experience in creating a game, there were many shortcomings and challenges. However, I was able to learn about the skills required for game development and gain insights by collaborating with team members and working together harmoniously. Despite its shortcomings, this project provided a foundation for game development and allowed me to build a solid understanding of game projects.");
        role.text("Producer");
        date.text("March 2019 - June 2019");
        category.text("Team Game Project");
      }
      else if(postModalId == "portfolioModal-4")
      {
        description.text("This project is about implementing the basic structure of a game engine. In addition to the engine, there are two simple 2D games included. One is a platformer game where players avoid obstacles and runs to the finish line, and the other is a shooting game where the players move a spaceship and destroy obstacles. <br> This project was developed in C++ and is aimed at providing a fundamental understanding of creating a game engine and implementing simple games using the created engine. Since it was a solo project, I created everything from scratch, but the graphics engine used for implementing the simple games was provided by the professor. <br> From features like debugging output, engine loop, FPS, components, connecting stages, and more, I personally implemented the basic functionalities that are typically included in a game engine. In the simple games created using this engine, I implemented character movement, basic AABB collision detection, shooting mechanics, Parallax scrolling background, and Wrapping – fundamental techniques commonly used in games. <br> It is a project where I was able to learn the structure and basic functions of the game engine. I had a very difficult experience working on the project without basic knowledge of the game engine, so I thought it would have been nice if I had done this project before working on it. It was a project to lay the foundation for the game engine again.");
        role.text("Solo Proejct");
        date.text("March 2020 - August 2020");
        category.text("Academic Game Project");
      }
      else if(postModalId == "portfolioModal-5")
      {
        description.text("This project is a Graphics engine that includes lighting. It is a solo project created using C++, OpenGL, ImGui and GLSL <br> At first, I created a basic graphics engine for this project that involved loading objects and mapping textures and then I developed shaders capable of Phong Lighting, Phong Shading, and Blinn shading <br> In addition, I have added lights that extend up to 16 and allow the user to set individual values for these lights, and the possible values are the items below. <br> - Choose the type of light among Point Light, Directional Light, and Spot Light <br> - Inner and outer angle for spot light <br> - Spot falloff <br> Furthermore, there are the following values as user-configurable global values <br> - Ambient, diffuse and specular color <br> - attenuation coefficients <br> - atmospherc(fog) color <br> - Global ambient color <br> Also, when mapping textures, users can change the color of material coefficients, and I have provided the option to separately set calculations on the CPU and GPU. <br> Since it was a graphic engine that I had to create on my own, there were many challenges, but I tackled each problem step by step.");
        role.text("Solo Proejct");
        date.text("September 2021 - November 2021");
        category.text("Graphics Engine");
      }
      else if(postModalId == "portfolioModal-6")
      {
        description.text("This project is a graphic engine that implements Environment Mapping including Reflection and Refraction. It's a solo project created using C++, OpenGL, Im Gui, and GLSL. <br> The graphic engine includes basic functions such as loading objects and mapping textures. Additionally, I've incorporated features like cube mapping for the skybox, scene rendering using FBO, and shaders capable of Environment Mapping. <br> Environment Mapping includes the following elements <br>  - Only reflection <br> - Only refraction <br> - Combination of both <br> Also, I made Phong shading and Environment mapping work at the same time. <br> It is a graphics engine that implements environmental mapping based on the graphic engine that was created first. Throughout the process, there were numerous revisions to the engine itself and I spent a lot of time trying to implement many things at once, and the process of building the engine wasn't smooth. Nevertheless, this project allowed for a deep understanding of graphics engines and provided the opportunity to derive enjoyment from development.");
        role.text("Solo Proejct");
        date.text("September 2021 - November 2021");
        category.text("Graphics Engine");
      }
      else if(postModalId == "portfolioModal-7")
      {
        description.text("This project is a basic Graphics engine developed using DirectX. It's a solo project created with C++, DirectX, and GLSL. <br> This graphics engine project was initiated to learn and apply DirectX. It encompasses simple and fundamental graphics engine functionalities. <br> - Keyboard and mouse Input <br> - Window creation and control <br> - Create simple shapes <br> - Model transform (rotation, translation) <br> - Implementation Math Library <br> This graphics engine project includes very basic functionalities, but it was initiated to learn a new graphics API called DirectX, which I wasn't familiar with as I usually used OpenGL. DirectX was completely new to me, and I had never studied it before, so there were many challenges from the beginning. However, through this project, I gained the joy of challenging myself with something new and the courage to face any new program or API, knowing that I can learn and improve even when encountering unfamiliar territory.");
        role.text("Solo Proejct");
        date.text("March 2020 - August 2020");
        category.text("Graphics Engine");
      }
      else if(postModalId == "portfolioModal-8")
      {
        description.text("This project is a basic graphics engine using OpenGL. It is a solol project made using C++ and OpenGL and GLSL. <br> This is a graphic engine project that I made using OpenGL for the first time. Includes simple, basic graphics engine functionality.  <br> - Keyboard and mouse Input <br> - Window creation and control <br> - Rendering 50 Objects <br> - Catmull - Rom Spline <br> - Back Face Curling <br> This graphics engine project encompasses very basic functionalities, but it's a project of great significance to me because it's the first project I've created on my own using OpenGL. Integrating the features I implemented one by one into a unified engine allowed me to enhance my skills in combining and integrating diverse pieces of code. Through this project, I was able to render what I desired using the OpenGL graphics API and create a complete engine, which brought me a sense of accomplishment and pride.");
        role.text("Solo Proejct");
        date.text("March 2020 - August 2020");
        category.text("Graphics Engine");
      }
      else if(postModalId == "portfolioModal-9")
      {
        description.text("Are You Ready is an Android AR project created using Unity. This project includes three types of simulations. <br> - A bowling simulation using GPS <br> - An AR business card using image tracking <br> - A color-changing game using Photon Networking <br> This project was built with C# and implemented using Unity engine, AR Foundation, and photon. This project is a two-person team project, and I created a feature that allows users to find the ideal plane, place objects, and change the size and location of objects. In addition, I take users's location and allow users to spawn the appropriate objects that correspond to location. Additionally, my team used Photon to synchronize the location and properties of objects and planes between users so that the game can proceed. <br> This is the first AR project that I conducted to study and utilize new technologies. It was a two-person project, but we were able to create various simulations using Image tracking and Photon beyond simple AR projects to utilize various technologies. I had a lot of problems because it was my first time learning AR, and I even do not have a lot of data, but I was able to develop my problem-solving skills by trying to solve problems with my team members.");
        role.text("Programmer (2 member)");
        date.text("September 2022 - April 2023");
        category.text("AR Project");
      }
      else if(postModalId == "portfolioModal-10")
      {
        description.text("Cloud Pang Pang is a mobile Android game created using Unity. In this game, players can control an airplane by tilting their mobile phones. They need to avoid attacks from enemy planes and survive as long as possible. Additionally, if the player gets a certain number of clouds for each color, they can get bombs, extra lives and they can trigger a fiver time <br> This project was developed using C# and implemented with the Unity engine. It was a 2-person team project, and I was responsible for creating the score system, generating and vanishing clouds, airplane movement, fever time, and game options. <br> The main goal of this project was to learn Unity, as it was my first mobile project. Despite being a relatively simple game project, it was immensely helpful in learning Unity. Since it was a project undertaken by just two people, we had to work together to address many aspects, which helped enhance our ability to utilize Unity effectively.");
        role.text("Programmer (2 member)");
        date.text("May 2022 - August 2022");
        category.text("Mobile Game Project");
      }
      else if(postModalId == "portfolioModal-11")
      {
        description.text("Super Ball is a Nintendo game project created using Unity. Players can throw bowling balls using Nintendo's Joycon, and they have to knock down pins and get score. <br> The project was built with C# and implemented with the Unity engine.  Also, it is a three-person team project and this project was carried out using the Nintendo development kit. <br> Due to the short timeframe and the learning process of Nintendo development, this project has a relatively simple game structure. However, my team has added the ability to directly recognize the joycon and throw the ball by calculating the angle at which the player is holding the joycon and the speed at which the player moved the joycon. <br> It was a meaningful time to develop Nintendo game myself. It was very difficult to get the Joycon's movement input and make it respond in real time, but I was proud to get good results. In particular, this project was very difficult because it couldn't find any resource on the Internet at all, and it had to be helped by a given example code. In addition, time was very tight due to time and space constraints, but I was able to solve problems by constantly trying and meeting with the members.");
        role.text("Programmer");
        date.text("September 2022 - December 2022");
        category.text("Portable Game Project");
      }
      else if(postModalId == "portfolioModal-12")
      {
        description.text("More detailed descriptions will be added soon.");
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
        description.text("PooPooPiPe는 2D 퍼즐 게임으로 시작 점에서 끝 지점까지 파이프를 연결하여 주인공인 Poo가 이동할 수 있도록 하는 게임입니다. 플레이어는 마우스를 사용하여 파이프 퍼즐을 드래그 하여 움직일 수 있으며 클릭하여 파이프 퍼즐의 방향을 회전 할 수 있습니다. 파이프 퍼즐을 완성하면 Poo가 도착 장소로 이동하며 다음 스테이지로 넘어갑니다. 회전 횟수 제한 움직이는 파이프 퍼즐등의 요소를 통해 플레이어에게 더큰 즐거움을 줄 수 있도록 하였습니다.<br>이 프로젝트는 C++로 제작되었으며 자체 제작한 엔진으로 구현되었습니다. 저는 팀의 프로듀서로써 프로젝트의 전체적인 과정을 총괄하고 게임 엔진을 구현하였을 뿐만 아니라 대부분의 게임 스테이지및 게임 요소들을 제작하였습니다.<br>게임 엔진을 직접 만들 때 구체적인 정보가 없어서 어려움을 겪었지만 여러가지 정보를 찾아보고 게임 디자인을 위한 책을 읽으며 엔진을 만들 수 있었습니다. 게임을 빠르게 제작해야 했기 때문에 엔진을 제작 할 시간은 더더욱 부족했기 때문에 힘든 시간이었지만 직접 엔진을 제작함으로써 엔진에 대해 많이 배울 수 있었습니다.<br>또한 프로젝트 진행 중 일을 반복적으로 제시간에 완성하지 못하는 팀원과 다른 팀원 사이의 불화가 있었지만 프로듀서로써 화합을 위한 미팅을 진행하고 또 직접 문제가 발생한 팀원에게 할당된 일을 도우면서 갈등을 해결 할 수 있었습니다.<br>처음으로 직접 엔진부터 만들어 가는 프로젝트였기 때문에 만드는 동안 많은 어려움이 있었고 시간도 촉박했지만 완성된 게임은 우리 팀만의 확실한 색깔을 담고 있으며 게임의 시작부터 끝까지 모든 부분을 직접 만들어 볼 수 있어서 좋았습니다. 뿐 만 아니라 이 프로젝트를 하나의 게임으로써 좋게 마무리 할 수 있어서 뜻 깊은 프로젝트였습니다.");
        console.log("it worksss!!! KOR");
        role.text("프로듀서");
        date.text("2019년 9월 - 2020년 6월");
        category.text("팀 게임 프로젝트");
      }
      else if(postModalId == "portfolioModal-2")
      {
        description.text("Release From Perdition 3D 1인칭 슈팅 게임으로 슈팅과 특수 능력으로 수많은 몬스터들을 물리치고 실종된 팀원을 찾으러가는 여정을 담은 게임입니다. 플레이어는 키보드로 이동하고 마우스를 이용해 무기를 바꾸고 슈팅을 할 수 있으며 위치를 바꾸고 폭팔 능력이 있는 그림자를 스폰하는 특수 능력을 사용할 수 있습니다. <br> 이 프로젝트는 언리얼 엔진4와 c++을 이용하여 제작되었습니다. 저는 팀의 게임플레이 프로그래머로써 플레이어의 움직임과 몬스터너 스포너를 담당하여 몬스터의 스폰과 체력 그리고 스포너 이펙트를 구현하였습니다. 뿐만 아니라 몬스터를 제작하는 팀원과 함께 몬스터의 AI가 좀 더 똑똑하게 작동될 수 있도록 도왔습니다. <br> 언리얼 엔진을 처음 사용해보았기 때문에 언리얼 엔진에 대한 이해도가 낮아 많은 어려움이 있었지만 많은 자료를 찾아보며 언리얼 엔진에 빠르게 익숙해 지기 위해 노력했습니다. 뿐만 아니라 필요한 자료들이 많이 있지 않아서 자료를 직접 찾아보기 보다는 최대한 스스로 해결하기 위해 노력했습니다.  특히 각 몬스터들을 다른 사람들이 만들었기 때문에 이것들을 한번에 관리해야하는 스포너를 담당하는 저로써는 많은 어려움이 있었습니다. 따라서 스포너에서 자체적으로 필드에 살아있는 몬스터 수를 파악할 수 있도록 하였고 게임 디자이너들이 맵을 구성 할 때 쉽게 필요한 만큼 몬스터의 타입과 수 그리고 부활 횟수를 설정 할 수 있도록 하였습니다. <br> 인종, 나이, 전공이 모두 다른 팀원들과 함께 하면서 다양한 사람들과 함께 협업하며 게임을 만드는 과정을 배울 수 있었습니다. 팀원들과 매주 미팅을하며 서로 어려움이 있으면 바로 공유하며 문제를 해결해 나갔고 함께 아이디어를 공유하며 항상 게임을 어떻게 해야 더 좋은 방향으로 발전 시킬 수 있을지 고민하며 많은 것들을 배울 수 있었던 프로젝트였습니다. ");
        role.text("게임플레이 프로그래머");
        date.text("2021년 9월 - 2022년 4월");
        category.text("팀 게임 프로젝트");
      }
      else if(postModalId == "portfolioModal-3")
      {
        description.text("Pang Pang Dust 2D 플랫포머 슈팅 게임으로 미세먼지를 청소기로 흡수하고 초미세먼지를 공격해 정화하며 골인지점으로 달리는 게임입니다. 플레이어는 키보드로 이동하고 마우스를 이용해 슈팅 할 수 있으며 여러가지 아이템을 이용해 게임을 즐길 수 있습니다. <br> 이 프로젝트는 c++로 제작되었으며 상용 엔진이 아니라 교수님이 직접 제작한 엔진으로 구현되어졌습니다. 저는 팀의 프로듀서로써 멤버들을 총괄하고 게임의 체력과 미세먼지의 생성과 캐릭터의 움직임을 담당하였습니다. 뿐만 아니라 게임의 스코어 시스템과 맵 디자인을 담당했고 슈팅의 게이지를 제작하였습니다. <br> 직접적으로 게임을 처음 제작해본 프로젝트였기 때문에 부족한 점도 많았고 어려운 점도 많았지만 팀원들과 함께 화합하며 본격적으로 게임을 제작 할 때 어떤 능력들이 필요하고 것이 어떤 것인지에 대해 배워 갈 수 있었습니다. 부족한 점도 많았던 프로젝트였지만 게임 프로젝트에 대한 기초를 다질 수 있었던 프로젝트였습니다.");
        role.text("프로듀서");
        date.text("2019년 3월 - 2019년 6월");
        category.text("팀 게임 프로젝트");
      }
      else if(postModalId == "portfolioModal-4")
      {
        description.text("이 프로젝트는 아주 기본적인 게임 엔진의 구조를 구현한 프로젝트입니다. 엔진말고도 두개의 간단한 2D 게임이 포함되어져 있으며 한가지는 장애물을 피해 도착지점까지 달리는 플랫포머 게임이고 다른 한가지는 우주선을 이동하며 장애물을 파괴하는 슈팅게임입니다. <br> 이 프로젝트는 c++로 제작되어졌으며 게임 엔진을 만들기 위한 기본적인 이해를 돕고 만들어진 엔진을 통해 간단한 게임을 구현하는 프로젝트입니다. 1인 프로젝트였기 때문에 모든 부분은 직접 제작하였지만 간단한 게임을 구현 할 때 사용 된 그래픽 엔진은 교수님께 제공받았습니다. <br> 디버그를 출력하는 기능 부터, 엔진 루프, fps, 컴포넌트, 스테이지간의 연결등 기본적으로 게임 엔진에 포함되어지는 기능들을 직접구현하였습니다. 이렇게 만들어진 엔진을 이용하여 만든 간단한 게임에서는 캐릭터의 움직임과 간단한 AABB 그리고 슈팅 기능과 Parallax scrolling background과 Wrapping등 게임에서 자주 사용되는 기본적인 테크닉을 구현하였습니다. <br> 게임 엔진의 구조와 기본적인 기능을 본격적으로 배울 수 있었던 프로젝트 입니다. 게임 엔진에 대한 기본 지식 없이 프로젝트를 진행하다가 많이 힘들었던 경험이 있었기 때문에 그 프로젝트를 진행하기 전에 이 프로젝트를 진행했다면 좋았을 것같다는 생각이 들었습니다. 다시 게임 엔진에 대한 기초를 다질 수 있는 프로젝트였습니다.");
        role.text("1인 프로젝트");
        date.text("2020년 3월 - 2020년 9월");
        category.text("아카데믹 게임 프로젝트");
      }
      else if(postModalId == "portfolioModal-5")
      {
        description.text("이 프로젝트는 Lighting을 포함하는 그래픽 엔진 입니다. C++과 OpenGL, Im Gui 그리고 GLSL을 활용하여 제작한 1인 프로젝트 입니다. <br> 이 그래픽 엔진을 위해 오브젝트를 로딩하고 텍스처를 매핑하는 기본적인 기능을 하는 그래픽 엔진을 만들었으며 Phong Lighting, Phong Shading, Blinn shading이 가능한 Shader를 만들었습니다 <br> 뿐만 아니라 저는 최대 16개까지 늘어나는 조명을 추가하였고 사용자가 이 조명들의 개별 값을 설정할 수 있도록 하였는데 설정 가능 한 값으로는 아래 항목이 있습니다. <br> - Point Light, Directional Light, Spot Light 중에서 타입 고르기 <br> - Inner and outer angle for spot light <br> - Spot falloff <br>  또 한 설정 가능한 글로벌 값으로는 아래 항목이 있습니다 <br> - Ambient, diffuse and specular color <br> - attenuation coefficients <br> - atmospherc(fog) color <br> - Global ambient color <br> 또 한 텍스처를 매핑할 떄 material coefficients의 색상을 변경할 수 있으며 CPU에서의 계산과 GPU에서의 계산을 따로 설정 할 수 있도록 하였습니다. <br> 혼자서 만들어야 하는 그래픽 엔진이었기 때문에 많은 어려움이 있었지만 한단계 한단계 차근차근 문제를 해결해 나갔습니다.");
        role.text("1인 프로젝트");
        date.text("2021년 9월 - 2021년 11월");
        category.text("그래픽 프로젝트");
      }
      else if(postModalId == "portfolioModal-6")
      {
        description.text("이 프로젝트는 Reflection과 Refraction을 포함하는 Environment Mapping을 구현한 그래픽 엔진 입니다. C++과 OpenGL, Im Gui 그리고 GLSL을 활용하여 제작한 1인 프로젝트 입니다. <br> 이 그래픽 엔진을 위해 오브젝트를 로딩하고 텍스처를 매핑하는 기본적인 기능을 하는 그래픽 엔진 기능을 포함하며  cube mapping을 이용한 sky box, FBO를 이용한 scene 렌더링, Environment Mapping이 가능한 Shader를 만들었습니다 <br> Environment Mapping은 아래의 항목을 포함합니다 <br> - Only reflection <br> - Only refraction <br> - Combination of both <br> 또한 Phong shading과 Environment mapping이 동시에 작동되도록 하였습니다. <br> Users can directly set the object's refractive index and select materials to observe different refractive indices firsthand <br> 사용자는 오브젝트의 굴절률을 직접 세팅 할 수 있으며 material을 선택해 각기 다른 굴절률을 직접 확인 할 수 있습니다. <br> 먼저 만들어진 그래픽 엔진을 기반으로 Environment mapping을 구현한 그래픽 엔진입니다. 중간중간 엔진 자체를 뒤엎으면서 많은 수정을하기도 했고 한꺼번에 많은 걸 구현하기 위해 많은 시간을 쏟는 등 엔진을 만드는 과정이 순탄치 않았지만 본격적으로 그래픽 엔진에 대한 이해를 높이고 개발에 즐거움을 배울 수 있는 프로젝트였습니다.");
        role.text("1인 프로젝트");
        date.text("2021년 9월 - 2020년 11월");
        category.text("그래픽 프로젝트");
      }
      else if(postModalId == "portfolioModal-7")
      {
        description.text("이 프로젝트는 DiretX를 이용한 기본적인 그래픽 엔진입니다. C++과 DirectX 그리고 GLSL을 활용하여 제작한 1인 프로젝트 입니다. <br> 이 그래픽 엔진은 DiretX를 공부하고 활용하는 방법을 배우기 위해 시작된 프로젝트입니다. 간단하고 기초적인 그래픽 엔진의 기능을 포함하고 있습니다. <br> - 키보드 및 마우스 인풋 <br> - 윈도우 창 생성 및 제어 <br> - 간단한 도형을 생성 <br> - 모델 변환 (회전, 이동) <br> - Math Library 구현 <br> 이 그래픽 엔진은 매우 기초적인 기능을 포함하고 있지만 평소 자주 사용하던 OpenGL이 아니라 DirectX라는 새로운 그래픽 API를 배우기 위한 프로젝트였습니다. DirectX는 아예 처음이었고 그 동안 공부해 본 적이 없었기 때문에 시작 부터 많은 난관이있었지만 이를 통해 새로운 것에 도전하는 즐거움과 어떤 새로운 프로그램이나 API를 마주하더라도 배우고 발전 시킬 수 있을 것 같다는 용기를 얻을 수 있었습니다. ");
        role.text("1인 프로젝트");
        date.text("2020년 3월 - 2020년 8월");
        category.text("그래픽 프로젝트");
      }
      else if(postModalId == "portfolioModal-8")
      {
        description.text("이 프로젝트는 OpenGL을 이용한 기본적인 그래픽 엔진입니다. C++과 OpenGL을 그리고 GLSL을 활용하여 제작한 1인 프로젝트 입니다. <br> 이 그래픽 엔진은 OpenGL을 처음 활용하여 만들게 된 그래픽 엔진 프로젝트 입니다. 간단하고 기초적인 그래픽 엔진의 기능을 포함하고 있습니다. <br> - 키보드 및 마우스 인풋 <br> - 윈도우 창 생성 및 제어 <br> - 50가지의 Object를 렌더링 <br> - Catmull - Rom Spline <br> - Back Face Curling <br> 이 그래픽 엔진은 매우 기초적인 기능을 포함하고 있지만 OpenGL을 이용하여 스스로 처음 만들어본 프로젝트라는 점에서 매우 뜻깊은 프로젝트 입니다. 한가지 한가지씩 구현해보았던 기능들을 통합하고 하나의 엔진으로 만들며 다양한 코드들을 조합하고 통합할 수 있는 능력도 기를 수 있었습니다. OpenGL이라는 그래픽 API를 이용해 실제로 제가 원하는 것들을 렌더링 하고 하나의 엔진을 만듬으로써 많은 뿌듯함을 느낄 수 있었습니다.");
        role.text("1인 프로젝트");
        date.text("2020sus 3dnjf - 2020sus 8월");
        category.text("그래픽 프로젝트");
      }
      else if(postModalId == "portfolioModal-9")
      {
        description.text("Are You Ready는 Unity를 이용해 만든 안드로이드 AR 프로젝트입니다. 이 프로젝트는 3가지 종류의 시뮬레이션을 포함합니다. <br> - GPS를 사용한 볼링 시뮬레이션 <br> - 이미지 트래킹을 사용한 AR 명함 <br> - Photon Networking을 이용한 색깔 바꾸기 게임 <br> 이 프로젝트는 C#으로 제작되었으며 Unity 엔진과 AR Foundation 그리고 photon을 사용하여 구현하였습니다. 2인 팀프로젝트로 저는 사용자가 적절한 평면을 찾고 오브젝트를 배치하며 오브젝트의 크기와 위치를 변경할 수 있도록하였습니다. 또한 사용자의 위치를 받아와 위치에 맞는 적절한 오브젝트를 스폰 할 수 있도록 하였습니다. 뿐만 아니라 Photon을 이용하여 사용자간 오브젝트와 평면의 위치와 속성을 동기화 시켜 게임이 진행 되도록 하였습니다. <br> 처음으로 진행한 AR 프로젝트로 새로운 기술을 공부하고 또 활용하기 위해 진행한 프로젝트 입니다. 2명이서 진행한 프로젝트지만 다양한 기술들을 활용 할 수 있도록 단순한 AR 프로젝트를 넘어 Image tracking과 Photon등을 사용하여 여러가지 시뮬레이션을 제작 할 수 있었습니다. 처음 배우는 AR이라서 많은 문제가 있었고 심지어 자료 조차 많이 없어서 힘들었지만 팀원과 함께 문제를 해결해 나가려 노력하며 문제 해결 능력을 키울 수 있었습니다.");
        role.text("2인 프로젝트");
        date.text("2022년 9월 - 2023년 4월");
        category.text("AR 프로젝트");
      }
      else if(postModalId == "portfolioModal-10")
      {
        description.text("Cloud Pang Pang은 Unity를 이용해 만든 모바일 안드로이드 게임입니다. 플레이어는 휴대폰을 기울여 비행기를 움직일 수 있으며 플레이어는 적 비행기의 공격을 피하고 오랫 동안 살아 남아야 합니다. 또한 플레이어가 색깔별로 구름을 특정 갯수 만큼 얻게 되면 폭탄, 추가 생명등을 얻을 수 있으며 피버 타임을 발동 시킬 수도 있습니다. <br> 이 프로젝트는 C#으로 제작되었으며 Unity 엔진으로 구현되었습니다. 2인 팀프로젝트로 저는 스코어 시스템과 구름의 생성과 소멸, 비행기의 움직임, 피버 타임, 게임 옵션등을 만들었습니다. <br> 처음으로 진행한 모바일 프로젝트로 Unity를 공부하는 것을 주된 목적으로 하였습니다. 비교적 간단한 게임 프로젝트이지만 Unity를 배우는데 많은 도움이 되었습니다. 2명이서 진행한 프로젝트였기 때문에 많은 부분들을 단 둘이서 함께 해결해 나가야 했고 그 과정에서 Unity를 활용하는 능력을 키울 수 있었습니다.");
        role.text("2인 프로젝트");
        date.text("2022년 5월 - 2022년 8월");
        category.text("모바일 게임 프로젝트");
      }
      else if(postModalId == "portfolioModal-11")
      {
        description.text("이 프로젝트는 Unity를 이용해 만든 닌텐도 게임 프로젝트입니다. 플레이어는 닌텐도의 조이콘을 이용해 불링공을 던질 수 있으며 볼링공을 던져 핀을 쓰러뜨리고 점수를 많이 획득해야 합니다. <br> 이 프로젝트는 C#으로 제작되었으며 Unity 엔진으로 구현되었습니다.  3인 팀 프로젝트로 이 프로젝트는 독특하게 닌텐도 development kit를 사용하여 진행된 프로젝트입니다. <br> 짧은 시간 안에 프로젝트를 진행해야 했으며 닌텐도 개발을 배우고 있는 와중에 만들어진 프로젝트이기 때문에 비교적 간단한 게임 양식을 가집니다. 하지만 직접 조이콘을 인식하고 플레이어가 조이콘을 들고 있는 각도와 플레이어가 조이콘을 움직인 속도를 계산하여 공을 던질 수 있도록 하였습니다. <br> 닌텐도 개발을 직접 해볼 수 있는 뜻깊은 시간이었습니다. 조이콘의 움직임의 입력을 받아 실시간으로 반응하도록 만드는 것은 매우 어려웠지만 좋은 결과물을 얻을 수 있어서 뿌듯했습니다. 특히나 이 프로젝트는 인터넷에서 자료를 아예 찾을 수 없고 오로지 주어진 예제 코드 정도의 도움을 받아야 했으며 시간이 매우 촉박했었기 때문에 많은 어려움을 겪었지만 끊임없이 시도하고 또 코딩하면서 문제들을 해결해 나갈 수 있었습니다.");
        role.text("프로그래머 (3인 프로젝트)");
        date.text("2022년 9월 - 2022년 12월");
        category.text("휴대용 게임 프로젝트");
      }
      else if(postModalId == "portfolioModal-12")
      {
        description.text("더 자세한 설명이 추가 될 예정입니다.");
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
        workDescription.text("I worked as a piano assistant instructor at a music academy, instructing numerous students ranging from kindergarten to middle school. <br> Additionally, I assisted with various administrative tasks at the academy.");
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