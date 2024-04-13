import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Topbar } from './components/Topbar';
import { Contact } from './screens/Contact';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
function App() {
  return (
    <div className='container mt-10'>
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ressources' element={<Ressources />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
