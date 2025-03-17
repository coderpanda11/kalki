import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from  "./components/LandingPage";
import MainPage from "./pages/MainPage";
import './App.css';


function App(){
  return (
    <Router>
      <div className="App"> // comment
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/main" element={<MainPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
