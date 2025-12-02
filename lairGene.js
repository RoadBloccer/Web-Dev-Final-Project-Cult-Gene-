const cultLairImages = [ //Solved, thanks Emma=> NPC files not loading, possibly need to fix paths, idk why they'rebroke
    "Images/Lairs/abyssal crown_BW.png",

];
function generateLair() {
    const name = lairName[Math.floor(Math.random() * cultNames.length)];
    const type = lairType[Math.floor(Math.random() * cultNames.length)];
    const trait = lairTrat[Math.floor(Math.random() * cultNames.length)];
    const location = lairLocation[Math.floor(Math.random() * cultNames.length)];


    let leftImg = LairImages[Math.floor(Math.random() * cultImages.length)];


    document.getElementById("result").innerHTML =
        `<strong>${name}</strong><br>Type: ${type}<br>Trait: ${trait}<br>Location: ${location}`;
    document.getElementById("leftImage").innerHTML =
        `<img src="${leftImg}" alt="Picture of Cultist Lair">`;
}