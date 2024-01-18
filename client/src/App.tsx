import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/components/ui/theme-provider';
// import { Button } from "@/components/ui/button"
import { ModeToggle } from './components/ui/mode-toggle';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import './App.css';
import Register from './components/Register';
import Home from './components/Home';

function App() {
  const [data, setData] = useState('');
  async function getData() {
    const response = await fetch('http://localhost:5000');
    const responseData = await response.json();
    // console.log(typeof responseData)
    setData(responseData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="p-1 flex justify-end">
            <ModeToggle />
          </div>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
