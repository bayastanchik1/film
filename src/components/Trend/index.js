import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Scrol from '../Scrol';
import { lenguageContext } from '../context';

const Trend = () => {
  
    const [focu , setFocu] = useState(false)
    const [right , setRight] =useState(false)
    const {dark} = useContext(lenguageContext)
    return (
        <div id='trend'>
            <div className="container">
               <div className="trend">
                <div className="trend-txt">
                    <h2>В тренде</h2>
                    <button  onClick={() => {
                        setFocu(true)
                        setRight(false)
                        

                    }} style={{
                        background: focu ? "grey" : "none", 
                        color : dark ? 'white' : 'black',
                        transition : ".7s"
                    }} className='lef'>Сегодня</button>
                    
                    <NavLink to={"/week"}>
                    <button onClick={() => {
                        setRight(true)
                        setFocu(false)
                    }} style={{
                        transition : ".7s",
                        background: right ? "grey" : "none", 
                        color : dark ? 'white' : 'black'
                    }}  className='right'> На этой неделе</button>
                    </NavLink>
                </div>
                </div> 
            </div>
            <Scrol/>
        </div>
    );
};

export default Trend;