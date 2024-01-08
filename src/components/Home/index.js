import React, { useContext, useState } from "react";
import Trend from "../Trend";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [value, setValue] = useState('')
  const nav = useNavigate()
  console.log(value);
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="home-img">
            <h1>Добро пожаловать.</h1>
            <h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h2>
            <div className="btn-input">
              <input onChange={(e)=> setValue(e.target.value)} type="text" placeholder="Найти фильм, сериал, персону......"/>
              <button onClick={()=> nav(`/movieSearch/${value}`)} > Search </button>
            </div>
          </div>
        </div>
      <Trend/>
        
      </div>
    </div>
  );
};

export default Home;
