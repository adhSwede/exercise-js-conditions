// ===================
//        Easy
// ===================
// Note: i wrote everything as functions, because it allowed me to
// keep everything active at once and call the one i wanted to test.

// ----- 1. Greeting-----
const greeting = () => {
  let input = prompt("Var god skriv in ditt namn:");

  if (input && input.trim() !== "") {
    console.log(`Hej, ${input}!`);
  } else {
    console.log("Vänligen skriv in ett namn.");
  } // for empty input.
};

// ----- 2. Comparing words -----
const compareWords = () => {
  let words = prompt("Skriv in två ord som ska sorteras:");
  if (words != null) {
    // Split the words into an array.
    let wordArray = words.split(" ").map((word) => word.trim());

    // Check if we have two words.
    if (wordArray.length === 2) {
      // Sort te words alphabetically.
      wordArray.sort((a, b) => a.localeCompare(b));

      console.log(
        `Här är dina ord i alfabetisk ordning: ${wordArray.join(", ")}`
      );
    } else {
      console.log("Du måste skriva in exakt två ord.");
    }
  }
};

// ----- 3. Age check -----
const ageCheck = () => {
  const age = parseInt(prompt("Hur gammal är du?"));
  // Making sure input is a number.
  if (isNaN(age)) {
    console.log("Vänligen ange en giltig ålder.");
    // if not an age.
  } else if (age >= 18) {
    console.log("Du är vuxen!");
    // if adult
  } else {
    console.log("Du är inte vuxen!");
    // if not adult
  }
};

// ----- 4. Guess the animal -----
const guessAnimal = () => {
  let animal = prompt(`Gissa vilket djur jag tänker på!`);
  if (animal.toLowerCase() !== "bäver") {
    // Make sure the answer accepts both upper and lower case answers.
    console.log(`FEL! FEL! FEL!`);
  } else {
    console.log(`JAAA! DU GISSADE RÄTT!`);
  }
};

// ===================
//        Medium
// ===================

// ----- 5. Identify color -----
const favoriteColor = () => {
  const input = prompt("Vad är din favoritfärg?");

  switch (input.toLowerCase()) {
    // Using switch statement allows me to make more alternatives,
    //although simpler in logic.
    // toLowercase again because it's just easier to compare the answer,
    // instead of writing or || or || or.
    case "röd":
      console.log("Röd är en energisk och passionerad färg!"); // Had chatGPT generate the quotes ;)
      break;
    case "blå":
      console.log("Blå är en lugn och fridfull färg!");
      break;
    case "grön":
      console.log("Grön symboliserar natur och harmoni!");
      break;
    case "gul":
      console.log("Gul är en glad och solig färg!");
      break;
    case "svart":
      console.log("Svart är elegant och tidlös!");
      break;
    case "vit":
      console.log("Vit står för renhet och enkelhet!");
      break;
    default:
      console.log("Det verkar som om du har en annan favoritfärg!");
  }
};

// ----- 6. Pass or fail -----
const passOrFail = () => {
  const input = parseInt(
    prompt("Hur många procent fick du på provet? (0-100)"),
    10 // Round the value to closest 10, make it easier to compare.
  );

  switch (true) {
    case input >= 90:
      console.log("Utmärkt! Du har fått A.");
      break;
    case input >= 80:
      console.log("Mycket bra! Du har fått B.");
      break;
    case input >= 70:
      console.log("Bra jobbat! Du har fått C.");
      break;
    case input >= 50:
      console.log("Godkänt! Du har fått D.");
      break;
    case input < 50 && input >= 0:
      console.log("Tyvärr, du har inte klarat provet.");
      break;
    default:
      console.log("Ogiltig poäng. Ange ett tal mellan 0 och 100.");
  } // I used a switch to handle more, simpler, answers.
};

// ----- 7. Activity Suggester -----
const suggestActivity = () => {
  const input = prompt(
    "Är vädret Soligt, Regnigt eller Molnigt?"
  )?.toLowerCase();
  // User input gets converted to lowercase for easier comparison.
  const activityNumber = Math.floor(Math.random() * 3) + 1;
  // I used random numbers and switches, as i thought it would make for a more fun and dynamic interaction
  let outcome = "";
  // a simple variable to store the outcome for logging later.

  if (input === "soligt") {
    switch (activityNumber) {
      case 1:
        outcome = "Gå ut på en promenad i naturen och njut av solen!";
        break;
      case 2:
        outcome = "Packa en picknick och åk till stranden.";
        break;
      case 3:
        outcome = "Hitta en park och läs en bok i solen.";
        break;
    } // If the user selected "soligt"
  } else if (input === "molnigt") {
    switch (activityNumber) {
      case 1:
        outcome = "Perfekt väder för att gå på museum!";
        break;
      case 2:
        outcome = "Besök ett kafé och titta på människor.";
        break;
      case 3:
        outcome = "Ta en promenad och se vart vägen leder!";
        break;
    } // If the user selected "molnigt"
  } else if (input === "regnigt") {
    switch (activityNumber) {
      case 1:
        outcome = "Perfekt för en mysig dag hemma med en film!";
        break;
      case 2:
        outcome = "Var kreativ och måla något.";
        break;
      case 3:
        outcome = "Ta en bok och koppla av inomhus med något gott att dricka.";
        break;
    } // If the user selected "regnigt"
  } else {
    outcome =
      "Skriv 'Soligt', 'Molnigt', eller 'Regnigt' för att få ett aktivitetstips!";
  } // If the user failed to type a valid input

  console.log(outcome);
  // log the outcome.
};

// ----- 8. Language specific greeting -----
const greetInLanguage = () => {
  const input = prompt("Which language do you speak?").toLowerCase();
  // Convert the input to lowercase for easy comparison.

  let output = "";
  // Store the output in a variable for logging.

  if (input === "english") {
    output = "Hello, how are you?";
  } else if (input === "svenska" || input === "swedish") {
    output = "Hej, hur mår du?";
  } else if (input === "deutsch" || input === "german") {
    output = "Hallo, wie geht's dir?";
  } else if (input === "español" || input === "spanish") {
    output = "Hola, ¿cómo estás?";
  } else if (input === "français" || input === "french") {
    output = "Bonjour, comment ça va?";
  } else {
    output = "Sorry, I do not know enough about that language.";
    // Response for unknown languages.
  }

  console.log(output);
  // Log the output.
};

// ----- 9. Check if divisible by 5 -----
const divisibleByFive = () => {
  const input = parseInt(
    prompt("Ge mig ett tal så ska jag berätta om det är delbart med 5.")
  );

  if (isNaN(input)) {
    console.log("Vänligen ange ett giltigt tal.");
    // Handle the case where the input is not a valid number.
  } else if (input % 5 === 0) {
    console.log(`Ditt tal ${input} är delbart med 5, ${input / 5} gånger!`);
    // If the input is divisible by 5, i want to tell the user how many times.
  } else {
    console.log("Ditt tal är inte delbart med 5.");
    // Otherwise, tell the user it isn't.
  }
};

// ----- 10. Leaving -----
const leaveConfirm = () => {
  if (window.confirm("Vill du gå ut?")) {
    console.log(`Tack för besöket!`);
    // for OK.
  } else {
    console.log(`Så trevligt att du stannar!`);
    // for cancel.
  }
};

// ===================
//        Hard
// ===================

// ----- 11. Letter or Number -----
const letterOrNumber = () => {
  const input = prompt("Skriv ett tecken:");

  if (input.length === 1) {
    // Ensures the user enters only one character.
    if (!isNaN(input)) {
      console.log("Det är en siffra.");
      // If it's a number
    } else if (input.match(/[a-zåäöA-ZÅÄÖ]/)) {
      console.log("Det är en bokstav.");
      // If it's a letter
    } else {
      console.log("Det är varken en siffra eller en bokstav.");
      // Other characters
    }
  } else {
    console.log("Var god skriv endast ett tecken.");
    // User has entered too many characters
  }
};

// ----- 12. Largest of Three Words -----
const largestOfThree = () => {
  const word1 = prompt("Skriv det första ordet:");
  const word2 = prompt("Skriv det andra ordet:");
  const word3 = prompt("Skriv det tredje ordet:");
  // one prompt per word.

  // Compare the lengths of the words and determine the longest
  if (word1.length >= word2.length && word1.length >= word3.length) {
    console.log(`Det största ordet är: ${word1}`);
  } else if (word2.length >= word1.length && word2.length >= word3.length) {
    console.log(`Det största ordet är: ${word2}`);
  } else if (word1.length === word2.length && word1.length === word3.length) {
    console.log("Alla ord är lika långa.");
    // for the weird off-chance that they all are the same.
  } else {
    console.log(`Det största ordet är: ${word3}`);
  }
};

// ----- 13. Password Check -----
const passwordCheck = () => {
  const password = prompt("Skriv ditt lösenord:");

  // Check if the password is at least 8 characters long and contains at least one digit
  if (password.length >= 8 && /\d/.test(password)) {
    console.log("Lösenordet är tillräckligt långt och innehåller en siffra.");
  } else {
    console.log(
      "Lösenordet måste vara minst 8 tecken långt och innehålla minst en siffra."
    );
  }
};

// ----- 14. Age Category -----
const ageCategory = () => {
  const age = parseInt(prompt("Skriv din ålder:"));
  // Variable to compare the age to our ifs.

  if (age >= 0 && age <= 12) {
    console.log("Du tillhör ålderskategorin: barn (0-12).");
    // for child.
  } else if (age >= 13 && age <= 19) {
    console.log("Du tillhör ålderskategorin: tonåring (13-19).");
    // for teen.
  } else if (age >= 20 && age <= 64) {
    console.log("Du tillhör ålderskategorin: vuxen (20-64).");
    // for adult.
  } else if (age >= 65) {
    console.log("Du tillhör ålderskategorin: pensionär (65+).");
    // for senior citizen.
  } else {
    console.log("Ogiltig ålder.");
    // for people who can't take a prompt.
  }
};

// ----- 15. Decision Making -----
const decisionMakingTwist = () => {
  const choice1 = confirm("Vill du gå ut på stan?");
  const choice2 = confirm("Vill du ta på dig byxor?");
  // Opted for silly choices.

  if (choice1 && choice2) {
    console.log("Du går ut på stan och är så stilig i dina byxor!");
  } else if (choice1 && !choice2) {
    console.log("Du går ut på stan, men kanske inte så stiligt utan byxor...");
  } else if (!choice1 && choice2) {
    console.log("Du stannar hemma men håller ändå på dig byxor. Värdig!");
  } else {
    console.log("Du stannar hemma utan byxor. Också en livsstil!");
  }
  // If-statements with logs based on the choices.
};
