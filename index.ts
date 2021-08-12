let title: string = 'MyApp';

let paragraph: string = 'Blablablabla....';

let counter = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  const appCounter: HTMLElement = document.getElementById('app.counter');
  appCounter.innerHTML = counter + '';
}, 1000);

// Write TypeScript code!
const appTitle: HTMLElement = document.getElementById('app.title');
appTitle.innerHTML = title;

const appParagraph: HTMLElement = document.getElementById('app.paragraph');
appParagraph.innerHTML = paragraph;
