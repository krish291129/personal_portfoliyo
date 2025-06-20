// const text = "I build beautiful, fast and responsive";
// const text2 = "websites using HTML, CSS & JavaScript.";

// // websites using HTML, CSS & JavaScript."

// const ty = document.getElementById("type");
// let index = 0;

// function typeWriter() {
//   if(index < text.length){
//     ty.innerHTML += text.charAt(index);
//     index++;
//     setTimeout(typeWriter, 50);
//   }
// }
// const ty2 = document.getElementById("type2");
// let index2 = 0;

// function typeWriter2() {
//   if(index2 < text2.length){
//     ty2.innerHTML += text2.charAt(index2);
//     index2++;
//     setTimeout(typeWriter2, 50);
//   }
// }

// window.onload = function() {
//   typeWriter();
//   setTimeout(typeWriter2, text.length * 50 + 500); // wait for first line
// };



function resume(){
   const text = document.getElementById("resumeText");
    const loader = document.getElementById("loader");

    text.style.display = "none";
    loader.style.display = "inline-block";

    setTimeout(() => {
        loader.style.display = "none";
        text.style.display = "inline-block";
    }, 10000);
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});


function pro1(){
    document.getElementById("project_content").style.display = "none";
    document.getElementById("project1-video").style.display = "block";
}

function hidePro1(){
  document.getElementById("project1-video").style.display = "none";
  document.getElementById("project_content").style.display = "block";
}
function pro2(){
    document.getElementById("project_content2").style.display = "none";
    document.getElementById("project2-video").style.display = "block";
}

function hidePro2(){
  document.getElementById("project2-video").style.display = "none";
  document.getElementById("project_content2").style.display = "block";
}
function pro21(){
    document.getElementById("project_content21").style.display = "none";
    document.getElementById("project-video21").style.display = "block";
}

function hidePro21(){
  document.getElementById("project-video21").style.display = "none";
  document.getElementById("project_content21").style.display = "block";
}
