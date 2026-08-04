const discs = [
    "Astronaut 12/6/-4/1",
    "Atom 3/3/-0.5/0",
    "Crave 6.5/5/-1/1",
    "DD2 13/5/-2/2",
    "Detour 5/5/-2/1",
    "Emperor 12/5/-1/2.5",
    "Hades 12/6/-3/2",
    "Harp 4/3/0/3",
    "Judge 2/4/0/1",
    "Magician 6/4/0/2",
    "Nuke 13/5/-3/3",
    "Roadrunner 9/5/-4/1",
    "Roc3 5/4/0/3",
    "Rockstar 9/4/-1/2",
    "Scorch 11/6/-2/2",
    "Shryke 13/6/-2/2",
    "Sidewinder 9/5/-3/1",
    "Truth 5/5/-1/1",
    "Vanilla 11/6/-2/1"
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
