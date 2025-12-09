"use strict";

const cultNames = [
    "The Crimson Veil",
    "Children of the Eclipse",
    "The Whispering Bones",
    "Order of the Black Lantern",
    "The Pale Flame",
    "The Silent Choir",
    "The Veil of Shadows",
    "The Serpent's Fang",
    "The Obsidian Hand",
    "The Daughters of Night",
    "The Brotherhood of the Abyss",
    "The Cult of the Forgotten",
    "The Harbingers of Doom",
    "The Keepers of the Dark Flame",
    "The Coven of the Veiled Moon",
    "Children of the Void",
    "The Legion of the Damned",
    "The Seekers of the Lost Truth",
    "The Cult of the Black Star",
    "The Disciples of the Silent God",
    "The Order of the Eclipsed Sun"
];
const cultGoals = [
    "to resurrect an ancient deity",
    "to spread eternal darkness",
    "to harvest souls for forbidden rituals",
    "to guard secrets of the underworld",
    "to corrupt kingdoms with madness",
    "to summon eldritch horrors",
    "to overthrow mortal governments",
    "to unlock the secrets of immortality",
    "to bring about the apocalypse",
    "to control the minds of the living",
    "to create a utopia for the chosen few",
    "to harness the power of forgotten magic",
    "to awaken a slumbering titan",
    "to rewrite the fabric of reality",
    "to bind spirits to their will",
    "to spread a contagious curse",
    "to build an army of the undead",
    "to find and protect ancient relics",
    "to establish a new world order",
    "to communicate with otherworldly beings",
    "to transcend mortal existence",
    "to manipulate time and fate"
];
const cultSymbols = [
    "a bleeding eye",
    "a serpent coiled around a skull",
    "a burning hand",
    "a shattered crown",
    "a spiral of thorns",
    "a crescent moon with a dagger",
    "a black sun",
    "a pair of crossed bones",
    "a raven perched on a tombstone",
    "a spider weaving a web",
    "a chalice overflowing with blood",
    "a twisted tree with hanging lanterns",
    "a mask with hollow eyes",
    "a flame engulfing a book",
    "a horned skull",
    "a skeletal hand holding a key",
    "a wave crashing over a tower",
    "a labyrinth with no exit",
    "a crown of ice",
    "a broken mirror",
    "a winged serpent"
];
const cultRituals = [
    "midnight sacrifices",
    "blood offerings",
    "chanting ancient hymns",
    "ritualistic dances",
    "marking initiates with symbols",
    "summoning circles",
    "fasting under the new moon",
    "meditation in sacred groves",
    "pilgrimages to forbidden sites",
    "consuming hallucinogenic brews",
    "carving runes into flesh",
    "silent processions",
    "firewalking ceremonies",
    "moonlit vigils",
    "binding oaths",
    "mask-wearing rituals",
    "shadow puppetry",
    "dream interpretation sessions",
    "sacred feasts",
    "tattooing sacred symbols",
    "whispered confessions",
    "ritualistic storytelling",
    "offering personal belongings to the deity",
    "creating intricate sand mandalas",
    "performing acts of penance",
    "chanting in unison",
    "dressing in ceremonial robes",
    "using incense to purify the space",
    "carrying torches during night rituals"
];
const cultAttires = [
    "dark hooded robes",
    "bone-adorned armor",
    "ceremonial masks",
    "tattooed skin",
    "feathered cloaks",
    "silken sashes",
    "leather harnesses",
    "jewels made of bone",
    "chains and shackles",
    "flowing capes",
    "intricate jewelry",
    "painted faces",
    "woven grass skirts",
    "metal gauntlets",
    "fur-lined garments",
    "beaded necklaces",
    "embroidered tunics",
    "spiked collars",
    "silk veils",
    "woven bracelets"
];
const cultArtifacts = [
    "The Dagger of Eternal Night",
    "The Chalice of Souls",
    "The Amulet of the Forgotten",
    "The Tome of Shadows",
    "The Crown of Thorns",
    "The Staff of the Abyss",
    "The Lantern of Lost Spirits",
    "The Ring of the Damned",
    "The Mask of the Veiled One",
    "The Blade of the Silent God",
    "The Orb of Dark Prophecy",
    "The Scepter of the Black Star",
    "The Cloak of Invisibility",
    "The Gauntlet of Power",
    "The Mirror of True Sight",
    "The Pendant of Eternal Flame",
    "The Scroll of Forbidden Knowledge",
    "The Key to the Underworld",
    "The Bell of Awakening",
    "The Stone of Binding"
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


function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateCult() {
    const name = getRandom(cultNames);
    const goal = getRandom(cultGoals);
    const symbol = getRandom(cultSymbols);
    const ritual = getRandom(cultRituals);
    const attire = getRandom(cultAttires);
    const artifact = getRandom(cultArtifacts);

    // Pick two different random images
    let leftImg = getRandom(cultImages);
    let rightImg = getRandom(cultImages);
    while (rightImg === leftImg) {
        rightImg = getRandom(cultImages);
    }

    // Build separate clickable spans
    document.getElementById("result").innerHTML = `
        <strong id="cultName">${name}</strong><br>
        Goal: <span id="cultGoal">${goal}</span><br>
        Symbol: <span id="cultSymbol">${symbol}</span><br>
        Rituals: <span id="cultRitual">${ritual}</span><br>
        Attire: <span id="cultAttire">${attire}</span><br>
        Artifact: <span id="cultArtifact">${artifact}</span>
    `;

    document.getElementById("leftImage").innerHTML =
        `<img src="${leftImg}" alt="Picture of Cultist Jeff">`;
    document.getElementById("rightImage").innerHTML =
        `<img src="${rightImg}" alt="Picture of Cultist Bob">`;

    // Add click handlers for rerolling each part
    document.getElementById("cultName").onclick = () => {
        document.getElementById("cultName").textContent = getRandom(cultNames);
    };
    document.getElementById("cultGoal").onclick = () => {
        document.getElementById("cultGoal").textContent = getRandom(cultGoals);
    };
    document.getElementById("cultSymbol").onclick = () => {
        document.getElementById("cultSymbol").textContent = getRandom(cultSymbols);
    };
    document.getElementById("cultRitual").onclick = () => {
        document.getElementById("cultRitual").textContent = getRandom(cultRituals);
    }
    document.getElementById("cultAttire").onclick = () => {
        document.getElementById("cultAttire").textContent = getRandom(cultAttires);
    }
    document.getElementById("cultArtifact").onclick = () => {
        document.getElementById("cultArtifact").textContent = getRandom(cultArtifacts);
    }
}