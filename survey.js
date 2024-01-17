/* eslint-disable linebreak-style */

const readline = require('readline');

const rl =readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//create array of questions
let questions = [
  "What's your name? Nicknames are also acceptable: ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];
//create empty array answers for the user input
let answers = [];

let survey = function (index) {
  if (index === questions.length) {
    console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, 
    devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport,
    and is amazing at ${answers[6]} at inopportune times.`);
    index = 0;
    rl.close();
    return;
  }

  rl.question(questions[index], function (answer) {
    answers.push(answer);
    survey(index + 1);
  });
};

survey(0); // Start the survey at first question 







