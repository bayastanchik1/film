import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../API';
import { Link, useParams } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import loding from "../../img/Freee.svg"
import Slik from '../Slik';



const Actors = () => {

    const [read , setRead] = useState(false)
    const [actor , setActor] = useState([])
    const {id}  =  useParams() 
    function getActors(key) {
        axios(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`).then((res) => {
            setActor(res.data)
        })
    }
    useEffect(()=> {
     setTimeout(() => {
        getActors(API_KEY)  
     }, 2000);
    }, [])
console.log("actor");
console.log(actor);
    return (
        <div id='actor'>
            <div className="container">
                <div className="actor">
                    <div className="actor--obsor">
                        {
                            actor.length === 0 ? <img style={{width : "200px"}} src={loding} alt="" /> : 
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${actor.profile_path}`} alt="" />
                        }

                        <div className="actor__icons">
                            <Link><FaFacebook /></Link>
                            <Link><FaTwitter /></Link>
                            <Link><FaInstagram /></Link>
                            <Link><FaTiktok /></Link>
                        
                        
                        

                        </div>
                        <h2>Персональная информация</h2>
                      <span>
                      <h3>Известность за</h3>
                      <h4>{actor.known_for_department}</h4>
                      </span>
                      <span>
                      <h3>Известно авторство</h3>
                      <h4>{Math.trunc(actor.popularity)}</h4>
                      </span>
                      <span>
                      <h3>Пол</h3>
                      <h4>{actor.gender === 2 ? "Мужской" : "Женский"}</h4>
                      </span>
                      <span>
                      <h3>Дата рождения</h3>
                      <h4>{actor.birthday}</h4>
                      </span>
                      <span>
                      <h3>Место рождения</h3>
                      <h4>{actor.place_of_birth}</h4>
                      </span>
                      <span>
                      <h3>Также известность как</h3>
                      <h5>{actor.also_known_as?.map((el) => (
                        <h1>{el}</h1>
                      ))}</h5>
                  
                
                  
                      </span>
                    </div>
                    <div className="actor--block">
                    <h1>{actor.name}</h1>
                    <h2>Биография</h2>
                    <p style={{lineHeight:"28px", fontWeight:"500" , fontSize:"19px"}}>{read ? actor.biography : actor.biography?.slice(0,602)} <span style={{fontSize:"23px", cursor:"pointer", marginLeft:"30px", fontWeight:"600"}} onClick={()=> setRead(!read)}>{read ? "Закрыть" :"Читать далее..."}</span></p>

<Slik id={id}/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actors;