import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [pets, setPets] = useState([]);
  const [breed, setBreed] = useState("");
  //temp arr of breeds
  const breeds = ["plural"];

  //go do something else ouside from hook lifecycle
  useEffect(() => {
    requestPets();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps
  //workflow is render with no useEffect, than run useEffect once

  async function requestPets(){
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    const json = await res.json();

    setPets(json.pets);

  }

  return (
    <div className="search-params">
      <form onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">Location</label>
        <input
          onChange={(e) => setLocation(e.target.value)}
          id="location"
          placeholder="Location"
          value={location}
        />
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
                setAnimal(e.target.value);
                setBreed("");
              }}
          
     
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
            Breed
            <select
                id="breed"
                value={breed}
                disabled={breeds.length === 0}
                onChange={(e) => {
                    setBreed(e.target.value)
                }}
                onBlur={(e) => setBreed(e.target.value)}
            >
               <option/>
              {breeds.map((breed) => (
                <option key={breed} value={breed}>{breed}</option>
              ))}
               
            </select>

        </label>
        <button>Submit</button>
      </form>
      {
        pets.map((pet) => (
            <Pet 
                name={pet.name}
                animal={pet.animal}
                breed={pet.breed}
                key={pet.id}

            />
        ))
      }
    </div>
  );
};
export default SearchParams;
