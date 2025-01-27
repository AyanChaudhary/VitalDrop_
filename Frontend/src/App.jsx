
import React from 'react';

import {Route,Routes} from "react-router-dom";
import Home from "./routes/Home";
import Login from './routes/Login';
import Signup from "./routes/Signup";
import Admin from './routes/Admin';
import Search from './routes/Search';
import User from "./routes/User";
import CreateCenter from "./routes/CreateCenter"
import AdminUser from "./routes/AdminUser"
function App() {
    return (
      <div >
          <Routes>
              <Route path="/" element ={<Home/>}/>
              <Route path="/login" element ={<Login/>}/>
              <Route path="/login/signup" element ={<Signup/>}/>
              <Route path="/search" element ={<Search/>}/>
              <Route path="/adminlogin" element ={<Admin/>}/>
              <Route path="/adminlogin/adminsignup" element ={<CreateCenter/>}/>
              <Route path="/login/user" element ={<User/>}/>
              <Route path="/adminlogin/adminuser" element ={<AdminUser/>}/>
              
          </Routes>
      </div>
    );
  }
  
  export default App;