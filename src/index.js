document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);

function buildMadLib() {
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let conjunction = document.getElementById("conjunction").value;

  // Check if all input fields are filled
  if (pluralNoun && adjective && verb && noun && conjunction) {
    let processes = [
      '"There are too many ' + pluralNoun + ' on this ' + adjective + ' airplane!", I screamed. "Somebody has to ' + verb + ' ' + conjunction + ' the ' + noun + ' to solve this problem."',
      '"In the land of ' + noun + ', there were ' + pluralNoun + ' with incredibly ' + adjective + ' abilities. They would often ' + verb + ' around and make everyone smile."',
      '"Once upon a time, a ' + adjective + ' ' + noun + ' asked for the help of ' + pluralNoun + '. They needed to ' + verb + ' together to overcome the challenges ahead."',
      '"The ' + noun + ' was so ' + adjective + ' that it could ' + verb + ' for hours without stopping. People would gather to watch its amazing performance."',
      '"The ' + pluralNoun + ' were known for their ' + adjective + ' and ' + verb + ' skills. They could turn any ' + noun + ' into a work of art."',
      '"The ' + adjective + ' ' + noun + ' and the ' + pluralNoun + ' lived happily ever after, always finding time to ' + verb + ' ' + conjunction + '."',
      '"The mysterious ' + noun + ' was said to have ' + adjective + ' powers. Legend has it that it could ' + verb + ' anything it touched."',
      '"The ' + pluralNoun + ' gathered around the ' + adjective + ' ' + noun + '. They decided to ' + verb + ' ' + conjunction + ' to create something amazing."',
    ];

    let randomProcess = processes[Math.floor(Math.random() * processes.length)];
    document.getElementById("result").innerHTML = randomProcess;

    // Clear input fields
    document.getElementById("plural-noun").value = "";
    document.getElementById("adjective").value = "";
    document.getElementById("verb").value = "";
    document.getElementById("noun").value = "";
    document.getElementById("conjunction").value = "";
  } else {
    // Inform the user that all fields must be filled
    document.getElementById("result").innerHTML = "Please fill in all the input fields.";
  }
}
