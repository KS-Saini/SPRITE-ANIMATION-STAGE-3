/*
I LEARNT A ONE MORE THING THAT'S WE CAN'T USE THE GOOGLE FOUNDED GIF AND INTO 
SPRITESHEET THAT THESE GIF SPRITESHEET IS USELESS OK!!
MENTIONED ON => 7-2-2023  TIME => 2:49 SINCE AFTANOON OK!!
--> IF WE WANT TO USE THE JSON(JAVASCRIPT OBJECT NOTION) DATA FOR THE 
SPRITESHEET FOR THE PNG'S WE MUST GIVE THE DIFFERENT POSITION OK!!
*/
let spritedata;
let spritesheet;
let animation = [];

function preload() {
    spritedata = loadJSON("assets/broken_boat.json");
    spritesheet = loadImage("assets/broken_boat.png");
}

function setup() {
    createCanvas(1400, 3000);
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++) {
        let pos = frames[i].position;
        let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img);
    }
}

function draw() {
    background('black');
    image(animation[2], 0, 0);
}


// let fan, fan01, fan02, fan03, fan04, fan05;

// function preload() {
//     fan_s = loadAnimation("assets/fan01.png", "assets/fan02.png",
//         "assets/fan03.png", "assets/fan04.png", "assets/fan05.png");
// }

// function setup() {
//     createCanvas(600, 600);
// }
// function draw() {
//     background(0);
//     animation(fan_s, 300, 300);
// }