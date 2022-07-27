import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const PokemonItem = ({PokemonUrl}) => {

    
    const [pokemon,setPokemon] = useState({})
    const navigate = useNavigate()
    const [type, setType] = useState('');
      
    useEffect(()=>{

        axios.get(PokemonUrl)
        .then(res=>{
            
         setPokemon(res.data)

         setType(res.data.types[0].type.name)
        
        
        })

        

        
    },[])

   

    console.log(type)

    const ValidateColor = (type) => {
        if(type === 'normal' || type === 1){
          return "#AAA67F";
        } else if(type === 'fighting' || type === 2){
          return "#C12239";
        } else if(type === 'flying' || type === 3){
          return "#A891EC";
        } else if(type === 'poison' || type === 4){
          return "#A43E9E";
        } else if(type === 'gound' || type === 5){
          return "#DEC16B";
        } else if(type === 'rock' || type === 6){
          return "#B69E31";
        } else if(type === 'bug' || type === 7){
          return "#A7B723";
        } else if(type === 'ghost' || type === 8){
          return "#70559B";
        } else if(type === 'steel' || type === 9){
          return "#70559B";
        } else if(type === 'fire' || type === 10){
          return "#F57D31";
        } else if(type === 'water' || type === 11){
          return "#6493EB";
        } else if(type === 'grass' || type === 12){
          return "#74CB48";
        } else if(type === 'electric' || type === 13){
          return "#F9CF30";
        } else if(type === 'phychic' || type === 14){
          return "#FB5584";
        } else if(type === 'ice' || type === 15){
          return "#9AD6DF";
        } else if(type === 'dragon' || type === 16){
          return "#7037FF";
        } else if(type === 'dark' || type === 17){
          return "#75574C";
        } else if(type === 'fairy' || type === 18){
          return "#E69EAC";
        } else if(type === 'shadow' || type === 19){
          return "#000000";
        } else {
          return "#B8B8B8";
        }
      }
     
  

    
    return (
        <div onClick={()=>navigate(`/Pokemon/${pokemon.id}`)} className="card" style={{background: ValidateColor(type)}}>

            <div className="text">
                     <h3>{pokemon.name}</h3>

            
               <div className='cloud-cont'>
                 <div className="cloud">
                     <b>Types: </b>
                     {pokemon.types?.[0 ]?.type.name}
                     
                 </div>
               </div>
            
            
                 <div className='cloud-cont'>
                    <div className="cloud">
                    <b>hp: </b>
                    {pokemon.stats?.[0].base_stat}
                     
                     </div>
                </div>
            
            
                <div className='cloud-cont'>
                    <div className="cloud">
                    <b>attack: </b>
                    {pokemon.stats?.[1].base_stat}
                    
            
                </div>
          </div>
            
            
            <div className='cloud-cont'>
                <div className="cloud">
                    <b>defense: </b>
                    {pokemon.stats?.[2].base_stat}

                
                </div>
                
            </div>
            
           <div className='cloud-cont'>
             <div className="cloud">
                 <b>speed: </b>
                 {pokemon.stats?.[5].base_stat}
            
             </div>
           </div>
            

             </div>
           

            <div className="img" >
            <img src={pokemon.sprites?.other.home.front_default} alt="" />

            </div>

            </div>
            
           
            

           

        
        
        
    );
};

export default PokemonItem;