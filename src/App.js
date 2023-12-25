
import './css/App.css';
import Navbar from './navbar';
import Home from './Home';
import Categories from './categories';
import Favourite from './favourites';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Addfavourites from './add_favs';
import Help from './help';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route  path='/' element={<div className='home component'>
    <Categories/>
     <Home/> 
   </div>} />
   <Route path='/favourites' element={<Favourite/>} />
   <Route path="/add_favs" element={<Addfavourites/>}/>
   <Route path="/help" element={<Help/>}/>
    </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;
 