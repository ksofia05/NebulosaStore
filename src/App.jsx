import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Inicio from './pages/inicio';
import Productos from './pages/productos';
import Pasarela from './pages/pasarela';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/pasarela" element={<Pasarela />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

