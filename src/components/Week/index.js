import React, { useEffect, useState } from 'react';
import EtoiWeek from '../EtoiWeek';
import { API_KEY } from '../API';
import axios from 'axios';
import Scroll2 from '../Scroll2';

const Week = () => {

const [pop , setPop] = useState([])
  function getPopular(key) {
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=10`).then((res) => {
          setPop(res.data.results)
    })
  }
  useEffect(() => {
    getPopular(API_KEY)
  },[])
console.log(pop);


    return (
        <div id='week'>
            <div className="container">
                <div className="week">
                <div id="home">
        <div className="home">
          <div className="home-img">
            <h1>Добро пожаловать.</h1>
            <h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h2>
            <div className="btn-input">
              <input type="text" placeholder="Найти фильм, сериал, персону......"/>
              <button> Search </button>
            </div>
        </div>
        <EtoiWeek/>
        <div className="display">

        {
          pop.map((el) => (

            <Scroll2 top={el}/>
          ))
        }
        </div>
      </div>
    </div>
                </div>
            </div>
        </div>
    );
};

export default Week;