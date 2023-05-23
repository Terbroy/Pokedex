import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ url }) => {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [])

    return (
        <div 
        onClick={() => navigate(`/pokemons/${pokemon.id}`)}
        className='pokemon-card'>
            <img src={pokemon.sprites?.other['official-artwork'].front_default} alt="" />
            <div className='pokemon-info' >
                <div className='pokemon-type'>
                    <h4>{pokemon.name}</h4>
                    <p>{pokemon.types?.[1]?.type.name ? `${pokemon.types?.[0]?.type.name} / ${pokemon.types?.[1]?.type.name}` : pokemon.types?.[0]?.type.name}</p>
                    <small>Type</small>
                </div>
                    <hr className='pokemon-division'/>
                <div className='pokemons-skills'>
                    <div className='skills'>
                        <small>HP</small>
                        <p>{pokemon.stats?.[0].base_stat}</p>
                    </div>
                    <div className='skills'>
                        <small>ATTACK</small>
                        <p>{pokemon.stats?.[1].base_stat}</p>
                    </div>
                    <div className='skills'>
                        <small>DEFENSE</small>
                        <p>{pokemon.stats?.[2].base_stat}</p>
                    </div>
                    <div className='skills'>
                        <small>SPEED</small>
                        <p>{pokemon.stats?.[5].base_stat}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;