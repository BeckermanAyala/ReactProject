import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { useState } from "react";
import { addSum } from "../redux/actions/ProductsAction";
import Example from "../DetailsModal";
import logo from "../img/7.png"; 

export default function OurCollection() {


    
    const products = useSelector((state) => state.productReducer);
    const cart = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();

    const [staticModal, setStaticModal] = useState(false);
    const toggleOpen = () => setStaticModal(!staticModal);

    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "white"}}>
                <div className="row justify-content-center align-items-center text-light p-3 ">
                    <h1 className="text-center" style={{ color: "black" }}>Discover our products</h1>
                </div>

                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center mt-3">
                    {products ? products.map((item, index) => (
                        <div className="col">
                            <div className="card h-100 shadow">
                                <img className="card-img-top" src={item.img} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text" style={{ color: "black" }}>Price: {item.price} NIS | Amount: {item.amount}</p>
                                    <button className="btn btn-light text-dark btn-lg btn-block" onClick={() => { dispatch(addToCart(item)); dispatch(addSum(item.code)); }}>ADD TO CART</button> {/* Change button color and size */}
                                    <Example name={item.description} description="A package of 8 books and ten notebooks" code={item.code}></Example>
                                </div>
                            </div>
                        </div>
                    )) : <div className="text-center">Products are currently unavailable</div>}
                </div>
            </div>
        </>
    );
   }