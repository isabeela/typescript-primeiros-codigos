import { Greeter } from './greeter';

let title: string = 'MyApp';

let paragraph: string = 'Blablablabla....';

let counter = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  const appCounter: HTMLElement = document.getElementById('app.counter');
  appCounter.innerHTML = counter + '';
}, 1000);

const btn = document.getElementById('app.btn');
btn.addEventListener('click', alertMethod);
function alertMethod(this: HTMLElement, ev: Event) {
  alert('Alertando pelo typescript');
}

// Write TypeScript code!
const appTitle: HTMLElement = document.getElementById('app.title');
appTitle.innerHTML = title;

let greeter = new Greeter('Impiedoso');

const appParagraph: HTMLElement = document.getElementById('app.paragraph');
appParagraph.innerHTML = greeter.getGreeting();
