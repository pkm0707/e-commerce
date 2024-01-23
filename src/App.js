import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Error } from './components/Error';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
