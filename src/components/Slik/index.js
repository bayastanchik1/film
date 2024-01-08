import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../API';
import { Link } from 'react-router-dom';

const Slik = ({id}) => {
    const [slik , setSlik] = useState([])
    function getSlik(key) {
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`).then((res) => {
setSlik(res.data.cast)
        })
    }


    useEffect(()=> {
getSlik(API_KEY)
    } , [])

    console.log(slik);
    return (
        <div id='slik'>
            <div className="">
                <div className="sliks">
                    {
                        slik.map((el) => (
                              <div className="bot">
                                <Link to={`/MovieDetails/${el.id}`}>
                                  <img style={{width:"200px" , margin:"30px 0"}} src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${el.poster_path}`} alt="img" />
                                </Link>
                                  <h4>{el.title}</h4>
                              </div>
                        ))
                    },
                 
                </div>
            </div>
        </div>
    );
};
//`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`
export default Slik;