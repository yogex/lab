import { useState, useEffect } from "react";

const ANIMALS = ["bird", "dog", "cat", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, updateLocation] = useState("Seattle, WA");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = [];

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await response.json();

    console.log(response);
    console.log(json);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => updateLocation(e.target.value)}
            placeholder="Location"
          ></input>
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value)}
            onBlur={(e) => updateAnimal(e.target.value)}
          >
            <option></option>
            {ANIMALS.map((animal) => {
              <option key={animal} value={animal}>
                {animal}
              </option>;
            })}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={!breeds.length}
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
          >
            <option></option>
            {breeds.map((breed) => {
              <option key={breed} value={breed}>
                {breed}
              </option>;
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
