// JavaScript Document

// Variabelen

// Eevee vangen / basis
var catchEevee = document.querySelector('.catchEevee');
var pokeballAnimatie = document.querySelector('.pokeball');
var eevee1 = document.querySelector('.eevee1');
var eevee2 = document.querySelector('.eevee2');
var tekst = document.querySelector('.bericht');
var schermEen = document.querySelector('.scherm1');
var schermTwee = document.querySelector('.scherm2');
// Menu
var menuButtons = document.querySelector('.menuButtons');
var trainEevee = document.querySelector('.buttonLinksOnder');
var useStone = document.querySelector('.buttonRechtsOnder');
// Evolutie met trainen
var placesToTrain = document.querySelector('.placesToTrain');
var snowLocation = document.querySelector('.snow');
var mossLocation = document.querySelector('.moss');
var dayLocation = document.querySelector('.day');
var nightLocation = document.querySelector('.night');
var fairyLocation = document.querySelector('.fairy');
var espeon = document.querySelector('.espeon');
var umbreon = document.querySelector('.umbreon');
var sylveon = document.querySelector('.sylveon');
var glaceon = document.querySelector('.glaceon');
var leafeon = document.querySelector('.leafeon');
var espeonEvolve = document.querySelector('.espeonEvolving');
var umbreonEvolve = document.querySelector('.umbreonEvolving');
var sylveonEvolve = document.querySelector('.sylveonEvolving');
var glaceonEvolve = document.querySelector('.glaceonEvolving');
var leafeonEvolve = document.querySelector('.leafeonEvolving');
// Evolutie met stenen
var evolutionStones = document.querySelector('.evolutionStones');
var useFireStone = document.querySelector('.fireStoneImg');
var useThunderStone = document.querySelector('.thunderStoneImg');
var useWaterStone = document.querySelector('.waterStoneImg');
var fireStone = document.querySelector('.fireStone');
var thunderStone = document.querySelector('.thunderStone');
var waterStone = document.querySelector('.waterStone');
var flareon = document.querySelector('.flareon');
var jolteon = document.querySelector('.jolteon');
var vaporeon = document.querySelector('.vaporeon');
var eeveeEvolve = document.querySelector('.eeveeEvolving'); 
var flareonEvolve = document.querySelector('.flareonEvolving');
var jolteonEvolve = document.querySelector('.jolteonEvolving');
var vaporeonEvolve = document.querySelector('.vaporeonEvolving');
// Restart
var restart = document.querySelector('.restart');





// Added events





// Menu
catchEevee.addEventListener("click", animatieStart);
trainEevee.addEventListener("click", openTrainingScreen);
// Stones
useStone.addEventListener("click", showStones);
useFireStone.addEventListener("click", evolveToFlareon);
useThunderStone.addEventListener("click", evolveToJolteon);
useWaterStone.addEventListener("click", evolveToVaporeon);
// Locations
fairyLocation.addEventListener("click", locatedToFairy);
nightLocation.addEventListener("click", locatedToNight);
dayLocation.addEventListener("click", locatedToDay);
mossLocation.addEventListener("click", locatedToMoss);
snowLocation.addEventListener("click", locatedToSnow);
// Restart
restart.addEventListener("click", restartEvolution);





// Eevee vang animatie





function animatieStart() {
    pokeballAnimatie.classList.add("animatieStart");
    eevee1.classList.add("animatieStart")
    console.log("capture");
};

pokeballAnimatie.onanimationend = () => {
    schermEen.style.display = "none";
    schermTwee.style.display = "block"; 
    catchEevee.style.display = "none";
    menuButtons.style.display = "block";
    tekst.style.display = "block";
    console.log("animation has ended");
};





// Menu keuzes





function openTrainingScreen() {
    menuButtons.style.display = "none";
    placesToTrain.style.display = "block";
    tekst.innerHTML = "Decided where you want to train with Eevee!";
    console.log("training");
};

function showStones() {
    menuButtons.style.display = "none";
    tekst.innerHTML = "Use a Thunder, Fire or Water -stone to evolve Eevee!";
    evolutionStones.style.display = "block";
    console.log("stones");
};





// Evolutions met stenen





// Flareon


function evolveToFlareon () {
    useFireStone.classList.add("fireStoneActive");
    thunderStone.style.display = "none";
    waterStone.style.display = "none";
    schermTwee.style.backgroundImage = "url('../images/fire.png')";
    console.log("flareon");
}

useFireStone.onanimationend = () => {
    eeveeEvolve.classList.add("evolveEevee");
    flareonEvolve.classList.add("toFlareon");
    evolutionStones.style.display = "none";
    tekst.innerHTML = "Eevee is evolving into Flareon!";
    eevee2.style.display = "none";
    console.log("evolve_to_flareon");
}

flareonEvolve.onanimationend = () => {
    flareon.style.display = "block";
    restart.style.display = "block";
    console.log("flareon_evolved");
}


// Jolteon


function evolveToJolteon () {
    useThunderStone.classList.add("thunderStoneActive");
    fireStone.style.display = "none";
    waterStone.style.display = "none";
    schermTwee.style.backgroundImage = "url('../images/thunder.png')";
    console.log("jolteon");
}

useThunderStone.onanimationend = () => {
    eeveeEvolve.classList.add("evolveEevee");
    jolteonEvolve.classList.add("toJolteon");
    evolutionStones.style.display = "none";
    tekst.innerHTML = "Eevee is evolving into Jolteon!";
    eevee2.style.display = "none";
    console.log("evolve_to_jolteon");
}

jolteonEvolve.onanimationend = () => {
    jolteon.style.display = "block";
    restart.style.display = "block";
    console.log("jolteon_evolved");
}


// Vaporeon


function evolveToVaporeon () {
    useWaterStone.classList.add("waterStoneActive");
    fireStone.style.display = "none";
    thunderStone.style.display = "none";
    schermTwee.style.backgroundImage = "url('../images/water.png')";
    console.log("vaporeon");
}

useWaterStone.onanimationend = () => {
    eeveeEvolve.classList.add("evolveEevee");
    vaporeonEvolve.classList.add("toVaporeon");
    evolutionStones.style.display = "none";
    tekst.innerHTML = "Eevee is evolving into Vaporeon!";
    eevee2.style.display = "none";
    console.log("evolve_to_vaporeon");
}

vaporeonEvolve.onanimationend = () => {
    vaporeon.style.display = "block";
    restart.style.display = "block";
    console.log("vaporeon_evolved");
}





// Locations





function locatedToFairy () {
    tekst.innerHTML = "Leveling Eevee while having a Fairy type move will cause Eevee to evolve into Sylveon!";
    schermTwee.style.backgroundImage = "url('../images/fairy.png')"; 
    eeveeEvolve.classList.add("evolveEevee");
    sylveonEvolve.classList.add("toSylveon");
    placesToTrain.style.display = "none";
    eevee2.style.display = "none";
    console.log("fairy");
}

sylveonEvolve.onanimationend = () => {
    sylveon.style.display = "block";
    restart.style.display = "block";
    console.log("sylveon_evolved");
}

function locatedToNight () {
    tekst.innerHTML = "Leveling Eevee at night with full happiness causes Eevee to evolve into Umbreon!";
    schermTwee.style.backgroundImage = "url('../images/night.png')"; 
    eeveeEvolve.classList.add("evolveEevee");
    umbreonEvolve.classList.add("toUmbreon");
    placesToTrain.style.display = "none";
    eevee2.style.display = "none";
    console.log("dark");
}

umbreonEvolve.onanimationend = () => {
    umbreon.style.display = "block";
    restart.style.display = "block";
    console.log("umbreon_evolved");
}

function locatedToDay () {
    tekst.innerHTML = "Leveling Eevee during the day with full happiness causes Eevee to evolve into Espeon!";
    schermTwee.style.backgroundImage = "url('../images/day.png')"; 
    eeveeEvolve.classList.add("evolveEevee");
    espeonEvolve.classList.add("toEspeon");
    placesToTrain.style.display = "none";
    eevee2.style.display = "none";
    console.log("sun");
}

espeonEvolve.onanimationend = () => {
    espeon.style.display = "block";
    restart.style.display = "block";
    console.log("espeon_evolved");
}

function locatedToMoss () {
    tekst.innerHTML = "Leveling Eevee near the Moss Rock causes Eevee to evolve into Leafeon!";
    schermTwee.style.backgroundImage = "url('../images/moss.png')";
    eeveeEvolve.classList.add("evolveEevee");
    leafeonEvolve.classList.add("toLeafeon");
    placesToTrain.style.display = "none";
    eevee2.style.display = "none";
    console.log("moist");
}

leafeonEvolve.onanimationend = () => {
    leafeon.style.display = "block";
    restart.style.display = "block";
    console.log("leafeon_evolved");
}

function locatedToSnow () {
    tekst.innerHTML = "Leveling Eevee near the Icy Rock causes Eevee to evolve into Glaceon!";
    schermTwee.style.backgroundImage = "url('../images/snow.png')"; 
    eeveeEvolve.classList.add("evolveEevee");
    glaceonEvolve.classList.add("toGlaceon");
    placesToTrain.style.display = "none";
    eevee2.style.display = "none";
    console.log("snowy");
}

glaceonEvolve.onanimationend = () => {
    glaceon.style.display = "block";
    restart.style.display = "block";
    console.log("glaceon_evolved");
}



// Restart knop



function restartEvolution () {
    location.reload(); 
    console.log("restart");
}
