let insertX = [
"Willy the Goblin",
"Big Daddy",
"Father Christmas"];

let insertY = [
"the soup kitchen",
"Disneyland",
"the White House"];

let insertZ = [
"spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"];


let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);


let storyText = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;



let newStory = storyText;



function randomValueFromArray(array){
const random = Math.floor(Math.random()*array.length);
return array[random];
}


console.log(newStory)

