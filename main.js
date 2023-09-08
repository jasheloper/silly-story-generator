
//  store references to the "Enter custom name" text field (customName)
const customName = document.getElementById('customname');




// the "Generate random story" button (randomize), and the <p> element at the bottom of the HTML body that the story will be copied into (story), respectively. 

const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');





// text strings that will act as input into our program.

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

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





// takes an array, and returns one of the items stored inside the array at random.

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }





// Adds a click event listener to the randomize variable so that when the button it represents is clicked, the result() function is run.

randomize.addEventListener('click', result);



// a partially-completed result() function definition to your code. 
// fill in lines inside this function to complete it and make it work properly.

function result() {

    if(customName.value !== '') {
    const name = customName.value;

    }

    if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

    }

    story.textContent = ;
    story.style.visibility = 'visible';
}