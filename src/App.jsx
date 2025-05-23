import Navbar from './components/navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../src/pages/login.jsx'


const App=()=>{
    return (

      <div>
       

      <Router>
       
         <Routes>
            <Route path='/login' element={<Login/>}>

            </Route>
         </Routes>
      </Router>
      </div>
    )
}



export default App;