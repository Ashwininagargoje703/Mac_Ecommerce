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
    axios.get("https://ecommerce-masai.herokuapp.com/checkout").then(({ data }) => {
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
      <div className="container1" style={{marginLeft:"30%" }}>
        <div>
          <div className="Payment" style={{ marginTop: "20%" }}>
            <p className="del" style={{fontWeight:'bolder', fontSize:'30px'}}>Deliverd to this address</p>
           <br></br>
     </div>
     <hr></hr>

          <div className="accordion">
  
            <div style={{ lineHeight: "10px" }}>
              <p className="userrr">
                {"NAME:             "}
                {userDetail[userDetail.length - 1]?.name}
              </p>
              <br></br>
              <br></br>
              <p className="userrr">
                {"ADDRESS:                "}
                {userDetail[userDetail.length - 1]?.Address}
                </p>
                <br></br>
                <br></br>
                <p className="userrr">
                {"PINCODE:                "}
                {userDetail[userDetail.length - 1]?.pincode}
              </p>
              <br></br>
              <br></br>
            </div>
          </div>
          <hr></hr>
          <div className="city" style={{ marginTop: "10px" }}>
            <div style={{ lineHeight: "50px" }}>
              <p className="userrr">Meet at Door</p>
              <p style={{ marginLeft: "30px", color: "green" }}>
                Add delivery instructions
              </p>
            </div>
          </div>
          <hr></hr>

          <div className="delivery_Instruction">
            <div className="delivery">
              <p>Delivery Estimate</p>
              <p>20-30 minutes</p>
            </div>
            <div style={{ marginLeft: "30px" }}>
              <Box>
                <RadioGroup>
                  <div style={{ lineHeight: "5px" }}>
                    <FormControlLabel
                      control={<Radio color="default" />}
                      label="Priority"
                      value="priority"
                    />

                    <p style={{ paddingLeft: "30px", color: "grey" }}>
                      Delivery directly to you
                    </p>
                  
                  </div>
                  <div>
                    <FormControlLabel
                      control={<Radio color="default" />}
                      label="Standard"
                      value="Standard"
                    />
                
                  </div>
                  <div>
                    <FormControlLabel
                      control={<Radio color="default" />}
                      label="Schedule"
                      value="Schedule"
                    />
                    
                  </div>
                </RadioGroup>
              </Box>
            </div>
          </div>

          <hr></hr>
{/*           
           <div className="Payment">
            <p>Payment</p>
          </div>  */}
{/*           
          <div style={{ marginLeft: "30px" }}> */}
            <div className="method" style={{backgroundColor:'whitesmoke',}}>
              <p>Add Payment Method</p>
              <button
                className="button"
                style={{ marginLeft: "300px", marginTop: "10px", backgroundColor:"black", color:'white', width:'100px'}}
                onClick={() => {
                  setModal(true);
                }}
              >
                PAY
              </button>
            </div>
            <hr></hr>
          
          
          </div>
       
 
          </div>
          
        {/* </div> */}
      
       
          

      
    </>
  );
};