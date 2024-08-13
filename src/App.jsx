import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Users/Forms/Login";
import RegisterForm from "./components/Users/Forms/RegisterForm";
import WeatherApp from "./WeatherApp"
import Navbar from "./Navbar";
import AuthRoute from "./components/AuthRoute/AuthRoute";
function App() {
  
  return (
    <BrowserRouter>
   <Navbar/>
      <Routes>
      
        <Route path="/" element={<AuthRoute><WeatherApp /></AuthRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        
    
      </Routes>
    </BrowserRouter>
  );
}

export default App
