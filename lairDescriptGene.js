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

// Helper to get random item
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateLairDescript() {
    const name = getRandom(lairNames);
    const location = getRandom(lairLocations);

    // pick two distinct traits
    const t1Index = Math.floor(Math.random() * lairTraits.length);
    let t2Index = Math.floor(Math.random() * lairTraits.length);
    if (t2Index === t1Index) {
        t2Index = (t2Index + 1) % lairTraits.length;
    }
    const trait1 = lairTraits[t1Index];
    const trait2 = lairTraits[t2Index];

    return `
        <strong id="lairName">${name}</strong><br>
        Location: <span id="lairLocation">${location}</span><br>
        Traits: <span id="lairTrait1">${trait1}</span>, 
                <span id="lairTrait2">${trait2}</span>
    `;
}

// Render into the page and attach click handlers
function showLairDescription() {
    const el = document.getElementById("lairResult");
    if (!el) return;

    el.innerHTML = generateLairDescript();

    // Add click handlers
    document.getElementById("lairName").onclick = () => {
        document.getElementById("lairName").textContent = getRandom(lairNames);
    };
    document.getElementById("lairLocation").onclick = () => {
        document.getElementById("lairLocation").textContent = getRandom(lairLocations);
    };
    document.getElementById("lairTrait1").onclick = () => {
        document.getElementById("lairTrait1").textContent = getRandom(lairTraits);
    };
    document.getElementById("lairTrait2").onclick = () => {
        document.getElementById("lairTrait2").textContent = getRandom(lairTraits);
    };
}
