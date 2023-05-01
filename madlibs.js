/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */

function parseStory(rawStory) {
  const h2 = document.querySelector(".madLibsEdit");
  let processedHTML = "<p>";
  let i = 0;
  console.log(rawStory)
  while (i < rawStory.length) {
    if (rawStory[i] === "[") {
      
      let inputType;
      if (rawStory[i+1] === "n") {
        inputType = "noun";
      } else if (rawStory[i+1] === "v") {
        inputType = "verb";
      } else {
        inputType = "adjective";
      }

      console.log(processedHTML)
      processedHTML = processedHTML.substring(0, processedHTML.lastIndexOf(" "));
      console.log(processedHTML)

      processedHTML += `<span></span> <input type="text" placeholder="${inputType}">`;
      console.log(processedHTML)

      i = rawStory.indexOf("]", i) + 2;
      console.log(i)
    } else {
      
      processedHTML += rawStory[i];
   
      i++;
    }
  }
  processedHTML += "</p>";
  h2.insertAdjacentHTML("beforeend", processedHTML);
  return processedHTML;
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * NOTE: You should not be writing any code in the global namespace EXCEPT
 * declaring functions. All code should either:
 * 1. Be in a function.
 * 2. Be in .then() below.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory);
  });

