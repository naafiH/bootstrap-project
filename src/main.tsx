import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/header'
import './index.css'
import Home from "./components/HomeSection/home"
import About from "./components/about/about"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
  </React.StrictMode>,
)
