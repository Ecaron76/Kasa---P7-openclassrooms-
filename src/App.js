
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home'
import Error404 from './pages/404/404';
import Logements from './pages/Logements/Logements'
import Propos from './pages/Propos/Propos'



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/propos' element={<Propos />}/>
        <Route path='/logement/:id' element={<Logements />}/>
        <Route path='/*' element={<Error404 />}/>
      </Routes>
    </div>
  );
}

export default App;
