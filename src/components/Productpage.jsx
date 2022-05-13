import {useEffect}from 'react'
import ProductSidebar from './Productsidebar'
import { useDispatch,useSelector } from 'react-redux'
import { setproducts } from '../redux/actions'
import { Stack,Rating} from '@mui/material'

import axios from 'axios'
import "./Home.css"
import {useNavigate} from "react-router-dom"

export const Productpage = () => {
    const dispatch=useDispatch()
    const store = useSelector((e)=>e.sortedData)
    const mainData = useSelector((e)=>e.product)
    const navigate=useNavigate()


    useEffect(()=>{
        axios.get("http://localhost:8080/products").then(({data})=>{
          dispatch(setproducts(data))       
        })
    },[])


  return (
      
       <>
    <div style={{
display:"flex"
    }}>
      <div style={{flex:"1",marginTop:"5%"}}>
      <ProductSidebar/>
      </div>

      <div className='cardiv'>
      

    <div className='griddiv'>
 {mainData.map((e)=>(
   <div className='productdiv' 
   style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",cursor:"pointer" }}
    key={e.id}
    onClick={()=> navigate(`/product/${e.id}`)}
    >
     <img src={e.image} alt="" style={{width:"100%",height:"150px",objectFit:"contain",display:"flex",justifyContent:"center",alignItems:"center"}} />
     <h3 style={{fontSize:"14px",paddingLeft:"10px", color:"black" }}>{e.title}</h3>
     <h4 style={{fontSize:"12px",paddingLeft:"10px"}}> Rs {e.price}</h4>
     <Stack spacing={2}>
            <Rating value={e.rating.rate} precision={0.5} size='large' style={{color: 'green'}}  />
        </Stack>
     


   </div>
 ))}


    </div>
      </div>
     
    </div>
   
     
    </>
      
    
  )
}