import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App=()=>{

  
  const [mode, setmode] = useState('light')
  const [progress, setProgress] = useState(0)

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark' );
      document.body.style.background = 'black';
    } else {
      setmode('light' );
      document.body.style.background = 'white';
    }
  }

  const pagesize = 15;
  const apiKey=process.env.REACT_APP_NEWS_API

  

    return (
      <div>
        <BrowserRouter>
          <NavBar toggle={toggleMode} mode={mode} />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" mode={mode} pagesize={pagesize} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" mode={mode} pagesize={pagesize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" mode={mode} pagesize={pagesize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" mode={mode} pagesize={pagesize} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" mode={mode} pagesize={pagesize} country="in" category="health" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" mode={mode} pagesize={pagesize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" mode={mode} pagesize={pagesize} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

export default App;