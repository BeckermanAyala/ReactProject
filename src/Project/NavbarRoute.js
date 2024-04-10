import React from "react";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import About from "./components/About";
import Payment from "./components/Payment";
import OurCollection from "./components/OurCollection";
import { Link,Route, Routes, BrowserRouter } from "react-router-dom";

function NavbarRoute(){
    return(
        <>
        <BrowserRouter>
        <div id="navigate" class="btn-group btn-group-lg" role="group" aria-label="...">
            <div class="link"  > <Link to="/HomePage"> <button style={{height: "70px" , width: "150" , fontSize: "20px"}} class="btn btn-light">Home</button></Link></div>
            <div class="link"  > <Link to="/OurCollection"> <button style={{height: "70px" , width: "150" , fontSize: "20px"}} class="btn btn-light">Our Collection</button></Link></div>
            <div class="link"><Link to="/About"> <button style={{height: "70px" , width: "150" , fontSize: "20px"}} class="btn btn-light"  >About </button ></Link></div>
            <div class="link"><Link to="/Cart"> <button  style={{height: "70px" , width: "150" , fontSize: "20px"}} class="btn btn-light">Cart</button></Link></div>
            <div class="link"><Link to="/Payment"> <button  style={{height: "70px" , width: "150px" , fontSize: "20px"}} class="btn btn-light">Payment</button></Link></div>
           
          </div>
          <Routes>
            <Route path="/HomePage" element={<HomePage></HomePage>} />
            <Route path="/OurCollection" element={<OurCollection></OurCollection>}></Route>
            <Route path="/About" element={<About></About>}/>
            <Route path="/Cart" element={<Cart></Cart>} />
            <Route path="/Payment" element={<Payment></Payment>} />

          </Routes>
          
        </BrowserRouter>
        
        </>
    )
}
export default NavbarRoute;