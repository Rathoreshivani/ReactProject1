import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Registration from './component/Registration';
import { BrowserRouter,Router,Route, Routes } from "react-router-dom";  //dynamic browserrouter
function App() {
  return (
   // <Login/>
   <>
   <BrowserRouter>
        <Routes>   //completely broweser per depend he
        <Route path='/Login' element={<Login/>} />
          <Route path='/Registration' element={<Registration/>} />
        </Routes>
        </BrowserRouter>
    </>
    
  );
}

export default App;
