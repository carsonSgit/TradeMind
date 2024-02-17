import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from './pages/Analytics';
import About from './pages/About';
import DesignDocument from './pages/DesignDocument';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="analytics" element={<Analytics />}/>
          <Route path="about" element={<About />}/>
          <Route path="designdocument" element={<DesignDocument />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
