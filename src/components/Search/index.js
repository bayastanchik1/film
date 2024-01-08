import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_KEY } from '../API';
import Popular from '../Popular';

const Search = () => {

const [search , setSearch] = useState([])
let {movieSearch} = useParams()
function getSearch(key) {
    axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieSearch}`).then((res) => {
        setSearch(res.data.results)
    })
}


useEffect(()=> {
getSearch(API_KEY)
}, [getSearch])
console.log(search);

    return (
        <div id='popular'>
            <div className="container">
                <div className="popular">
                    {
                        search.map((el) =>  (
                          <div className="pop">
                            <Link to={`/MovieDetails/${el.id}`}>
                                  <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="" />,
                            </Link>
                                     <h2>{el.title}</h2>
                          </div>
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;