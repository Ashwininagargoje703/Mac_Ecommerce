import "./payment.css"
import {Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio} from "@mui/material"
import {useState,useEffect} from "react"
// import {Modal} from "./modal"
import {useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import axios from "axios"
import {useNavigate} from "react-router-dom"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export const Cart=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()


    const userData=useSelector((e)=>e.logindata)


    const [data,setData]=useState([])
    const [userDetail,setUserDetails]=useState({})

    const [modal,setModal]=useState(false)
    const [rate,setRate]=useState(1)

    useEffect(()=>{ 
        handleUserDetails()

        handleCartDetail()
    },[])
    const handleCartDetail = ()=>{
        axios.get("http://localhost:8080/cartproduct").then(({data})=>{
            
            setData(data)
            })
    }
   
    const handleUserDetails = ()=>{
        axios.get("http://localhost:8080/checkout").then(({data})=>{
            
            setUserDetails(data)
            })
    }

    
    const handleRate=(id)=>{
        
           axios.delete(`http://localhost:8080/cartproduct/${id}`)
           .then((res)=>{
            handleCartDetail()
           })
           
        
    }
    const handleChange = (e)=>{
        setRate(e.target.value)
    }

    return (
        <>
        {/* { modal && <Modal onClose={() => setModal(false)}/>} */}
        <div className="container">
            
            
           
    <div style={{width:"50%"}}>
        <div className="Payment" style={{marginTop:"10%"}}>
        <h4 className="uber">Shopping Cart</h4>
     </div>
       <hr></hr>
        <div className="city">
      <div style={{ lineHeight:"10px"}}>
        
<p className="LA">{userDetail.input?.Name}</p>
          <p className="LA">{userDetail.input?.Address}, {userDetail.input?.Pincode}</p>

        
     


      </div>
      </div>
    
      <div className="order_detail">

        {data.map((e)=>(
    <>
     <div className="dish_name" key={e.cart.id}>



    <p style={{fontWeight:"500", fontSize:'20px'}}>{e.cart.title}</p>
    <p style={{fontWeight:"500",fontSize:"30px",color:"midnightblue"}}>Rs {rate*Math.ceil(e.cart.price)} -/-</p>
</div>
<div className="dish_detail">
  <img src={e.cart.image} alt="" style={{width:"100%",height:"100%"}} />
  <select name="Remove" id="Remove" onChange={handleChange} >
<option style={{color:'blue'}}>Quantity</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    
</select>

  <p style={{margin:"0px", fontSize:"25px",fontWeight:"500"}}>{e.cart.category}</p>
  <br></br>
  
  <button onClick={()=>handleRate(e.id)}  style={{backgroundColor:"black",border:"none",outline:"none", color:"white",padding:"10px",borderRadius:"5px"}}>Remove from cart</button>

</div>
<hr></hr>
    </>

    ))}

         
      </div>
      
        </div>
        <div className="payment_detail" style={{width:'30%', backgroundColor:'black', color:'white', marginTop:'30px', marginLeft:'8%'}}>
            <div className="payment_order" style={{marginTop:'50px'}} >

       </div>
       <div className="offer_line">
           <p  style={{ fontSize:'30px'}}>Free Delivery</p>
  
    </div>
       <hr></hr> 
       <div className="subtotal">
             <p>Subtotal</p>
         
           <p style={{ marginRight:"100px"}}>Rs {data.reduce((acc,curr)=>{
return (rate*acc + Math.ceil(+curr.cart.price))
          },0)}.00 -/-</p>
       </div>
       
       <div className="total">
          <p>Total</p>
          <p style={{marginRight:"100px"}}>Rs {data.reduce((acc,curr)=>{
return (rate*acc + Math.ceil(+curr.cart.price))
          },0)}.00 -/-</p>
       </div>
       <hr></hr>

       <Link to="/">
                  <span style={{width:'200px',height:'100px',color:'whitesmoke', marginTop:'50px'}}>
                    <ArrowBackIcon />
                    Continue Shopping
                  </span>
                </Link>
s
       <button className="place_order" style={{width:'200px', marginLeft:'200px',marginBottom: '25px'}}   onClick={()=>navigate("/Payment")}>Procced To Payment</button>
           
     

      </div>
            
        </div>




    
        
</>
    )
}