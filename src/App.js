import Home from "./components/Home";
import Users from "./components/Users";
import ViewUser from "./components/ViewUser";
import SelectUser from "./components/SelectUser"
import TransferMoney from "./components/TransferMoney";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/users" element={<Users/>}/>
        <Route exact path="/view" element={<ViewUser/>}/>
        <Route exact path="/selectuser" element={<SelectUser/>}/>
        <Route exact path="/transfer" element={<TransferMoney/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
