import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import "./productdetail.css"
import { Stack,Rating, Typography, Button} from '@mui/material'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { selectedproduct } from '../redux/actions'



export const Productdetail = () => {
    const dispatch=useDispatch()
    const store=useSelector((e)=>e.selectedproduct)
    console.log(store)

    let {id} = useParams()

    useEffect(()=>{
       
        axios.get(`http://localhost:8080/products/${id}`).then(({data})=>{
            
            dispatch(selectedproduct(data))

        })
    },[])

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
            <Rating value={store.rating?.rate} precision={0.5} size='large' style={{color: 'green'}} />
        </Stack>
        {/* <h3 style={{color:"red", fontFamily:"sans-serif"}}> Free delivery from Masai</h3> */}
        <Typography variant="body1" sx={{lineHeight:"25px"}}>{store.description}
          </Typography>

          <Button variant='contained'
     sx={{bgcolor:'red',fontFamily:'sans-serif',marginTop:'20px',mb:'30px'}}
     onClick={()=>console.log("ash")}
     >Add to Cart</Button>
        </div>
        
    </div>
    
    </>
  )
}
