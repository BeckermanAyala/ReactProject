import { useEffect } from "react";
import { useSelector } from "react-redux";
export default function Payment(){
    useEffect(() => {
        alert("are you shure do you want to pay?")
    },[])

    const cart = useSelector((state) => state.cartReducer)
    let count =0;
    cart.forEach(item => {
        count+=(item.amount) * (item.price)
        
    });

    return(
        <> 
        
             <div className="container-fluid bg-light">
                <div className="row justify-content-center align-items-center bg-dark text-light"></div>
        <table class="table">
                 <tr id="names">
                  <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">price</th>
                 <th scope="col">image</th>
                <th scope="col">amount</th>

        </tr>
        <tbody>

        {cart? cart.map((item, index) => (
            <>
                      <tr key={item.code}></tr>
                      <td>{index + 1}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td><img class="card-img-top" src={item.img} alt="Card image cap" style={{ width: "60px", height: "80px" }}></img></td>
                      <td>{item.amount} </td>
                      <td key={`actions-${item.code}`} >  <p> {item.cart}</p></td>
                     
                      </>
        )) : <h1>uy</h1>}
        <h1 style={{color: "black" , center: "center"}}>totalSum: {count}</h1>

        <button  className="btn btn-dark" >Pay</button>
         </tbody>
         </table>
        </div>
        </>
    )
}