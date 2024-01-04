  import {} from 'react'
import "./sass/style.scss";
import {Navbar} from "./sections/navbar/Navbar";
import {Hero} from "./sections/hero/Hero";
import {Features} from "./sections/features/Features";
import {Footer} from "./sections/footer/Footer";





export function App() {
  
   return (
     <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
   )
 }

 export default App
