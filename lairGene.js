"use strict";

const cultLairImages = [
    "Images/Lairs/abyssal crown_BW.png",
    "Images/Lairs/Demon Urn_BW.png",
    "Images/Lairs/Dragons Crest_BW.png",
    "Images/Lairs/Eclipse Orb_BW.png",
    "Images/Lairs/Lunar Scars_BW.png",
    "Images/Lairs/Moonlight Scythe_BW.png",
    "Images/Lairs/Nightroot Fruit_ BW.png",
    "Images/Lairs/Portal Key_BW.png",
    "Images/Lairs/Shadow Fang Blade_BW.png",
    "Images/Lairs/Solar Elixir_BW.png",
    "Images/Lairs/Starry Cloak BW.png",
    "Images/Lairs/Stormclay Ocarina_BW.png"
];
const lairNames = [
    "The Abyssal Crown",
    "The Demon Urn",
    "The Dragon's Crest",
    "The Eclipse Orb",
    "The Lunar Scars",
    "The Moonlight Scythe",
    "The Night Fruit",
    "The Portal Key",
    "The Shadowfang Blade",
];
const lairTypes = [
    "Underground Cave",
    "Abandoned Temple",
    "Haunted Forest",
    "Desolate Island",
    "Ancient Ruins",
    "Hidden Mountain",
    "Sunken City",
    "Forgotten Crypt",
];
const lairTraits = [
    "Cursed Ground",
    "Eternal Darkness",
    "Whispering Winds",
    "Shifting Walls",
    "Living Shadows",
    "Toxic Air",
    "Endless Labyrinth",
    "Haunting Melodies",
    "Phantom Flames",
    "Time Distortion"
];
const lairLocations = [
    "Deep Underground",
    "Remote Jungle",
    "Frozen Tundra",
    "Desert Wasteland",
    "Swampy Marshlands",
    "Volcanic Region",
    "Dense Urban Area",
    "Isolated Mountain Peak"
];
function generateLair() {
    console.log("generateLair() called!");
}

function generateLair() {
    const name = lairNames[Math.floor(Math.random() * lairNames.length)];
    const type = lairTypes[Math.floor(Math.random() * lairTypes.length)];
    const trait = lairTraits[Math.floor(Math.random() * lairTraits.length)];
    const location = lairLocations[Math.floor(Math.random() * lairLocations.length)];


    let lairImg = cultLairImages[Math.floor(Math.random() * cultLairImages.length)];


    document.getElementById("lair_result").innerHTML =
        `<strong>${name}</strong><br>Type: ${type}<br>Trait: ${trait}<br>Location: ${location}`;
    document.getElementById("lair_Image").innerHTML =
        `<img src="${lairImg}" alt="Picture of Cultist Lair">`;
}