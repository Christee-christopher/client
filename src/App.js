
import './App.css';

import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Pages/HomeScreen';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Pages from './Pages/Pages';
import Collection from './Pages/Collection';
import Blog from './Pages/Blog';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
    
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path='/shop' element={<Shop/>} />
        
        <Route path='/collection' element={<Collection />} />
        <Route path='/pages' element={<Pages/>} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>

      <Footer />
     
    </div>
  );
}

export default App;
