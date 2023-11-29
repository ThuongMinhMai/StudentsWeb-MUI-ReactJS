import "./App.css";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Detail from "./components/Detail";
import AddStudent from "./components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/addNewStudent" element={<AddStudent />}></Route>
        <Route path="/updateStudent/:id" element={<UpdateStudent />}></Route>


      </Routes>
    </div>
  );
}

export default App;
