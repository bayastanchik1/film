import React from 'react';
import { Link } from 'react-router-dom';

const Scroll2 = ({top}) => {
    return (
        <div id='scroll2'>
            <div className="container">
                <div className="scroll2">
                    {
                        <Link to={`/MovieDetails/${top.id}`}>
                         <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${top.poster_path}`} alt="img" />
                        </Link>
                    }
                    {
                        <h3>{top.title}</h3>
                    }
                </div>
            </div>
        </div>
    );
};

export default Scroll2;