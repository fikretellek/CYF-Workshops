import headerComponent from "./header";
import mainComponent from "./main";

//increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function App() {
  const body = document.createElement("body");

  const header = headerComponent();
  body.appendChild(header);

  const main = mainComponent();
  body.appendChild(main);

  const button = body.querySelector("#increment");
  const counter = body.querySelector("#counter");
  button.addEventListener("click", () => {
    increment(counter);
  });

  const button2 = body.querySelector("#decrement");
  button2.addEventListener("click", () => {
    decrement(counter);
  });

  return body;
}
