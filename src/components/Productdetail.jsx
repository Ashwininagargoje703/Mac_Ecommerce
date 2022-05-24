import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import "./productdetail.css"
import { Stack,Rating, Typography, Button} from '@mui/material'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { selectedproduct } from '../redux/actions'
import {useNavigate} from "react-router-dom"



export const Productdetail = () => {
    const dispatch=useDispatch()
    const store=useSelector((e)=>e.selectedproduct)
    const navigate=useNavigate()
    const [cart,setCart]=useState({})
    console.log("cart ",cart)

    let {id} = useParams()

    useEffect(()=>{
       
        axios.get(`https://my-json-server-masai.herokuapp.com/products/${id}`).then(({data})=>{
            
            dispatch(selectedproduct(data))
            setCart(data)

        })
    },[])
    const handlesubmit=()=>{
        axios.post("https://my-json-server-masai.herokuapp.com/cartproduct",{cart}).then(({data})=>{
            navigate("/cart")
        })
    }

  return (
    <>
    <div className="productcontainer">
        <div className='product_image'>
            <img src={store.image} alt="product" />
        </div>
        <div className='product_detail'>
            <h3>{store.title}</h3>
            <h4 style={{padding:"0px"}}>{store.category}</h4>
            <h3>Rs {store.price} -/-</h3>
            <Stack spacing={2}>
            <Rating value={store.rating?.rate} precision={0.5} size='small' style={{color: 'green'}}  />
        </Stack>
        <Typography variant="body1" sx={{lineHeight:"25px"}}>{store.description}
          </Typography>

          <Button variant='contained'
     sx={{bgcolor:'black',fontFamily:'sans-serif',marginTop:'20px',mb:'30px'}}
     onClick={handlesubmit}
     >Add to Cart</Button>
        </div>
        
    </div>
    
    </>
  )
}