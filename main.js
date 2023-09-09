const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";


const insertX = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"];

const insertY = [
  "the soup kitchen",
  "Disneyland",
  "the White House"];

const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"];



let newStory = storyText;

let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);
  



/*

Next we want to replace the three placeholders in the newStory string — :insertx:, :inserty:, and :insertz: — 

with the strings stored in xItem, yItem, and zItem. 


There are two possible string methods that will help you here — in each case, 

make the call to the method equal to newStory, 


so each time it is called, newStory is made equal to itself, 

but with substitutions made. 

*/

newStory.replaceAll(":insertx:", xItem);
newStory.replace(":inserty:", yItem);
newStory.replace(":insertz:", zItem)






randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    /*

    add another string replacement method call to replace the name 'Bob' found in the newStory string with the name variable. 

    In this block we are saying "If a value has been entered into the customName text input, replace Bob in the story with that custom name."

    */
    newStory.replace("Bob", name);
  }


  if(document.getElementById("uk").checked) {

    /*

    we are checking to see if the uk radio button has been selected. 

    If so, we want to convert the weight and temperature values in the story from pounds and Fahrenheit into stones and centigrade. 

    */
    const weight = Math.round((300 / 14)) + " stone";
    const temperature =  Math.round((94 - 32) * (5/9)) + " centigrade";

    /*
    
    add two more string replacement lines that replace '94 fahrenheit' with the contents of the temperature variable, 
    
    and '300 pounds' with the contents of the weight variable.
    */

    newStory.replace("94 fahrenheit", weight);
    newStory.replace("300 pounds", temperature);
  }

  story.textContent = storyText;
  story.style.visibility = 'visible';
}