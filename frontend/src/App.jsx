import Navbar from './components/navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login.jsx';
import SignUp from './pages/signup.jsx';
import Profile from './pages/profile.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} /> {/* ✅ FIXED path */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
