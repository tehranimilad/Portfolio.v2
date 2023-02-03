import './App.css';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/Projects';
import LearnMore from './pages/LearnMore';
import Nav from './components/nav';
const express = require('express')
const app = express();

const path = require('path')
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

app. listen(port, (err) => {
  if(err) return console.log(err);
  console.log("server listening on port: ", port);
})

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
