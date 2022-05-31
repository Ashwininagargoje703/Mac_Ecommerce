import "./debitcard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export const Debit = ({ onClose }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
      card_no:"",
      cvv:"",
      date:""

  });

  console.log(data, "carddata");
  const handlechange = (e) => {
    const { id, value } = e.target;

    setData({
      ...data,
      [id]: value,
    });
  };
  const handlesubmit = () => {
      axios.post("https://my-json-server-masai.herokuapp.com/payment",{data}).then(({data})=>{
        alert("Your credentials are Saved Now you can placed your order");
      }).catch((e)=>{
          console.log(e)
      })
    
  };

  return (
    <div className="fullbox" onClick={(e) => e.stopPropagation()}>
      <div className="input">
        <input
          type="number"
          id="card_no"
          placeholder="Enter card number"
          onChange={handlechange}
          value={data.card_no}
        />
        <input
          type="number"
          id="cvv"
          placeholder="Enter CVV"
          onChange={handlechange}
          value={data.cvv}
        />
        <input
          type="date"
          id="date"
          onChange={handlechange}
          value={data.date}
        />
        <button className="succes_button" onClick={()=>navigate("/orderdone")}>
          Pay
        </button>
      </div>
    </div>
  );
};
