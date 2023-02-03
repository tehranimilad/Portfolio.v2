import './App.css';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/Projects';
import LearnMore from './pages/LearnMore';
import Nav from './components/nav';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/learnmore" element={<LearnMore />} />
      </Routes>
    </>
  );
}

export default App;
