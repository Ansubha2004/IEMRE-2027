import "./App.css";
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Navbar2 from "./components/Navbar2.jsx";
import Home from "./pages/Home.jsx";
import Headline from "./components/Headline.jsx"
import Headline2 from "./components/Headline2.jsx";
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx";
import Keydates from "./pages/Keydates.jsx";
import Publication from "./pages/Publication.jsx";
import Submission from "./pages/Submission.jsx";
import Registrations from "./pages/Registrations.jsx"
import Committee from "./pages/Committee.jsx";
import Papercalls from "./pages/Papercalls.jsx"
import Past from "./pages/Past.jsx"

function App() {
  return (
    <div className="relative w-screen h-screen min-h-screen overflow-x-hidden">
      <div className="sticky top-0 z-[4]">
        <Navbar />
        <Navbar2 />
        </div>
        <main className="relative w-full h-auto">
          <Home/>
          <Headline/>
          <About/>
          <Keydates/>
          <Papercalls/>
          <Publication/>
          <Headline2/>
          <Submission/>
          <Registrations />
          <Committee/>
          <Past/>
          <Contact/>
          
        </main>
      
    </div>
  );
}

export default App;
