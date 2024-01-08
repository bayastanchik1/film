import React, { useContext, useState } from 'react';
import Scrol from '../Scrol';
import { Link, NavLink } from 'react-router-dom';
import Home from '../Home';
import { lenguageContext } from '../context';

const EtoiWeek = () => {
    const [focu , setFocu] = useState(false)
    const [right , setRight] =useState(false)
const {dark} = useContext(lenguageContext)
    return (
        <div>
             <div id='trend'>
            <div className="container">
               <div className="trend">
                <div className="trend-txt">
                    <h2>В тренде</h2>
                 <NavLink to={"/"}>
                 <button onClick={() => {
                        setFocu(true)
                        setRight(false)

                    }} style={{
                        background: focu ? "grey" : "none", 
                        color : dark ? "white" : "black",
                        transition : ".7s"
                    }} className='lef'>Сегодня</button>
                 </NavLink>
                    
                    <NavLink to={"/week"}>
                    <button onClick={() => {
                        setRight(true)
                        setFocu(false)
                    }} style={{
                        transition : ".7s",
                        background: right ? "grey" : "none", 
                        color : dark ? "white" : "black",
                        
                    }}  className='right'> На этой неделе</button>
                    </NavLink>
                </div>
                </div> 
            </div>
            {/* <Scrol/> */}
        </div>
        </div>
    );
};

export default EtoiWeek;