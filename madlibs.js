function parseStory(rawStory) {
  const story = document.querySelector(".madLibsEdit");
  const deleteWord = rawStory.replace(/\b\w+\[/g, '[');
  const putInputs = deleteWord.replace(/\[n\]/g,
   "<input id='noun'  placeholder='noun' />").replace(/\[v\]/g, 
  "<input id='verb'   placeholder='verb' />").replace(/\[a\]/g, 
  "<input id='adjective'  placeholder='adjective' />"
  );

  const parser = new DOMParser()
  const html = parser.parseFromString(putInputs, 'text/html' )  
  story.appendChild(html.body)
 
  const duplicateStory = document.querySelector('.madLibsPreview')
  duplicateStory.innerHTML = rawStory.replace(/\[n\]/g,
   "<span class='noun'>noun</span>").replace(/\[v\]/g, 
  "<span class='verb'>verb</span>").replace(/\[a\]/g, 
  "<span class='adjective'>adjective</span>");
  
  const inputs = document.querySelectorAll(".madLibsEdit input");
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      const nounValue = document.getElementById('noun').value;
      const verbValue = document.getElementById('verb').value;
      const adjectiveValue = document.getElementById('adjective').value;
      
      const nounSpan = document.querySelector('.madLibsPreview .noun');
      const verbSpan = document.querySelector('.madLibsPreview .verb');
      const adjectiveSpan = document.querySelector('.madLibsPreview .adjective');
      
      nounSpan.innerHTML = nounValue;
      verbSpan.innerHTML = verbValue;
      adjectiveSpan.innerHTML = adjectiveValue;
    });
  });
}






// function parseStory(rawStory) {
//   const story = document.querySelector(".madLibsEdit");
//   const deleteWord = rawStory.replace(/\b\w+\[/g, '[');
//   const putInputs = deleteWord.replace(/\[n\]/g,
//    "<input id='noun'  placeholder='noun' />").replace(/\[v\]/g, 
//   "<input id='verb'   placeholder='verb' />").replace(/\[a\]/g, 
//   "<input id='adjective'  placeholder='adjective' />"
//   );

//   const parser = new DOMParser()
//   const xml = parser.parseFromString(putInputs, 'text/html')
//   const html = parser.parseFromString(putInputs, 'text/html' )  
//   story.appendChild(html.body)
 
//   const duplicateStory = document.querySelector('.madLibsPreview')
//   duplicateStory.appendChild(xml.body)

//   // Add event listeners to input elements
//   const inputElements = document.querySelectorAll('input');
//   inputElements.forEach((input) => {
//     input.addEventListener('input', replaceInputs);
//   });
// }

// function replaceInputs() {
//   const nounValue = document.getElementById('noun').value;
//   const verbValue = document.getElementById('verb').value;
//   const adjectiveValue = document.getElementById('adjective').value;

//   const storyPreview = document.querySelector('.madLibsPreview');
//   const storyInputs = storyPreview.querySelectorAll('input');

//   storyInputs.forEach((input) => {
//     const inputId = input.getAttribute('id');
//     let replacementValue;

//     if (inputId === 'noun') {
//       replacementValue = nounValue;
//     } else if (inputId === 'verb') {
//       replacementValue = verbValue;
//     } else if (inputId === 'adjective') {
//       replacementValue = adjectiveValue;
//     }

//     input.parentNode.replaceChild(document.createTextNode(replacementValue), input);
//   });
// }


getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory);
  });

