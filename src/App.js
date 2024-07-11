import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Headers from './components/Headers';
import CartDetails from './components/CartDetails'; 

const App = () => {
  return (<Router>
    <Headers />
   <Routes>
    <Route path='/Add-to-Cart' element={<Home />} />
    <Route path='/cart' element={<CartDetails />} />
    </Routes>
    </Router>
  );
}

export default App;