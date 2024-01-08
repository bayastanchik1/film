import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { API_KEY } from '../API';
import images from "../../img/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg fill.png"
import { lenguageContext } from '../context';
import { Link } from 'react-router-dom';
const Scrol = () => {
    const [view , setView] =useState([])
    const {language} = useContext(lenguageContext)

    function getAxi(key) {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=50`).then((res) => {
            setView(res.data.results)
        })
    }
    useEffect(() => {
      getAxi(API_KEY)
       }, [])
    return (
        <div id='scrol'>
            <div className="container2">
                <div className="scrol">
                    {
                        view.map((el) => (
                            <div className="scrol--img">
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="" />
                                <h1>{Math.trunc(el.vote_average * 10)}  <sub>%</sub> </h1>
                                <h3>{el.title}</h3>
                                <h4>{el.release_date}</h4>
                            </div>
                        ))
                    }
                </div>
            <div className="scrol_bg">
                <img src={images} alt="img" />
            </div>
            </div>
        </div>
    );
};

export default Scrol;