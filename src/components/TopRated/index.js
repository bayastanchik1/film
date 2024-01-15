import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../API';
import { Link, NavLink } from 'react-router-dom';
import leading from "../../img/none.svg"
const TopRated = () => {
    const [top , setTop] = useState([])
    function getTop(api) {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&page=1`).then((res) => {
            setTop(res.data.results)
        })
    }
    useEffect(() => {
       setTimeout(()=>{
        getTop(API_KEY)
       },2000)
    } ,[])
console.log(top);



    return (
        <div id='topRated'>
            <div className="container">
                <div className="topRated">

                      {
                            top.length === 0 ? <img className='loading' src={leading} alt="img" /> :


                            
                        top.map((el) => (
                            <div className="top">
                                <NavLink to={`/MovieDetails/${el.id}`}>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt="img" />
                                </NavLink>
                                <h2>{el.title}</h2>
                                <h4>{el.release_date}</h4>
                            </div>
                        ))
                      }
                </div>
            </div>
        </div>
    );
};

export default TopRated;