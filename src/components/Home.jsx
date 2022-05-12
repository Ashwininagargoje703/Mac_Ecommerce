import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {useEffect} from 'react'
import axios from 'axios'
import Carousel from 'react-elastic-carousel'
import { Paper, Button } from '@mui/material'
import { setproducts } from '../redux/actions'
import Sidebar from './Sidebar';
import "./Home.css"
import { Stack,Rating} from '@mui/material'
import {useNavigate} from "react-router-dom"



export const Home = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

   const data=useSelector((e)=>e.product)
   

  useEffect(()=>{
    axios.get("http://localhost:8080/products?_limit=9").then(({data})=>{
     
      dispatch(setproducts(data))
    })
  },[])




  var items = [
    {
        name: "1",
        image:"https://img.freepik.com/free-vector/eid-al-fitr-mubarak-banner-template-sale-discount-best-offer_1302-18344.jpg",
        description: "offer1"
    },
    {
        name: "2",
        description: "offer2",
        image:"https://www.quantumcloud.com/wp/slider-hero/intro-offer.jpg",
    },
        {
          name: "3",
          description: "offer3",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-0MM7cnG6M9QQDNA553uDTJCwEaYaspdeA&usqp=CAU",
      },
      {
        name: "4",
        description: "offer4",
        image:"https://accesspressthemes.com/wp-content/uploads/2018/10/launch-offer.png",
    }
    
  ]

  



  return (
    
    <>
    <div style={{
display:"flex"
    }}>
      <div style={{flex:"1",marginTop:"5%"}}>
      <Sidebar/>
      </div>

      <div className='cardiv'>
      <Carousel className='carsdiv' >
      {items.map((e)=><div className='imgdiv'>
       <img src={e.image} alt="" /> 
        </div>
        )}
    </Carousel>

    <div className='griddiv'>
 {data.map((e)=>(
   <div className='productdiv' style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",cursor:"pointer"}} onClick={()=>navigate("/product")}>
    <img src={e.image} alt="" style={{width:"100%",height:"150px",objectFit:"contain",display:"flex",justifyContent:"center",alignItems:"center"}} />
     <h3 style={{fontSize:"14px",paddingLeft:"10px" }}>{e.title}</h3>
     <h4 style={{fontSize:"12px",paddingLeft:"10px"}}> Rs {e.price}</h4>
     <Stack spacing={2}>
            <Rating value={e.rating.rate} precision={0.5} size='large' style={{color: 'green'}} />
        </Stack>
   </div>
 ))}


    </div>
      </div>
     
    </div>
   
     
    </>
    
  )
}
