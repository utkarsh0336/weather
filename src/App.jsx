import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Users/Forms/Login";
import RegisterForm from "./components/Users/Forms/RegisterForm";
import WeatherApp from "./WeatherApp"
import Navbar from "./Navbar";
function App() {
  
  return (
    <BrowserRouter>
   <Navbar/>
      <Routes>
      
        <Route path="/" element={<WeatherApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        
    
      </Routes>
    </BrowserRouter>
  );
}

export default App
