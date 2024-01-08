import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../API';
import user from "../../img/pngtree-user-vector-avatar-png-image_4830521.jpg"
import { Link, NavLink } from 'react-router-dom';
const Person = ({text}) => {
    let [person , setPerson] = useState([])

    function getPerson( movieId , key) {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`).then((res) => {
       setPerson(res.data.cast)
        })
    }


 

    useEffect(() => {
        getPerson(text,API_KEY)
    },[])
console.log(person);
    return (
        <div id='person'>
            <div className="container">
                
                    <h1 style={{
                        margin: "20px 0",
                        fontSize: "24px",
                        fontWeight : "800"
                    }}>В ролях</h1>
                <div className="person">
                    
                    {
                        person?.map((el) => (
                            <div className="pesron-img">
                                
                                   <Link to={`/actors/${el.id}`}>
                                     {  el.profile_path === null ? <img className='user_img' src={user} alt="img" /> :  <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`} alt="" />}
                                   </Link>
                                <h2>{el.name}</h2>
                            </div>
                            
                        ))
                    }
                </div>  

            </div>
        </div>
    );
};

export default Person;