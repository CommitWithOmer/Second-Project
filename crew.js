const crewData = [
  {
    role: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    img: "crew/image-anousheh-ansari.png",
    bio: "Anousheh Ansari is an Iranian American engineer..."
  },
  {
    role: "COMMANDER",
    name: "DOUGLAS HURLEY",
    img: "crew/image-douglas-hurley.png",
    bio: "Douglas Gerald Hurley is an American engineer..."
  },
  {
    role: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    img: "crew/image-mark-shuttleworth.png",
    bio: "Mark Shuttleworth is the founder of Canonical..."
  },
  {
    role: "PILOT",
    name: "VICTOR GLOVER",
    img: "crew/image-victor-glover.png",
    bio: "Pilot on the first operational flight..."
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