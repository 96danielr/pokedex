import React, { useState } from 'react';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./UserInput.css";

const UserInput = () => {

    const[userName,setUserName] = useState("")
    const Navigate = useNavigate()
    const submit = e => {
        e.preventDefault()
        dispatch(changeUser(userName)) 
        Navigate("/Pokemon")


    }
    const dispatch = useDispatch(changeUser(userName)); 
    return (
        <div className="login_page">
        
        <div className="beginning">
        <div className="banner">
            <h1>hello trainer!</h1>
            <img src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png" alt="" />
        
            
        </div>
        <p className='tittle'> give me your name to start</p>
        
        <form onSubmit={submit}>
            <input type="text" 
            value={userName}
            onChange={e=>setUserName(e.target.value)}
            />
            <button><i class="fa-light fa-paper-plane-top"></i></button>

        </form>
        </div>
        </div>
    );
};

export default UserInput;