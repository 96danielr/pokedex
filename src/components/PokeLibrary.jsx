import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import PokemonItem from "./PokemonItem";
import { useNavigate } from "react-router-dom";
import "./Pokelibrary.css";

const PokeLibrary = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokesearch, setPokesearch] = useState("");
  const [posts, setPost] = useState([]);
  const [type, setType] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => setPokemons(res.data.results));

    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setType(res.data.results));
  }, []);

  //GET post

  const user = useSelector((state) => state.user);

  const search = (e) => {
    e.preventDefault();

    alert(pokesearch);
    navigate(`/Pokemon/${pokesearch}`);
  };

  const filterpokemon = (e) => {
    axios.get(e.target.value).then((res) => setPokemons(res.data.pokemon));
  };
  return (
    <div className="Poke-libary">
      <div className="container">
        <div className="tittle">
          <h2>pokedex</h2>
        </div>

        <p className="subtittle">Welcome Master {user} this is the Pokedex</p>

        <div className="center">
          <form onSubmit={search} className="box">
            <input
              type="text"
              value={pokesearch}
              onChange={(e) => setPokesearch(e.target.value)}
            />
            <button className="search"><i class="fa-light fa-magnifying-glass"></i></button>
          </form>
          <select onChange={filterpokemon}>
            <option value="">seleccion un tipo </option>
            {type.map((typ) => (
              <option value={typ.url} key={typ.url}>
                {typ.name}
              </option>
            ))}
          </select>
        </div>
        <div className="row">  
       
          {pokemons.map((pokemon) => (
            <div className="cardpoke">
              <PokemonItem
                PokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                key={pokemon.name}
              />
              </div>
            
          ))}
        
        
        </div>
      </div>
    </div>
  );
};

export default PokeLibrary;
