import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setName } from '../store/slices/username.slice';
import image from '../assets/image.png'

const UserInput = () => {
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const dispatchUserName =() =>{
        dispatch(setName(userName))
        navigate('./pokemons')
    }

    return (
        <div className='home'>
            <div className='login'>
            <img src={image} alt="Pokedex" />
            <div>
            <h1 className='welcome'>Hello Trainer!</h1>
            <p className='welcome-paragraph'>give me your name to start</p>
            </div>
            <div className='input-name'>
            <input type="text" placeholder='Your name...' value={userName} onChange={e => setUserName(e.target.value)}/>
            <button onClick={dispatchUserName}>Start</button>
            </div>
            </div>
        </div>
    );
};

export default UserInput;