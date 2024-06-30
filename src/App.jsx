
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Events from "./Pages/Events";
import "bootstrap/dist/css/bootstrap.min.css";
import TransitionPage from "./Components/TransitionPage/TransitionPage";
import Footer from "./Components/Footer/Footer";
import EventDetailPage from "./Components/EventDetailPage/EventDetailPage";
import Login from "./Pages/Login/Login";
import Contacts from "./Pages/Contacts/Contacts"
import Profile from "./Components/Profile/Profile";
import SignUp from "./Pages/SignUp/SignUp";


function App() {


  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
    

      </Routes>
      <Footer />
    </>
  );
}

export default App;
