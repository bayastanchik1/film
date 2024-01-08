import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../API';

const Video = ({movieId}) => {
    const [video , setVideo] = useState([])
    const getVideo = (movieId , key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`).then((res) => {
setVideo(res.data.results)
        })
    }
    useEffect(()=> {
getVideo(movieId, API_KEY)
    }, [])
console.log(video);


    return (
        <div id='video'>
            <div className="container">
                <div className="video">
                    {
                        video.slice(0,3).map((el) => (
                            <div className="video-block">
                                <iframe width="407" height="262" src={`https://www.youtube.com/embed/${el.key}?list=RD36KxHygl1A0`} title="subs Santiz ft  Kamilov   Жаман Дай Мне Ещё Пару Минут ❤ RU ⁄LT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Video;