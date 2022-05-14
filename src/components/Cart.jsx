import "./payment.css"
import {Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio} from "@mui/material"
import {useState,useEffect} from "react"

import {useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import axios from "axios"
import {useNavigate} from "react-router-dom"




export const Cart=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()


    const userData=useSelector((e)=>e.logindata)


    const [data,setData]=useState([])

    
    const [rate,setRate]=useState(1)


    useEffect(()=>{ 
        handleCartDetail()
    },[])
    const handleCartDetail = ()=>{
        axios.get("http://localhost:8080/cartproduct").then(({data})=>{
            
            setData(data)
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
       
      <div className="order_detail"
      style={{marginTop: '50px'}} >
          <div className="item">
              <p style={{bgcolor:'red'}}>Your CartStore items</p>
          </div>
          {data.map((e)=>(
    <>
     <div className="dish_name" key={e.cart.id}>

</div>
<div className="dish_detail">
  <img src={e.cart.image} alt="" style={{width:"100%",height:"100%"}} />

  <select name="Remove" id="Remove" onChange={handleChange} >
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
<p style={{fontWeight:"500"}}>{e.cart.title}</p>

    <p style={{fontWeight:"500",fontSize:"20px",color:"green"}}>Rs {rate*Math.ceil(e.cart.price)} -/-</p>
  <p style={{margin:"0px", fontSize:"14px",fontWeight:"500"}}>{e.cart.category}</p>
  <button onClick={()=>handleRate(e.id)}  style={{backgroundColor:"black",border:"none",outline:"none", color:"white",padding:"10px",borderRadius:"5px"}}>Remove from cart</button>

</div>
    </>
    ))}

         
      </div>
      
       
      
        
           
           
      
       
      
            
 

    
        
</>
    )
}