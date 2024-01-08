import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { API_KEY } from '../API';
import { Link } from 'react-router-dom';
import loading from "../../img/Spinner-1s-200px.svg"
import { lenguageContext } from '../context';
const Popular = () => {
    const [popular , setPopular] = useState([])
    const [languages , setLanguages] = useState("us-US")
    const [page , setPage] = useState(1)
    const {language} = useContext(lenguageContext)
    const {dark} = useContext(lenguageContext)





    function getPopular(key) {
      axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${page}`).then((res) => {
            setPopular(res.data.results)
      })
    }
    useEffect(() => {
     setTimeout(()=> {
      getPopular(API_KEY)
     }, 2000)
    },[page , language])
console.log(popular);

    return (
        <div id='popular' style={{
          transition:".8s",
          background : dark? "black" : "white"
        }}>
            <div className="container">
                <div className="popular">
              
                    {
                      popular.length === 0 ? <img className='loading' src={loading} alt="img" /> :
                        popular.map((el) => (
                           <div className="pop" style={{
                            color: dark ? 'white' : 'black',
                            border : dark ? "2px solid white" : "none"
                           }}>
                            <Link to={`/MovieDetails/${el.id}`}>
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="img" />
                            </Link>
                             <h2 className='title'>{el.title}</h2>
                             <h3 className='dat'>{el.release_date}</h3>
                           </div>
                         ) )
                    }
                </div>
            </div>
              <div style={{
                display: "flex" ,
                justifyContent:"center",
                gap : "30px"
              }} className="btn">
                <button onClick={() => {
                  setPage(page + 1)
                  console.log(page);
                }}>next</button>
         
              </div>
        </div>
    );
};

export default Popular;