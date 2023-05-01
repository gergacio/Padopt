import { createRoot } from "react-dom/client";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
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


//instanciate query client, how long we want to cash result from api


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

//components like BrowserRouter and QueryClientProvider are high-order components. They dont display anything, just provide contexxt (wrap up staff)

const App = () => {
  const adoptedPet = useState(null);
  return (
    <div className="p-0 m-0" style={{bacground: "url(https://pets-images.dev-apis.com/pets/wallpaperA.jpg)"}}>
    <BrowserRouter>
          <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500">
              <Link  className="text-6xl text-white hover:text-gray-200" to="/">Adopt me!</Link>
            </header>      
            <Routes>
              <Route path="/details/:id" element={<Details />}/>
              <Route path="/" element={<SearchParams />}/>
            </Routes>
            </AdoptedPetContext.Provider>
          </QueryClientProvider>
    </BrowserRouter>
    </div>


  );
};
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);

export default App;
