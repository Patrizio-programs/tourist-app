import './App.css';
import Header from './header';
import Nav from './nav';
import Footer from './footer';
import { Routes, Route } from "react-router-dom";
import About from './about';
import Home from './home';
import Contact from './contact';
import Booking from './booking';


function App() {

  return (
    <div className="App">

      <Header />
      <Nav />
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/About" element ={<About />}/>
        <Route path="/Contact" element ={<Contact />}/>
        <Route path="/Booking" element ={<Booking />}/>


        
      </Routes>
    
      
    <br/>
    <br/>

      <Footer />

    </div>
  );
}

export default App;
