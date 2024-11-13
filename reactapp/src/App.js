import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Registration from './component/Registration';
import { BrowserRouter, Route, Routes } from "react-router-dom";  // dynamic BrowserRouter

function App() {
  return (
    // <Login/>
    <>
      <BrowserRouter>
        <Routes>   {/* completely browser dependent */}
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

