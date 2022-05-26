import "./payment.css";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Modal } from "./modal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { navCart } from "../redux/actions";

export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const [data, setData] = useState([]);
  const [userDetail, setUserDetails] = useState({});
  console.log(userDetail, "user");
  const [modal, setModal] = useState(false);


  useEffect(() => {
    handleUserDetails();

    handleCartDetail();
  }, []);
  const handleCartDetail = () => {
    axios.get("https://my-json-server-masai.herokuapp.com/cartproduct").then(({ data }) => {
      const newData = data.map((product) => ({
        ...product,
        qty: 1,
      }));
      setData(newData);
    });
  };

  const handleUserDetails = () => {
    axios.get("https://my-json-server-masai.herokuapp.com/checkout").then(({ data }) => {
      setUserDetails(data);
    });
  };

  const handleRate = (id) => {
    axios.delete(`https://my-json-server-masai.herokuapp.com/cartproduct/${id}`).then((res) => {
      handleCartDetail();
    });
  };
  const handleChange = (id, e) => {
    dispatch(navCart());
    setData(
      data.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            qty: e.target.value,
          };
        }
        return product;
      })
    );
  };

  return (
    <>
    
      {modal && <Modal onClose={() => setModal(false)} />}
      <div className="container" >
        <div style={{ width: "50%" }}>
           <div className="Payment" style={{ marginTop: "20%", width: "50%" }}>
            <p style={{ fontSize:'30px' , fontWeight:'bold'}}>Your  Items</p>
            
          </div>
          <hr></hr> 
       
          <div className="order_detail">
          <hr></hr>
            {data.map((e) => (
              <div key={e.id}>
                <div className="product_name">
                  <select
                    name="Remove"
                    id="Remove"
                    onChange={(ev) => handleChange(e.id, ev)}
                  >
                    <option>Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                  <p style={{ fontWeight: "500" }}>{e.title}</p>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "20px",
                      color: "green",
                    }}
                  >
                    Rs {e.qty * Math.ceil(e.price)} -/-
                  </p>
                </div>
                <div className="dish_detail">
                  <img
                    src={e.image}
                    alt=""
                    style={{ width: "50%", height: "100%" }}
                  />
                  <p
                    style={{
                      margin: "0px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {e.category}
                  </p>
                  <button
                    onClick={() => handleRate(e.id)}
                    style={{
                      backgroundColor: "black",
                      border: "none",
                      outline: "none",
                      color: "white",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    Remove from cart
                  </button>
                  
                </div>
                <hr></hr>
              </div>
              
            ))}
          </div>
        </div>
       

        <div className="payment_detail" style={{ marginTop:'8%', marginRight: '20px' }} >
  
        <div className="offer_line">
           <p  style={{ fontSize:'30px', marginLeft:'60px'}}>Delivery Charges</p>
  
    </div>
       <hr></hr> 
          <div className="subtotal">
            <p  style={{ fontSize: "20px" }}>Subtotal</p>

            <p style={{ fontSize: "20px", marginLeft:'50%'}}>
            ₹{" "}
              {data.reduce((acc, curr) => {
                return acc + curr.qty * Math.ceil(+curr.price);
              }, 0)}
              .00 -/-
            </p>
            <br></br>
          </div>
     <hr></hr>
          <div className="subtotal">
            <p>Delivery Fee</p>
            <p style={{ fontSize: "20px" }}> ₹ 49.00-/-</p>
          </div>
          <div className="subtotal">
            <p> ₹ 100  Discount on 1st order</p>
            <p style={{ color: "red" }}> - ₹ 100.00-/-</p>
          </div>
       <br></br>
          <hr></hr>
          <div className="total">
            <p>Total</p>
            <p style={{ marginRight: "24px" }}>
            ₹{" "}
              {data.reduce((acc, curr) => {
                return acc + curr.qty * Math.ceil(+curr.price) - 100+49;
              }, 0)}{" "}
              -/-
            </p>
          </div>
          <hr></hr>

          <div className="payment_order">
          <button className="place_order" style={{width:'250px', marginBottom:'50px', marginTop:'10px'}}   onClick={()=>navigate("/checkout")}>Procced To Checkout</button>
    
          </div>
        </div>
</div>
    </>
  );
};