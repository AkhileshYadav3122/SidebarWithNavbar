import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Alltemplate.jsx';
import InstantTrans from './pages/InstantTrans.jsx';
import TranslatFile from './pages/TranslatFile.jsx';
import WriteWithAi from './pages/WriteWithAi.jsx';
import Speech from './pages/Speech';
import ToolKit from './pages/ToolKit.jsx';

const App = () => {
  return (
   
    <BrowserRouter>
   
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/InstantTrans" element={<InstantTrans />} />
          <Route path="/TranslatFile" element={<TranslatFile />} />
          <Route path="/WriteWithAi" element={<WriteWithAi />} />
          <Route path="/Speech" element={<Speech />} />
          <Route path="/ToolKit" element={<ToolKit/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;