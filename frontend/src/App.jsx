import "./App.css";
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Navbar2 from "./components/Navbar2.jsx";
import Home from "./pages/Home.jsx";


function App() {
  return (
    <div className="relative w-screen h-screen min-h-screen overflow-x-hidden">
      <div className="sticky">
        <Navbar />
        <Navbar2 />
        <main className="relative w-full h-auto">
          <Home/>
        </main>
      </div>
    </div>
  );
}

export default App;
