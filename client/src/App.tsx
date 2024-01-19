import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/components/ui/theme-provider';
// import { Button } from "@/components/ui/button"
import { ModeToggle } from './components/ui/mode-toggle';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import './App.css';
import Register from './components/Register';
import Home from './components/Home';
import CreateBook from './components/CreateBook';

function App() {
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
            <Route path="/create" element={<CreateBook />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
