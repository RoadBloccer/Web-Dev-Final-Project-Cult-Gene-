"use strict";

const lairNames = [
    "The Shadowed Hollow",
    "The Abyssal Keep",
    "The Forgotten Catacombs",
    "The Ebon Spire",
    "The Cursed Sanctuary"
];

const lairLocations = [
    "deep within a haunted forest",
    "beneath an ancient ruin",
    "inside a dormant volcano",
    "hidden in a desolate swamp",
    "within a labyrinth of caves"
];

const lairTraits = [
    "filled with eerie whispers",
    "lit by ghostly flames",
    "guarded by restless spirits",
    "adorned with ancient runes",
    "echoing with distant screams"
];

function generateLairDescript() {
    const name = lairNames[Math.floor(Math.random() * lairNames.length)];
    const location = lairLocations[Math.floor(Math.random() * lairLocations.length)];

    // pick two distinct traits
    const t1Index = Math.floor(Math.random() * lairTraits.length);
    let t2Index = Math.floor(Math.random() * lairTraits.length);
    if (t2Index === t1Index) {
        t2Index = (t2Index + 1) % lairTraits.length;
    }
    const trait1 = lairTraits[t1Index];
    const trait2 = lairTraits[t2Index];

    return `<strong>${name}</strong><br>Location: ${location}<br>Traits: ${trait1}, ${trait2}`;
}

// Helper to render into the page
function showLairDescription() {
    const el = document.getElementById("lairResult");
    if (el) el.innerHTML = generateLairDescript();
}
