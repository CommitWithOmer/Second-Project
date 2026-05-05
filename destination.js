const tabs = document.querySelectorAll(".tabs span");

const data = {
  moon: {
    name: "MOON",
    img: "destination/image-moon.png",
    desc: "See our planet as You’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refereshed. While You’re there"+
          ",take in some history by visiting the Luna 2 and Apollo 11 Landing sites.",
    distance: "384,400 KM",
    time: "3 DAYS"
  },
  mars: {
    name: "MARS",
    img: "destination/image-mars.png",
    desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
  },
  europa: {
    name: "EUROPA",
    img: "destination/image-europa.png",
    desc: "Europa, one of Jupiter’s largest moons, is covered in a thick layer of ice beneath which lies a vast ocean. Its smooth, bright surface is crisscrossed with dark streaks formed by cracks in the ice. Scientists believe this hidden ocean could potentially support life"
  },
  titan: {
    name: "TITAN",
    img: "destination/image-titan.png",
    desc: "The only moon Known to have a dense atmosphere other than Earth,Titan is a home away from home (justa a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
  }
};

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    console.log("clicked"); // 🔥 debug

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const planet = tab.dataset.planet;

    document.getElementById("planet-img").src = data[planet].img;
    document.getElementById("planet-name").textContent = data[planet].name;
    document.getElementById("planet-desc").textContent = data[planet].desc;
  });
});