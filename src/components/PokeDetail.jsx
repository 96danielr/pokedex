import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokeDetail.css";

const PokeDetail = () => {
  const [poke, setPoke] = useState({});
  const { id } = useParams();
  const [type, setType] = useState("");

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      setPoke({
        name: res.data.name,
        id: res.data.id,
        image: res.data.sprites.other.home.front_default,
        type: res.data.types,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        speed: res.data.stats[5].base_stat,
      });
      setType(res.data.types[0].type.name);
    });
  }, []);

  console.log(type);
  const ValidateColor = (type) => {
    if (type === "normal" || type === 1) {
      return "#AAA67F";
    } else if (type === "fighting" || type === 2) {
      return "#C12239";
    } else if (type === "flying" || type === 3) {
      return "#A891EC";
    } else if (type === "poison" || type === 4) {
      return "#A43E9E";
    } else if (type === "gound" || type === 5) {
      return "#DEC16B";
    } else if (type === "rock" || type === 6) {
      return "#B69E31";
    } else if (type === "bug" || type === 7) {
      return "#A7B723";
    } else if (type === "ghost" || type === 8) {
      return "#70559B";
    } else if (type === "steel" || type === 9) {
      return "#70559B";
    } else if (type === "fire" || type === 10) {
      return "#F57D31";
    } else if (type === "water" || type === 11) {
      return "#6493EB";
    } else if (type === "grass" || type === 12) {
      return "#74CB48";
    } else if (type === "electric" || type === 13) {
      return "#F9CF30";
    } else if (type === "phychic" || type === 14) {
      return "#FB5584";
    } else if (type === "ice" || type === 15) {
      return "#9AD6DF";
    } else if (type === "dragon" || type === 16) {
      return "#7037FF";
    } else if (type === "dark" || type === 17) {
      return "#75574C";
    } else if (type === "fairy" || type === 18) {
      return "#E69EAC";
    } else if (type === "shadow" || type === 19) {
      return "#000000";
    } else {
      return "#B8B8B8";
    }
  };

  return (
    <div style={{ background: ValidateColor(type) }} className="pokemon_card">
      <div className="poke-perfil">
        <h1>{poke.name}</h1>

        <img src={poke.image} alt="" />
      </div>

      <div className="poke-info">

        <h3>{poke.name}</h3>
        <div className="info">
            <p><b>HP: </b>{poke.hp}</p>
        </div>
        <div className="info">
            <p><b>attack: </b>{poke.attack}</p>
        </div>
        <div className="info">
            <p><b>defense: </b>{poke.defense}</p>
        </div>
        <div className="info">
            <p><b>speed: </b>{poke.speed}</p>
        </div>
      </div>
    </div>
  );
};

export default PokeDetail;
