import { useEffect, useState } from 'react'
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Button } from "@/components/ui/button"
import { ModeToggle } from './components/ui/mode-toggle'
import './App.css'
import Register from './components/Register'


function App() {
  const [data, setData] = useState('')
  async function getData() {
    const response = await fetch("http://localhost:5000")
    const responseData = await response.json()
    // console.log(typeof responseData)
    setData(responseData)
    
  }

  useEffect(() => {
 getData()

  })

  return (
    <div className='flex items-center justify-center'>
      <Register />
    </div>
  )
}

export default App
