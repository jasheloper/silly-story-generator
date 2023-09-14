const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


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


randomize.addEventListener('click', result);

function result() {

  // so we can create a new random story each time the button is pressed and the function is run. 
  // If we made changes directly to storyText, we'd only be able to generate a new story once.
  
  let newStory = storyText;


    // each case will be a random item out of each array it is called on).
  // i.e. return a random string out of insertX by writing randomValueFromArray(insertX)

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);



  // we want to replace the three placeholders in the newStory string — :insertx:, :inserty:, and :insertz: — with the strings stored in xItem, yItem, and zItem. 

  // in each case, make the call to the method equal to newStory, so each time it is called, newStory is made equal to itself, but with substitutions made. 

newStory.replaceAll(":insertx:", xItem)
        .replace(":inserty:", yItem)
        .replace(":insertz:", zItem)



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