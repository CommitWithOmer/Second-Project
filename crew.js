const crewData = [
  {
    role: "COMMANDER",
    name: "DOUGLAS HURLEY",
    img: "crew/image-douglas-hurley.png",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    role: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    img: "crew/image-mark-shuttleworth.png",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    role: "PILOT",
    name: "VICTOR GLOVER",
    img: "crew/image-victor-glover.png",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    role: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    img: "crew/image-anousheh-ansari.png",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
];

const dots = document.querySelectorAll(".dots span");

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    
    dots.forEach(d => d.classList.remove("active"));
    dot.classList.add("active");

    const index = dot.dataset.crew;

    document.getElementById("role").textContent = crewData[index].role;
    document.getElementById("name").textContent = crewData[index].name;
    document.getElementById("bio").textContent = crewData[index].bio;
    document.getElementById("crew-img").src = crewData[index].img;
  });
});