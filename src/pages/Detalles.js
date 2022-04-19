import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Detalles = () => {
  const { id } = useParams();

  // hook state
  const [character, setCharacter] = useState([]);

  // hook Effect
  useEffect(() => {
    // variables para consimir la API
    let url = `https://rickandmortyapi.com/api/character/${id}`;
    // creamos una funcion async
    const getData = async () => {
      try {
        const data = await fetch(url);
        const detalle = await data.json();
        setCharacter(detalle);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <>
      <h1>{character.name}</h1>
      <img src={character.image} alt="" />
      <Link to={`/capitulos/${character.id}`}>
        <button className="btn btn-primary m-5">ir a Capitulos</button>
      </Link>
    </>
  );
};

export default Detalles;
