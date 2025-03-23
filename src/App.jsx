import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import CreateAccount from './Components/SignUp';
import UserDropdown from './Components/UserDropdown';
import CartPage from './Components/CartPage';
import HelloPage from './Components/HelloPage';
import SavedProductPage from './Components/SavedProductPage';
import SignUp from './dashboard/authentication/SignUp';
import SignIn from './Components/SignIn'
import Login from './dashboard/authentication/Login';
  import Dashboard from './dashboard/pages/Dashboard';
import User from './dashboard/pages/User';
import Productpage from './dashboard/pages/Productpage';
import CategoriesPage from './dashboard/pages/CategoriesPage';
import ProductSuccess from './dashboard/pages/ProductSuccess';
import Cart from './Components/Cart';




export const App = () => {
  return (
    <Router>
      <Routes>
        < Route path="/" element={<Home/>} />
        <Route  element={<UserDropdown/>} />
        <Route path="/register" element={<CreateAccount/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/hello" element={<HelloPage />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/saved-product/:id" element={<SavedProductPage/>} />  
        <Route path="/Adminsignin" element={<SignUp/>} />  
        <Route path="/Adminlogin" element={<Login/>} /> 
        <Route path='/AdminDash' element={<Dashboard/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/Product' element={<Productpage/>}/>
        <Route path='/CategoriesPage' element={<CategoriesPage/>}/>
        <Route path='/ProductSuccess' element={<ProductSuccess/>}/>
      </Routes>
    </Router>
  )
};

export default App;
