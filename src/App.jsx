
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home.jsx"
import Features from "./routes/Features.jsx"
import About from "./routes/About.jsx"
import Pricing from "./routes/Pricing.jsx"
import Contact from "./routes/Contact.jsx"
import Signin from "./routes/Signin.jsx"



function App() {
  

  return (
    <div className="App">
     
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/feature" element={<Features/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signin" element={<Signin/>}/>


      </Routes>
         
     
      
      
    </div>
  )
}

export default App
