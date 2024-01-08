import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { lenguageContext } from '../context';
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const Header = () => {
const [value , setValue] = useState("")
const nav = useNavigate()
const {language} = useContext(lenguageContext)
const {setLanguage} = useContext(lenguageContext)
const {dark} = useContext(lenguageContext)
const {setDark} = useContext(lenguageContext)

    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="img" />
                    <div className="header--nav">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/popular"}>Popular</NavLink>
                        <NavLink to={"/ropRated"}>TopRated</NavLink>
                    </div>
                    {/* <select style={{padding:"6px 30px" , borderRadius:"8px" , border:"2px solid white" ,  color:"white", background:"black", fontWeight:"900"}} onChange={(e) => setLanguage(e.target.value)}>
                        <option style={{padding:"6px 30px"}} >en-US</option>
                        <option>ru-RU</option>
                    </select> */}
                   

<select onChange={(e) => setLanguage(e.target.value)} id="underline_select" class="block  w-[40px] text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
    <option>en-US</option>
    <option>ru-RU</option>
</select>


                        <div className="header--nav__inputs">
                             <input type="text" onChange={(e) => setValue(e.target.value)} />
                             <button onClick={() => nav(`/movieSearch/${value}`)}>search</button>
                      
                        </div>
                        <span style={{
                        }} onClick={() => setDark(!dark)}>
                   {
                        dark ? <a href="#"><CiDark /></a>  : <a href="#"><MdDarkMode /></a>
                    }
                        </span>
                </div>
            </div>
        </div>
    );
};

export default Header;