import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

//main component in pure React
//import React from "react";
// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Proper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mixed",
//     })
//   );
// };

// const container = document.querySelector("#root");
// const root = createRoot(container);
// root.render(React.createElement(App, {}, null));

//re write component in jsx

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
    </div>
  );
};
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);

export default App;
