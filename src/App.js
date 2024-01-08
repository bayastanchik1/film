import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import TopRated from './components/TopRated';
import Popular from './components/Popular';
import MovieDetails from './Pages/MovieDetails';
import Actors from './components/Acors';
import Week from './components/Week';
import Search from './components/Search';
import { useContext } from 'react';
import { lenguageContext } from './components/context';

function App() {
  const {dark} = useContext(lenguageContext)
  return (
    <div className="App" style={{
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
      transition:".8s"
    }}>
        <Header/>
        <Routes>
          <Route path='/' element={ <Home/>  }/>
          <Route path='/popular'  element={ <Popular/> }/>
          <Route path='/ropRated' element={ <TopRated/> }/>
          <Route path='/MovieDetails/:id' element={ <MovieDetails/> }/>
          <Route path='/actors/:id' element={ <Actors/> }/>
          <Route path='/week' element={ <Week/> }/>
          <Route path='/movieSearch/:movieSearch' element={<Search/>}/>
        </Routes>

    </div>
  );
}

export default App;
