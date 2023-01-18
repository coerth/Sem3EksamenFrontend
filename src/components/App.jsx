import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom'
import '../styles/App.css'
import Header from "./Header"
import Footer from './Footer'
import Home from './Home'
import SignUp from './SignUp'
import DisplayWalker from './DisplayWalker'
import DisplayOwner from './DisplayOwner'
import DisplayDog from './DisplayDog'
import CreateDog from './CreateDog'
import Admin from './Admin'
import {useState, useEffect} from 'react'
import { ApiGet } from '../utils/apiFetcher'
import facade from "../utils/loginFacade";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const[dogs, setDogs] = useState()
  const[owners, setOwners] = useState()
  const[walkers, setWalkers] = useState()
  const[refresh, setrefresh] = useState(false)

  useEffect(() => {
    ApiGet("dog/", setDogs)
    ApiGet("owner/", setOwners)
    ApiGet("walker/", setWalkers)
}, [refresh])

const refreshData = () => {
  setrefresh(!refresh)
}


  return (
    <div className="App">
      
      <BrowserRouter basename='frontend'>
      <Header facade={facade} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
      <Routes>
        <Route path='/walker' element={facade.hasUserAccess("user", loggedIn) && <DisplayWalker walkers={walkers} setWalkers={setWalkers}/>} />
        <Route path='/owner' element={facade.hasUserAccess("user", loggedIn) && <DisplayOwner owners={owners} setOwners={setOwners}/>} />
        <Route path='/dog' element={facade.hasUserAccess("user", loggedIn) && <DisplayDog dogs={dogs} setdogs={setDogs} refreshData={refreshData}/>} />
        <Route path='/admin' element={facade.hasUserAccess("admin", loggedIn) && <Admin dogs={dogs} walkers={walkers} owners={owners} refreshData={refreshData}/>} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}


export default App
