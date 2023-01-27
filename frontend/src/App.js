import './App.css';
import HomePage from './pages/HomePage';
import Nav from './components/nav';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <HomePage />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/learnmore" element={<LearnMore />} /> */}
      </Routes>
    </>
  );
}

export default App;
