const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const mobileNav = document.getElementById("mobileNav");

menuOpen.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

menuClose.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});


const crewData = [
  {
    role: "COMMANDER",
    name: "DOUGLAS HURLEY",
    bio:  "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    desktopImg: "crew/image-douglas-hurley.png",
    mobileImg:"crew/image-douglas-hurley.webp"
  },

  {
    role: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    bio:  "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    desktopImg: "crew/image-mark-shuttleworth.png",
    mobileImg:"crew/image-mark-shuttleworth.webp"
  },

  {
    role: "PILOT",
    name: "VICTOR GLOVER",
    bio:  "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    desktopImg: "crew/image-victor-glover.png",
    mobileImg:"crew/image-victor-glover.webp"
  },

  {
    role: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    bio:  "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    desktopImg: "crew/image-anousheh-ansari.png",
    mobileImg:"crew/image-anousheh-ansari.webp"
  }
];

const role = document.getElementById("role");
const name = document.getElementById("name");
const bio = document.getElementById("bio");

const desktopImg = document.getElementById("crew-img");
const mobileImg = document.getElementById("crew-img-mobile");

const dots = document.querySelectorAll(
  ".dots span, .mobile-dots span"
);

dots.forEach((dot) => {

  dot.addEventListener("click", () => {

    const index = dot.dataset.crew;

    role.textContent = crewData[index].role;
    name.textContent = crewData[index].name;
    bio.textContent = crewData[index].bio;

    desktopImg.src = crewData[index].desktopImg;
    mobileImg.src = crewData[index].mobileImg;

    dots.forEach(d => d.classList.remove("active"));

    document
      .querySelectorAll(`[data-crew="${index}"]`)
      .forEach(d => d.classList.add("active"));

  });

});