import { useState } from 'react'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    {/* <LoadingScreen /> i dont intend to use this */
    }
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Home/>
    <About/>
  </>
}

export default App
