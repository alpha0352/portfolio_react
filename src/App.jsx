import { useState } from 'react'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    {/* <LoadingScreen /> i dont intend to use this */
    }
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  </>
}

export default App
