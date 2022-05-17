// import "./payment.css"
// import {Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio} from "@mui/material"
// import {useState,useEffect} from "react"
// import {Modal} from "./modal"
// import {useParams} from "react-router-dom"
// import {useDispatch,useSelector} from "react-redux"
// import axios from "axios"
// import {useNavigate} from "react-router-dom"




// export const Checkout=()=>{
//     const dispatch=useDispatch()
//     const navigate=useNavigate()


//     const userData=useSelector((e)=>e.logindata)


//     const [data,setData]=useState([])
//     const [userDetail,setUserDetails]=useState({})

//     const [modal,setModal]=useState(false)
//     const [rate,setRate]=useState(1)

//     useEffect(()=>{ 
//         handleUserDetails()

//         handleCartDetail()
//     },[])
//     const handleCartDetail = ()=>{
//         axios.get("http://localhost:8080/cart   product").then(({data})=>{
            
//             setData(data)
//             })
//     }
   
//     const handleUserDetails = ()=>{
//         axios.get("http://localhost:8080/checkout").then(({data})=>{
            
//             setUserDetails(data)
//             })
//     }

    
//     const handleRate=(id)=>{
        
//            axios.delete(`http://localhost:8080/cartproduct/${id}`)
//            .then((res)=>{
//             handleCartDetail()
//            })
           
        
//     }
//     const handleChange = (e)=>{
//         setRate(e.target.value)
//     }

//     return (
//         <>
//         { modal && <Modal onClose={() => setModal(false)}/>}
//         <div className="container">
            
            
           
//     <div style={{width:"50%"}}>
//         <div className="Payment" style={{marginTop:"10%"}}>
//         <p className="uber">YOUR</p>
//         <p className="eats">Items</p>
//         </div>
       
//         <div className="city">
//       <div style={{ lineHeight:"10px"}}>
        


// <p className="LA">{userDetail.input?.Name}</p>
//           <p className="LA">{userDetail.input?.Address}, {userDetail.input?.Pincode}</p>

        
     


//       </div>
//       </div>
//       <hr></hr>
    
//       {/* <div className="city" style={{marginTop:"10px"}}>
//           <div style={{lineHeight:"10px"}}>
//       <p className="LA">Meet at Door</p>
//       <p style={{marginLeft:"30px",color:"green",}}>Add delivery instructions</p>
//       </div>
//       </div>
//       <hr></hr>

//       <div className="delivery_Instruction">
      
//       <div className="delivery">
//           <p>Delivery Estimate</p>
//           <p>20-30 minutes</p>
//       </div>
//       <div style={{marginLeft:"30px"}}>
//       <Box>
//           <RadioGroup>
//               <div style={{lineHeight:"5px"}}>
//               <FormControlLabel control={<Radio  color="default"/>} label="Priority" value="priority" />
              
//               <p style={{paddingLeft:"30px",color:"grey"}}>Delivery directly to you</p>
//               <hr></hr>
//               </div>
//               <div>
//               <FormControlLabel control={<Radio color="default" />} label="Standard" value="Standard" />
//               <hr></hr>
//               </div>
//               <div>
//               <FormControlLabel control={<Radio  color="default"/>} label="Schedule" value="Schedule" />
//               <hr></hr>
//               </div>
//           </RadioGroup>
//       </Box>
//       </div>
//       </div>

//       <div className="Payment">
//           <p>Payment</p>
//       </div>
//       <div style={{marginLeft:"30px"}}>
//       <div className="method">
//           <p>Add Payment Method</p>
//           <button className="button" style={{marginLeft:"300px",marginTop:"10px"}} onClick={()=>{setModal(true)}}>Edit</button>
          
          
//       </div>
//       <hr></hr>
//       </div>
//       <div style={{marginLeft:"30px"}}>
//       <div className="method">
//           <p>Add Promo Code</p>
//           <button className="button" style={{marginLeft:"340px",marginTop:"10px"}}>Edit</button>    
//       </div>
//       <hr></hr>
//       </div> */}
//       <div className="order_detail">

          
        
//           {data.map((e)=>(
//     <>
//      {/* <div className="dish_name" key={e.cart.id}> */}



// {/* <select name="Remove" id="Remove" onChange={handleChange} >
// <option>Quantity</option>
//     <option value="1">1</option>
//     <option value="2">2</option>
//     <option value="3">3</option>
//     <option value="4">4</option>
//     <option value="5">5</option>
//     <option value="6">6</option>
//     <option value="7">7</option>
//     <option value="8">8</option>
    
// </select> */}
//     {/* <p style={{fontWeight:"500"}}>{e.cart.title}</p>
//     <p style={{fontWeight:"500",fontSize:"20px",color:"green"}}>Rs {rate*Math.ceil(e.cart.price)} -/-</p> */}
// {/* </div> */}
// {/* <div className="dish_detail">
//   <img src={e.cart.image} alt="" style={{width:"50%",height:"100%"}} />
//   <p style={{margin:"0px", fontSize:"14px",fontWeight:"500"}}>{e.cart.category}</p>
//   <button onClick={()=>handleRate(e.id)}  style={{backgroundColor:"black",border:"none",outline:"none", color:"white",padding:"10px",borderRadius:"5px"}}>Remove from cart</button>

// </div> */}
//     </>
//     ))}

         
//       </div>
      
//         </div>
//         {/* <div className="payment_detail">
//             <div className="payment_order">
//       <hr></hr>
//        </div>
//        <div className="offer_line">
//            <p>You're saving with a Rs 0 Delivery Fee until Apr 28</p>
//        </div>
//        <div className="subtotal">
//            <p>Subtotal</p>
         
//            <p style={{fontSize:"15px"}}>Rs {data.reduce((acc,curr)=>{
// return acc + rate*Math.ceil(+curr.cart.price)
//           },0)}.00 -/-</p>
//        </div>
//        {/* <div className="subtotal">
//            <p>Promotion</p>
//            <p style={{color:"green"}}> - Rs 39.00-/-</p>
//        </div> */}
//        {/* <div className="subtotal">
//            <p>Taxes & Fees</p>
//            <p style={{fontSize:"15px"}}>Rs 57.00-/-</p>
//        </div>
//        <div className="subtotal">
//            <p>Delivery Fee</p>
//            <p style={{fontSize:"15px"}}>Rs 49.00-/-</p>
//        </div> */}
//        {/* <div className="subtotal">
//            <p>CA driver benefits</p>
//            <p style={{fontSize:"15px"}}>Rs 29.00-/-</p>
//        </div> */}
       
//        {/* <div className="subtotal">
//            <p>Temporary fuel surcharge</p>
//            <p style={{fontSize:"15px"}}>Rs 19.00-/-</p>
//            </div> */}
//            {/* <div style={{width:"400px",marginLeft:"100px"}}>
//            <hr></hr>
//            </div>  */}
//        {/* <div className="total">
//           <p>Total</p>
//           <p style={{marginRight:"24px"}}>Rs {data.reduce((acc,curr)=>{
// return (rate*acc + Math.ceil(+curr.cart.price))+106/2
//           },0)} -/-</p>
//        </div> */}
//        {/* <hr></hr> */}
      
        
//        <button className="place_order" onClick={()=>navigate("/Checkout")}></button>
           
           
      
       
      
            
//         </div>



    
        
// </>
//     )
// }