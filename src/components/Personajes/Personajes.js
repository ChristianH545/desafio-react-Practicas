import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

const Personajes = () => {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);

  const getData = async () => {
    try {
      const data = await fetch(url);
      const personaje = await data.json();
      setCharacters(personaje.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row">
      {characters.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
};

export default Personajes;
