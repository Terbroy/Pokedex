import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import image from '../assets/image.png'

const Pokemons = () => {
    const name = useSelector((state) => state.userName)
    const [pokemon, setPokemon] = useState([])
    const navigate = useNavigate()
    const [nameInput, setNameInput] = useState('')
    const [type, setType] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => setPokemon(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type')
            .then(res => setType(res.data.results))
    }, [])

    const searchName = () => {
        navigate(`/pokemons/${nameInput}`)
    }


    const searchType = (type) => {
        axios.get(type)
            .then(res => setPokemon(res.data.pokemon))
    }

    const [page, setPage] = useState(1)
    const pokemonsPerPage = 16
    const lastPokemonIndex = page * pokemonsPerPage
    const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage
    const pokemonPaginated = pokemon.slice(firstPokemonIndex, lastPokemonIndex)
    const totalPages = Math.ceil(pokemon.length / pokemonsPerPage)
    const pagesNumbers = []
    for (let i = 1; i <= totalPages; i++) {
        pagesNumbers.push(i)
    }
    useEffect(()=>{
        setPage(1)
    },[pokemon])
    return (
        <>
            <div className='nav'>
                <img src={image} alt="Pokedex" />
            </div>
            <div className='pokemons'>
                <p className='welcome-pokemons'>
                    <b> Welcome {name}, </b>
                    here you can find your favorite pokemon
                </p>
                <div className='search'>
                    <div className='input-name'>
                        <input type="text" placeholder='search for a pokemon' value={nameInput} onChange={e => setNameInput(e.target.value)} />
                        <button onClick={searchName}>Search</button>
                    </div>
                    <div className='filter'>
                        <select className='filter-select' onChange={e => searchType(e.target.value)}>
                            <option value="">Pokemon Types</option>
                            {
                                type.map(e => {
                                    return (
                                        <option value={e.url} key={e.url}>{e.name}</option>
                                    )
                                })}
                        </select>
                    </div>
                </div>
                <ul className='pokemons-container'>
                    {
                        pokemonPaginated.map(e => {
                            return (
                                <li key={e.url ? e.url : e.pokemon.url}>
                                    <PokemonCard url={e.url ? e.url : e.pokemon.url} />
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='pagination'>
                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                        className='btn-prev'>
                        Prev page
                    </button>
                    {
                        pagesNumbers.map(e => (
                            <button className='btn-num' onClick={() => setPage(e)}>{e}</button>
                        ))
                    }
                    <button
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                        className='btn-nxt'>
                        Next page
                    </button>
                </div>
            </div>
        </>
    );
};

export default Pokemons;