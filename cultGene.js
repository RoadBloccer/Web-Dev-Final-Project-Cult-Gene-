const cultNames = [
    "The Crimson Veil",
    "Children of the Eclipse",
    "The Whispering Bones",
    "Order of the Black Lantern",
    "The Pale Flame"
];
const cultGoals = [
    "to resurrect an ancient deity",
    "to spread eternal darkness",
    "to harvest souls for forbidden rituals",
    "to guard secrets of the underworld",
    "to corrupt kingdoms with madness"
];
const cultSymbols = [
    "a bleeding eye",
    "a serpent coiled around a skull",
    "a burning hand",
    "a shattered crown",
    "a spiral of thorns"
];
// list of cult things, Name, Goal, Symbol, Rituals, Lair, Deity, Deity Domain/powers
const cultImages = [ //Solved, thanks Emma=> NPC files not loading, possibly need to fix paths, idk why they're broke
    "Images/NPCS__11.png",
    "Images/NPCS__12.png",
    "Images/NPCS__13.png",
    "Images/NPCS__29.png",
    "images/Zealots_0.png",
    "images/Zealots_2.png",
    "images/Zealots_4.png",
    "Images/Zealots_6.png",
    "Images/Zealots_7.png",
    "Images/Zealots_8.png",
    "Images/Zealots_9.png",
    "Images/Zealots_10.png",
    "Images/Zealots_12.png",
    "Images/Zealots_13.png",
    "Images/Zealots_14.png",
    "Images/Zealots_15.png",
    "Images/Zealots_18.png",
    "Images/Zealots_19.png",
    "Images/Zealots_20.png",
    "Images/Zealots_21.png",
    "Images/Zealots_22.png",
    "Images/Zealots_23.png",
    "Images/Zealots_24.png",
    "Images/Zealots_25.png",
    "Images/Zealots_26.png",
    "Images/Zealots_27.png",
    "Images/Zealots_28.png",
    "Images/Zealots_29.png",
    "Images/Zealots_30.png",
    "Images/Zealots_32.png",
    "Images/Zealots_33.png",
    "Images/Zealots_35.png",
    "Images/Zealots_36.png",
    "Images/Zealots_37.png",
    "Images/Zealots_38.png",
    "Images/Zealots_39.png",
    "Images/Zealots_40.png",
    "Images/Zealots_41.png",
    "Images/Zealots_42.png"

];
function generateCult() {
    const name = cultNames[Math.floor(Math.random() * cultNames.length)];
    const goal = cultGoals[Math.floor(Math.random() * cultGoals.length)];
    const symbol = cultSymbols[Math.floor(Math.random() * cultSymbols.length)];
    // Pick two different random images
    let leftImg = cultImages[Math.floor(Math.random() * cultImages.length)];
    let rightImg = cultImages[Math.floor(Math.random() * cultImages.length)];
    while (rightImg === leftImg) {
        rightImg = cultImages[Math.floor(Math.random() * cultImages.length)];
    }
    document.getElementById("result").innerHTML =
        `<strong>${name}</strong><br>Goal: ${goal}<br>Symbol: ${symbol}`;
    document.getElementById("leftImage").innerHTML =
        `<img src="${leftImg}" alt="Picture of Cultist Jeff">`;
    document.getElementById("rightImage").innerHTML =
        `<img src="${rightImg}" alt="Picture of Cultist Bob">`;
}