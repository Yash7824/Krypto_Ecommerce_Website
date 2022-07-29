import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Products from "./Components/Products";


// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/products" element={<Products />} >
          </Route>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
