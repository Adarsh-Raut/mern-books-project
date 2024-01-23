import { ThemeProvider } from '@/components/ui/theme-provider';
import { ModeToggle } from './components/ui/mode-toggle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';
import Register from './components/Register';
import Home from './components/Home';
import CreateBook from './components/CreateBook';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Navbar />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<CreateBook />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{ style: { background: '#363636', color: '#fff' } }}
      />
    </>
  );
}

export default App;
