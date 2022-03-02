const quotes = [
  {
    quote : "Youth cannot know how age thinks and feels. But old men are guilty if they forget what it was to be young.",
    author : "J. K. Rowling"
  },
  {
    quote : "Life is not fair; get used to it.",
    author : "Bill Gates"
  },
  {
    quote : "If you think your teacher is tough, wait until you get a boss. He doesn't have tenure.",
    author : "Bill Gates"
  },
  {
    quote : "Life is something that happens when you can't get to sleep.",
    author : "Fran Lebowitz"
  },
  {
    quote : "Youth, which is forgiven everything, forgives itself nothing: age, which forgives itself everything, is forgiven nothin",
    author : "George Bernard Shaw"
  },
  {
    quote : "The dead might as well try to speak to the living as the old to the young.",
    author : "Willa Cather"
  },
  {
    quote : "Life is a long lesson in humility.",
    author : "James M. Barrie"
  },
  {
    quote : "Life is like playing a violin in public and learning the instrument as one goes on.",
    author : "Samuel Butler"
  },
  {
    quote : "The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently.",
    author : "Friedrich Nietzsche"
  },
  {
    quote : "Life's a voyage that's homeward bound.",
    author : "Herman Melville"
  },
]

const quoteContainer = document.querySelector("#quote");
const quote = document.querySelector("#quote span:nth-child(1)");
const author = document.querySelector("#quote span:nth-child(2)");

const index = Math.floor(Math.random() * quotes.length);

quote.innerHTML = quotes[index].quote;
author.innerHTML = `By ${quotes[index].author}`;
