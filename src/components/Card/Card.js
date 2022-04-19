import React from "react";
import { Link } from "react-router-dom";

const Card = (character) => {
  return (
    <>
      <div
        key={(character.id, character.length)}
        className="container col mt-5 d-flex justify-content-center"
      >
        <div className="card " style={{ width: "18rem" }}>
          <img src={character.image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text"> Species: {character.species}</p>
            <Link to={`/detalle/${character.id}`}>
              <button className="btn btn-primary">Detalles</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
