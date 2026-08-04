const discs = [
    "Astronaut",
    "Atom",
    "Crave",
    "DD2",
    "Detour",
    "Emperor",
    "Hades",
    "Harp",
    "Judge",
    "Magician",
    "Nuke",
    "Roadrunner",
    "Roc3",
    "Rockstar",
    "Scorch",
    "Shryke",
    "Sidewinder",
    "Truth",
    "Vanilla"
];


const container = document.getElementById("disc-container");


discs.forEach(function(disc) {

    let card = document.createElement("div");
    card.className = "disc-card";

    card.innerHTML = `
        <img 
            src="images/${disc}_Forehand.jpeg"
            data-forehand="images/${disc}_Forehand.jpeg"
            data-backhand="images/${disc}_Backhand.jpeg"
            onclick="toggleFlight(this)"
        >

        <h2>${disc}</h2>
    `;

    container.appendChild(card);

});


function toggleFlight(image) {

    let forehand = image.getAttribute("data-forehand");
    let backhand = image.getAttribute("data-backhand");

    if (image.src.includes("Forehand")) {
        image.src = backhand;
    } 
    else {
        image.src = forehand;
    }

}
