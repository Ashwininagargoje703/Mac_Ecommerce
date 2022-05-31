import { useEffect } from "react";
import ProductSidebar from "./Productsidebar";
import { useDispatch, useSelector } from "react-redux";
import { setproducts } from "../redux/actions";
import { Stack, Rating } from "@mui/material";

import axios from "axios";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export const Productpage = () => {
  const dispatch = useDispatch();
  const store = useSelector((e) => e.MasaiReducer.sortedData);
  const mainData = useSelector((e) => e.MasaiReducer.product);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://my-json-server-masai.herokuapp.com/products").then(({ data }) => {
      dispatch(setproducts(data));
    });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ flex: "1", marginTop: "5%" }}>
          <ProductSidebar />
        </div>

        <div className="cardiv">
          <div className="griddiv">
            {mainData.map((e) => (
              <div
                className="productdiv"
                style={{
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  cursor: "pointer",
                }}
                key={e.id}
                onClick={() => navigate(`/product/${e.id}`)}
              >
                <img
                  src={e.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "contain",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <br></br>
                <h3 style={{ fontSize: "14px", paddingLeft: "10px" }}>
                  {e.title}
                </h3>
                <br></br>
                <h4 style={{ fontSize: "12px", paddingLeft: "10px" }}>
                  {" "}
                  Rs {e.price}
                </h4>
                <br></br>
                <Stack spacing={2}>
                <Rating value={e.rating.rate} precision={0.5} size='large' style={{color: 'green'}}   />
                </Stack>
  
                <p style={{ color: "red", paddingLeft: "10px" }}>
                ₹ 100 Off on 1st Order
                </p>
                {/* <button style={{ width:"100px", height:'30px',
  backgroundColor:'black',marginBottom:'20px', marginLeft:'20px', color:'whitesmoke' }}>See Details</button> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
