const jokeButton = document.querySelector("#reveal-joke");
const revealButton = document.querySelector("#reveal-punchline");
const joke = document.querySelector("#joke");
const punchline = document.querySelector("#punchline");

const jokes = [
  {
    joke: "What do you call a factory that make okay product?",
    punchline: "A satisfactory",
  },
  {
    joke: "What do you call a rotted mango?",
    punchline: "A man-gone",
  },
  {
    joke: "How do you grow birds?",
    punchline: "With bird seed.",
  },
  {
    joke: "What do Alexander the Great and Winnie the Pooh have in common?",
    punchline: "Same middle name.",
  },
  {
    joke: "What do you call a bee that can't make up its mind?",
    punchline: "A maybe",
  },
  {
    joke: "What do you call a fake noodle?",
    punchline: "An Im-pasta!",
  },
  {
    joke: "What do you call a pile of cats?",
    punchline: "A meowtain!",
  },
  {
    joke: "What job did the frog have at the hotel?",
    punchline: "Bellhop!",
  },
];

let randomNum = 0;

console.log(randomNum);

jokeButton.addEventListener("click", attempJoke);
function attempJoke() {
  randomNum = Math.floor(Math.random() * jokes.length);
  joke.textContent = jokes[randomNum].joke;
  punchline.style.visibility = "hidden";
}

revealButton.addEventListener("click", revealPunchline);
function revealPunchline() {
  punchline.textContent = jokes[randomNum].punchline;
  punchline.style.visibility = "visible";
}
