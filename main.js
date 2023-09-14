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
        .replace(":insertz:", zItem);



  if(customName.value !== '') {
    const name = customName.value;
    // add another string replacement method call to replace the name 'Bob' found in the newStory string with the name variable. 
    newStory.replace("Bob", name);
  }

  // we are checking to see if the uk radio button has been selected.
  // If so, we want to convert the weight and temperature values in the story from pounds and Fahrenheit into stones and centigrade.

  if(document.getElementById("uk").checked) {

    // replace 300 with a calculation that converts 300 pounds into stones.
    // Concatenate ' stone' onto the end of the result of the overall Math.round() call.
    const weight = `${Math.round((300 / 14))} stone`;

    // replace 94 with a calculation that converts 94 Fahrenheit into centigrade.
    // Concatenate ' centigrade' onto the end of the result of the overall Math.round() call.
    const temperature =  `${Math.round((94 - 32) * (5 / 9))} centigrade`;

    // add two more string replacement lines that replace '94 fahrenheit' with the contents of the temperature variable, and '300 pounds' with the contents of the weight variable.
    newStory.replace("300 pounds", weight)
            .replace("94 fahrenheit", temperature);
  }

  story.textContent = ;
  story.style.visibility = 'visible';
}