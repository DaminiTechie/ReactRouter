import { useState } from 'react'

import './App.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <Headers />
     <Footer />
     <Home />
     </>
  )
}

export default App
