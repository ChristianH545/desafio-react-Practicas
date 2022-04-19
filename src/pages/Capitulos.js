import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Capitulos = () => {
  //react-router-dom
  const { id } = useParams();

  // hooks State y Effect
  const [capitulos, setCapitulos] = useState([]);

  useEffect(() => {
    // variables para consimir la API
    let url = `https://rickandmortyapi.com/api/character/${id}`;
    // creamos una funcion async
    const getData = async () => {
      try {
        const data = await fetch(url);
        const res = await data.json();
        setCapitulos(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  console.log(capitulos);
  return (
    <>
      <h1>{capitulos.name}</h1>
      {capitulos.episode?.map((capitulo) => (
        <p key={capitulo}>{`Capitulo: ${capitulo}`} </p>
      ))}
    </>
  );
};

export default Capitulos;
