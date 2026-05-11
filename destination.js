const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const mobileNav = document.getElementById("mobileNav");

menuOpen.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

menuClose.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

const destinations = {
  moon: {
    name: "MOON",
    img: "destination/image-moon.png",
    mobileImg: "destination/image-moon.webp",
    desc: "See our planet as You’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refereshed. While You’re there"+
       ",take in some history by visiting the Luna 2 and Apollo 11 Landing sites.",
    distance: "384,400 KM",
    time: "3 DAYS"
  },

  mars: {
    name: "MARS",
    img: "destination/image-mars.png",
    mobileImg: "destination/image-mars.webp",
    desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    time: "9 MONTHS"
  },

  europa: {
    name: "EUROPA",
    img: "destination/image-europa.png",
    mobileImg: "destination/image-europa.webp",
    desc: "Europa, one of Jupiter’s largest moons, is covered in a thick layer of ice beneath which lies a vast ocean. Its smooth, bright surface is crisscrossed with dark streaks formed by cracks in the ice.",
    distance: "628 MIL. KM",
    time: "3 YEARS"
  },

  titan: {
    name: "TITAN",
    img: "destination/image-titan.png",
    mobileImg: "destination/image-titan.webp",
    desc: "The only moon Known to have a dense atmosphere other than Earth,Titan is a home away from home (justa a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    time: "7 YEARS"
  }
};


const tabs = document.querySelectorAll(".tabs span");
const planetImg = document.getElementById("planet-img");
const planetName = document.getElementById("planet-name");
const planetDesc = document.getElementById("planet-desc");
const planetDistance = document.getElementById("planet-distance");
const planetTime = document.getElementById("planet-time");
const planetSource = document.getElementById("planet-source");


tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const planet = tab.dataset.planet;

    const data = destinations[planet];

    const isMobile = window.innerWidth <= 768;

    planetImg.src = isMobile
      ? data.mobileImg
      : data.img;

    planetName.textContent = data.name;
    planetDesc.textContent = data.desc;
    planetDistance.textContent = data.distance;
    planetTime.textContent = data.time;
    planetSource.srcset = data.mobileImg;
    planetImg.src = data.img;

  });

});