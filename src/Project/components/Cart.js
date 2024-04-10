
import { useSelector } from "react-redux"
import { addToCart, deleteFromCart } from "../redux/actions/cartActions";
import { addSum,addQty } from "../redux/actions/ProductsAction";
import { useDispatch } from "react-redux";
import { useState } from "react";


export default function Cart(){
    const cart = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch()
    const [rend, setRend ]= useState(0)
return(
    <>
                <div className="container-fluid bg-light">
                <div className="row justify-content-center align-items-center bg-dark text-light "></div>
    <button></button>
      <br></br>
      <table class="table">

        <tr id="names">
        <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">price</th>
          <th scope="col">image</th>
          <th scope="col">amount</th>
          <th scope="col">add/decrease</th>
        </tr>

        <tbody>
        {cart ? cart.map((item, index) => (
            <>
            <tr key={item.code}>
            <td>{index + 1}</td>

            <td>{item.description}</td>
            <td>{item.price}</td>
            <td><img class="card-img-top" src={item.img} alt="Card image cap" style={{ width: "60px", height: "80px" }}></img></td>
            <td>{item.amount}</td>
            <td key={`actions-${item.code}`}>
            
            <p> {item.cart}</p>
            </td>
            <td >
                  <div id="plusminus">
                    <button id="button2" type="button" class="bg-secondary" onClick={() => { dispatch(addSum(item.code)); dispatch(addToCart(item)); setRend(rend+1)}} >+</button>

                    <p>   {item.cart}  </p>

                    <button id="button2" type="button" class="bg-secondary" onClick={() => { dispatch(deleteFromCart(item)); dispatch(addQty(item.code)); setRend(rend+1) }} >-</button>
                  </div>
                </td>

                </tr>
            </>
        )):<h1>"The cart is empty"</h1>}
        </tbody>
        </table>
        </div>
        </>
)
}