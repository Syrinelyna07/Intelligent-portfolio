const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')
const chatbotBtn = document.getElementById("chatbot-btn");
const chatbotTip = document.getElementById("chatbot-tip");


// Faire apparaître la bulle après 1s
setTimeout(() => {
    chatbotTip.style.opacity = "1";
}, 1000);

// Cacher la bulle après clic sur le bouton
document.getElementById("chatbot-btn").addEventListener("click", () => {
    chatbotTip.style.display = "none";
});

chatbotBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#chatbot").scrollIntoView({ behavior: "smooth" });
});


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})
const videos = document.querySelectorAll(".project-vidbox video");
videos.forEach(video => {
  video.playbackRate = 6; 
});