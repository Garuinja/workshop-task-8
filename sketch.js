let doggo_message;
let dog_image;
let dog_api = 'https://dog.ceo/api/breeds/image/random';


let cn_value;
let cn_api = 'https://api.chucknorris.io/jokes/random';

let dnd_classes;
let dnd_class;
let dnd_api = 'https://www.dnd5eapi.co/api/classes/';

async function get_CN(){
  let data = await fetch(cn_api);
  let j_data = await data.json();
  cn_value = j_data.value;
}

async function get_Dog(){
  let data = await fetch(dog_api);
  let j_data = await data.json();
  doggo_message = j_data.message;
}

async function get_DND(){
  let data = await fetch(dnd_api);
  let j_data = await data.json();
  dnd_classes = j_data.results;
  dnd_class = random(dnd_classes).name;
}

function preload(){
  get_Dog();
  // dog_image = loadImage(doggo_message);
}

function setup() {
  createCanvas(400, 400);
  textWrap(WORD);
  get_CN();
  // get_Dog();
  get_DND();
}

function draw() {
  background(220);
  text(cn_value, 20, 20, 380);
  text(doggo_message, 20, 100, 380);
  // image(dog_image, 20, 80);
  text(dnd_class, 20, 150, 380)
}
