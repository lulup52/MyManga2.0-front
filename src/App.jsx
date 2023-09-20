import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "./components/Home"
import SerieListe from "./components/serieListe"
import TomeSerieListe from "./components/TomeSerieListe"
import NavBar from "./components/NavBar"
import NorifPopUp from "./components/NorifPopUp"
import CollectionUser from "./components/CollectionUser"
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     <Router>
      <NorifPopUp />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/serie" element={<SerieListe />} />
        <Route path="/serie/:id" element={<TomeSerieListe usage={"series"}/>} />
        <Route path="/collection_user/serie/:userId" element={<CollectionUser />} />
        <Route path="/collection_user/tome_serie/:userId/:serieId" element={<TomeSerieListe usage={"collection"}/>} />

      </Routes>
     </Router>
    </>
  )
}

export default App
