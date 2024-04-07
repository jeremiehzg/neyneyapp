import { Home } from './screens/Home';
import './App.css';
import { Ressources } from './screens/Ressources';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Contact } from './screens/Contact';

function App() {
  return (
    <div className='container mt-10'>
      <header className='flex justify-between items-center mb-5'>
        <img className='w-20 rounded-full' src='images/Logo.jpg' alt='Logo de NeyNey'/>
        <nav className='flex justify-end'>
           <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/'>Accueil</NavLink>
           <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/ressources'>Ressources</NavLink>
           <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/contact'>Contact</NavLink>
         </nav>
      </header>
         <Routes>
           <Route path='/' element={ <Home/> } />
           <Route path='/ressources' element={ <Ressources/> } />
           <Route path='/contact' element={ <Contact/> } />
         </Routes>
    </div>
  );
}

export default App;
