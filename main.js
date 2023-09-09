/*

This gives you three variables that store references to the: 

    "Enter custom name" text field (customName)

    the "Generate random story" button (randomize), and the <p> element at the bottom of the HTML body that the story will be copied into (story), respectively. 

    In addition you've got a function called randomValueFromArray() that takes an array, and returns one of the items stored inside the array at random.

*/

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



/*

text strings that will act as input into our program.

*/

let storyText ="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertX = ["Willy the Goblin",
"Big Daddy",
"Father Christmas"];

let insertY = ["the soup kitchen",
"Disneyland",
"the White House"];

let insertZ = ["spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"];




/*
Adds a click event listener to the randomize variable so that when the button it represents is clicked, the result() function is run.


Adds a partially-completed result() function definition to your code. 

For the remainder of the assessment, you'll be filling in lines inside this function to complete it and make it work properly.
*/


randomize.addEventListener('click', result);

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



// My code below:

/*

Create a new variable called newStory, and set its value to equal storyText. 

This is needed so we can create a new random story each time the button is pressed and the function is run. 

If we made changes directly to storyText, we'd only be able to generate a new story once.

*/

let newStory = storyText;



/*

Create three new variables called xItem, yItem, and zItem, 

and make them equal to the result of calling randomValueFromArray() on your three arrays 

(the result in each case will be a random item out of each array it is called on). 

For example you can call the function and get it to return one random string out of insertX by writing randomValueFromArray(insertX).

*/

let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);




/*

Next we want to replace the three placeholders in the newStory string — :insertx:, :inserty:, and :insertz: — 
with the strings stored in xItem, yItem, and zItem. 


There are two possible string methods that will help you here — 
in each case, make the call to the method equal to newStory, so each time it is called, newStory is made equal to itself, 
but with substitutions made. 

So each time the button is pressed, these placeholders are each replaced with a random silly string. 

As a further hint, depending on the method you choose, you might need to make one of the calls twice.

*/

newStory.replace(":insertx:", xItem);
newStory.replace(":inserty:", yItem);
newStory.replaceAll(":insertz:", zItem);