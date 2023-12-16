
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function activetab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-links")
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
  
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}

var worklist = document.querySelector(".work-list");
var seebtn = document.querySelector("#seemorework");


// initial data 
var dataworkvisible = [
  {
    img : "images/works/SOLAR SYSTEM.png",
    heading : "Solar System",
    disc : "Only HTML and CSS used",
    link : "https://code007nikhil.github.io/Solar-system/"
  },
  {
    img : "images/works/tiltcards.png",
    heading : "Tilt Cards",
    disc : "HTML | CSS | JS ",
    link : "https://code007nikhil.github.io/tilt-cards/"
  },
  {
    img : "images/works/jokes.png",
    heading : "Random Jokes",
    disc : "HTML | CSS | JS",
    link : "https://code007nikhil.github.io/random-joke/"
  }
]


function initialworks(){
  var workinitial = ``
dataworkvisible.forEach((data)=>{
  workinitial += `<div class="work">
 <img src="${data.img}" alt="">
 <div class="layer">
     <h3>${data.heading}</h3>  
     <p>${data.disc}</p>
     <a href="${data.link}"><i class="fa-solid fa-up-right-from-square"></i></a>
 </div>
</div>`
worklist.innerHTML = workinitial
})
}
initialworks();





// all data here 
var extradatawork = [
  {
    img : "images/works/SOLAR SYSTEM.png",
    heading : "Solar System",
    disc : "Only HTML and CSS used",
    link : "https://code007nikhil.github.io/Solar-system/"
  },
  {
    img : "images/works/colourfind.png",
    heading : "Find colors game",
    disc : "HTML | CSS | JS ",
    link : "https://code007nikhil.github.io/colour-find/"
  },
  {
    img : "images/works/tiltcards.png",
    heading : "Tilt Cards",
    disc : "HTML | CSS | JS ",
    link : "https://code007nikhil.github.io/tilt-cards/"
  },
  {
    img : "images/works/jokes.png",
    heading : "Random Jokes",
    disc : "HTML | CSS | JS",
    link : "https://code007nikhil.github.io/random-joke/"
  },
  {
    img : "images/works/weatherapp.png",
    heading : "Weather App",
    disc : "HTML | CSS | JS",
    link : "https://code007nikhil.github.io/weather-app/"
  },
  {
    img : "images/works/calculator.png",
    heading : "calculator",
    disc : "HTML | CSS | JS",
    link : "https://code007nikhil.github.io/calculator/"
  }
  ,
  {
    img : "images/works/changebackground.png",
    heading : "Random background colour",
    disc : "HTML | CSS | JS",
    link : "https://code007nikhil.github.io/random-background-changer/"
  }
  ,
  {
    img : "images/works/counter.png",
    heading : "Counter",
    disc : "HTML | CSS | JS",
    link : "https://code007nikhil.github.io/counter/"
  },
  {
    img : "images/works/Datetime.png",
    heading : "Date and Time",
    disc : "HTML | CSS | JS",
    link : "https://code007nikhil.github.io/date-and-time/"
  },  
  {
    img : "images/works/imageslider.png",
    heading : "Image Slider",
    disc : "HTML | CSS | JS",
    link : "https://code007nikhil.github.io/image-slider/"
  },
  {
    img : "images/works/loader.png",
    heading : "Loader",
    disc : "HTML | CSS | JS",
    link : "https://code007nikhil.github.io/loader/welcome.html"
  },
  {
    img : "images/works/mindread.png",
    heading : "Mind Read Fun Game",
    disc : "HTML | CSS | JS",
    link : "https://code007nikhil.github.io/mind-read/"
  },
  {
    img : "images/works/responsiveNav.png",
    heading : "Responsive Navbar",
    disc : "HTML | CSS | JS",
    link : "https://code007nikhil.github.io/responsive-Nav/"
  },
  {
    img : "images/works/reviewslider.png",
    heading : "Riview Slider",
    disc : "HTML | CSS | JS",
    link : "https://code007nikhil.github.io/Riview-slider/"
  },
  {
    img : "images/works/Stopwatch.png",
    heading : "Stopwatch",
    disc : "HTML | CSS | JS",
    link : "https://code007nikhil.github.io/stop-watch/"
  },
  {
    img : "images/works/todolist.png",
    heading : "To Do list",
    disc : "HTML | CSS | JS",
    link : "https://code007nikhil.github.io/to-do-list/"
  }
] 







var flag = 1;
seebtn.addEventListener("click",()=>{
 if (flag == 1) {
  var work = ``
  extradatawork.forEach((data)=>{
    work += `<div class="work">
 <img src="${data.img}" alt="">
 <div class="layer">
     <h3>${data.heading}</h3>  
     <p>${data.disc}</p>
     <a href="${data.link}"><i class="fa-solid fa-up-right-from-square"></i></a>
 </div>
</div>`
  })
  worklist.innerHTML = work
  seebtn.textContent = "see less";
  flag = 0;
 }
 else{
  initialworks();
  seebtn.textContent = "see more"
  flag = 1
 }
}
)