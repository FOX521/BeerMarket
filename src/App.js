import './App.scss';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className='body grid-container'>
      <Header/>
      <Content/> 
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
