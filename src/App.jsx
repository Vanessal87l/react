import './App.css'
import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import Navbar from "./navbar/navbar.jsx";
function Home(){
  return (
      <div>

          <h1 className="text-xl text-blue-400">Salom bu bow sahifa</h1>
          <div  className="flex gap-10">
          <Link to="/contact" className="text-amber-300 text-xl">Aloqa sahifasiga otiw </Link>
          <Link to="/about" className="text-yellow-700 text-xl">Biz haqimizda sahifaga otiw</Link> </div>

      </div>

  )
}

function About(){

  return <h1 className="text-xl">Bu biz haqimizda sahifa</h1>
}
function Contact(){
  return <h1 className="text-xl">Contact:+998889988899</h1>
}
function Services(){
  return <h1 className="text-xl">24/7  iwlidi</h1>
}

function NotFound(){
  return <> <h1 className="text-4xl text-red-600">404 sahifa topilmadi!</h1>
</>
}

export default function  App(){
  return (
      <BrowserRouter>
          <Navbar/>
        <nav className="flex gap-10">
          <Link  to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
        </nav>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
  );
}

