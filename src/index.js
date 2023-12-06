function displayPoem(response) {
  console.log("poem generated ");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");

  let apiKey = "1cdc842d025eb5a29t0a5c9o05fc3f7a";
  let context =
    "You are a romantic poem expert and love to write short poem. Your mission to generate a 2-4 line poem in basic HTML and separate each line with a <br/>. Make sure to follow the user instructions. Do not include a title to the poem.";
  let prompt = `User instruction: Generate a poem ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: $(prompt)`);
  console.log(`Context: $(context)`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
