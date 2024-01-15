import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { API_KEY } from '../API';
import image from "../../img/dot.png"
import { lenguageContext } from '../context';
import { Link } from 'react-router-dom';
import loadingImgs from "../../img/loading1.svg"

const Scrol = () => {
    const [view , setView] =useState([])
    const {language} = useContext(lenguageContext)
    const [loadingImg , setLoadingImg] = useState(false)

    function getAxi(key) {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=50`).then((res) => {
            setView(res.data.results)
        })
    }
    useEffect(() => {
      getAxi(API_KEY)
       }, [])


setTimeout(() => {
setLoadingImg(true)
}, 2000)



    return (
        <div id='scrol'>
            <div className="container2">
                <div className="scrol">
                    {
                        view.map((el) => (
                            <div className="scrol--img">
                                <Link to={`/MovieDetails/${el.id}`}>
         {
            loadingImg === false ? <img src={loadingImgs} alt="img" /> : <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="" />
        }
                                </Link>
                                <h1>{Math.trunc(el.vote_average * 10)}  <sub>%</sub> </h1>
                                <h3>{el.title}</h3>
                                <h4>{el.release_date}</h4>
                            </div>
                        ))
                    }
                </div>
            {/* <div className="scrol_bg">
                <img style={{
                    zIndex:"100"
                }} src={image} alt="img" />
            </div> */}
            </div>
        </div>
    );
};

export default Scrol;