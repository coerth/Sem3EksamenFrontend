import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../styles/App.css'
import Header from "./Header"
import Footer from './Footer'
import Home from './Home'
import SignUp from './SignUp'
import DisplayWalker from './DisplayWalker'
import DisplayOwner from './DisplayOwner'


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter basename='frontend'>
      <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>

      
      <Routes>
        <Route path='/walker' element={<DisplayWalker/>} />
        <Route path='/owner' element={<DisplayOwner/>} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
