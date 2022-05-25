import { bgcolor } from "@mui/system";
import {useNavigate} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export const OrderPlaced = ()=>{
     const navigate=useNavigate()

    return(
         <div style={{marginTop: '150px', marginLeft: '35%'}}>
              <p style={{fontSize:'20px'}}>Thank You For Shopping Your Order Delivered Soon</p>
             
              <img style={{height:'200px', width:"200px"}}src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/media/90211520c82920dcaf6aea7604aeb029.gif" alt="" onClick={()=>navigate("/#home")}/>
             <br></br>
              <Link to="/">
                  <span style={{width:'200px',height:'100px',color:'green', marginBottom:'100px', marginLeft:'110px' }}>
                    <ArrowBackIcon />
                    Continue Shopping
                  </span>
                </Link>
         </div>
        
    )
}