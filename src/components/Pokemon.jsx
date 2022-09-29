import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import image from '../assets/image.png'

const Pokemon = () => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [id])

    const types = pokemon.types
    const abilities = pokemon.abilities
    const moves = pokemon.moves
    console.log(abilities);

    return (
        <>
            <div className='nav'>
                <img src={image} alt="Pokedex" />
            </div>
            <div className='pokemon'>
                <img src={pokemon.sprites?.other['official-artwork'].front_default} alt="" />
                <div className='pokemon-info-card'>
                    <h2 className='pokemon-id'>#{pokemon.id}</h2>
                    <div className='pokemon-title'>
                        <hr />
                        <h2>{pokemon.name}</h2>
                        <hr />
                    </div>
                    <div className='pokemon-size'>
                        <div className='size'>
                            <small >Weight</small>
                            <p>{pokemon.weight}</p>
                        </div>
                        <div className='size'>
                            <small >Height</small>
                            <p>{pokemon.height}</p>
                        </div>
                    </div>
                    <div className='pokemon-characteristics'>
                        <div className='container-characteristics'>
                            <h3>Type</h3>
                            <div className='characteristics'>
                                {
                                    types?.map(e => (
                                        <p className='type-name'>{e.type.name}</p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='container-characteristics'>
                            <h3>Abilities</h3>
                            <div className='characteristics'>
                                {
                                    abilities?.map(e => (
                                        <p className='abilities-name'>{e.ability.name}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='pokemon-stats'>
                        <div className='title'>
                            <h2>Stats</h2>
                            <hr />
                        </div>
                        <div className='stats-container'>
                            <div className='stats'>
                                <div >
                                    <h4>HP</h4>
                                    <p>{pokemon.stats?.[0].base_stat}/150</p>
                                </div>
                                <hr className='background'/>
                                <hr style={{ width: `${(pokemon.stats?.[0].base_stat*100)/150}%` }}/>
                            </div>
                            <div className='stats'>
                                <div>
                                    <h4>ATTACK</h4>
                                    <p>{pokemon.stats?.[1].base_stat}/150</p>
                                </div>
                                <hr className='background'/>
                                <hr style={{ width: `${(pokemon.stats?.[1].base_stat*100)/150}%` }}/>
                            </div>
                            <div className='stats'>
                                <div>

                                    <h4>DEFENSE</h4>
                                    <p>{pokemon.stats?.[2].base_stat}/150</p>
                                </div>
                                <hr className='background'/>
                                <hr style={{ width: `${(pokemon.stats?.[2].base_stat*100)/150}%` }}/>
                            </div>
                            <div className='stats'>
                                <div>
                                    <h4>SPEED</h4>
                                    <p>{pokemon.stats?.[5].base_stat}/150</p>

                                </div>
                                <hr className='background'/>
                                <hr style={{ width: `${(pokemon.stats?.[5].base_stat*100)/150}%` }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='movements'>
                <div className='title'>
                <h2>Movements</h2>
                <hr />
                </div>
                <div>
                    {
                        moves?.map(e => (
                            <p className='moves'>{e.move.name}</p>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Pokemon;