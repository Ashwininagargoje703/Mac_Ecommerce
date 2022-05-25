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

export const CardPayment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((e) => e.logindata);

  const [data, setData] = useState([]);
  const [userDetail, setUserDetails] = useState({});
  console.log(userDetail, "user");
  const [modal, setModal] = useState(false);
  // const [rate,setRate]=useState(1)

  useEffect(() => {
    handleUserDetails();

    handleCartDetail();
  }, []);
  const handleCartDetail = () => {
    axios.get("https://ecommerce-masai.herokuapp.com/cartproduct").then(({ data }) => {
      const newData = data.map((product) => ({
        ...product,
        qty: 1,
      }));
      setData(newData);
    });
  };

  const handleUserDetails = () => {
    axios.get("https://ecommerce-masai.herokuapp.com/checkout").then(({ data }) => {
      setUserDetails(data);
    });
  };

  const handleRate = (id) => {
    axios.delete(`https://ecommerce-masai.herokuapp.com/cartproduct/${id}`).then((res) => {
      handleCartDetail();
    });
  };
  const handleChange = (id, e) => {
    dispatch(navCart());
    setData(
      data.map((product) => {
        if (product._id === id) {
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
      <div className="container">
        <div style={{ width: "50%" }}>
          <div className="Payment" style={{ marginTop: "10%" }}>
            <p className="masai">Masai</p>
            <p className="storee">Store</p>
          </div>

          <div className="accordion">
            <div style={{ lineHeight: "10px", bgcolour:"green" }}>
              <p className="userrr">
                {" "}
                {userDetail[userDetail.length - 1]?.name}
              </p>
              <p className="userrr">
                {" "}
                {userDetail[userDetail.length - 1]?.Address}
                </p>
                <p className="userrr">
                {" "}
                {userDetail[userDetail.length - 1]?.pincode}
              </p>
            </div>
          </div>
          <hr></hr>

          <div className="city" style={{ marginTop: "10px" }}>
            <div style={{ lineHeight: "10px" }}>
              <p className="userrr">Meet at Door</p>
              <p style={{ marginLeft: "30px", color: "green" }}>
                Add delivery instructions
              </p>
            </div>
          </div>
          <hr></hr>

          <div className="Payment">
            <p>Payment</p>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <div className="method">
              <p>Add Payment Method</p>
              <button
                className="button"
                style={{ marginLeft: "300px", marginTop: "10px" }}
                onClick={() => {
                  setModal(true);
                }}
              >
                Edit
              </button>
            </div>
            <hr></hr>
          
            <hr></hr>
          </div>
       
 
          </div>
        </div>
      
       
          

      
    </>
  );
};