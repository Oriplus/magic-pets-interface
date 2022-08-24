import { Route, Routes } from 'react-router-dom';
import './App.css';
import Pets from './views/pets';
import Layout from './layout';
import Home from './views/home';
import Mint from './views/mint';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pets" element={<Pets />}/>
        <Route path="/mint" element={<Mint />}/>
      </Routes>
    </Layout>
  );
}

export default App;
