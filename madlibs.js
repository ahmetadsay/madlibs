function parseStory(rawStory) {
  const story = document.querySelector(".madLibsEdit");
  const deleteWord = rawStory.replace(/\b\w+\[/g, "[");
  const putInputs = deleteWord.replace(
    /\[n\]/g,
    "<input id='noun'  placeholder='noun' />"
  ).replace(
    /\[v\]/g,
    "<input id='verb'   placeholder='verb' />"
  ).replace(
    /\[a\]/g,
    "<input id='adjective'  placeholder='adjective' />"
  );

  const parser = new DOMParser();
  const html = parser.parseFromString(putInputs, "text/html");
  story.appendChild(html.body);

  const duplicateStory = document.querySelector(".madLibsPreview");
  duplicateStory.innerHTML = putInputs.replace(/<input[^>]*>/g, "<span></span>");

  const inputs = document.querySelectorAll(".madLibsEdit input");
  const spans = document.querySelectorAll(".madLibsPreview span");

  inputs.forEach((input, index) => {
    const span = spans[index];

    input.addEventListener("input", () => {
      span.textContent = input.value;
    });

    input.addEventListener("keydown", (event) => {
      if (event.keyCode === 13) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
    });
  });
}











getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory);
  });

