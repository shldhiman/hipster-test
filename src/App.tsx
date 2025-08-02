import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/pages/home'
import About from './components/pages/about'

function App() {

  return (

    <Routes>
      <Route element={<Layout />}>
        <Route index path='/' element={<Home />}></Route>
        <Route index path='/about' element={<About />}></Route>
      </Route>
    </Routes>
  )
}

export default App
