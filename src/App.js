import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Beer from './components/Beer';
import Sydr from './components/Sydr';
import Snacks from './components/Snacks';
import Ale from './components/Ale';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path={'/'} render={()=> <Home/>}/>
      <Route path={'/beer'} render={()=> <Beer/>}/>
      <Route path={'/ale'} render={()=> <Ale/>}/>            
      <Route path={'/sydr'} render={()=> <Sydr/>}/>
      <Route path={'/snacks'} render={()=> <Snacks/>}/>
    </BrowserRouter>
  );
}

export default App;
