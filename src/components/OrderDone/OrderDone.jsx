import { bgcolor } from "@mui/system";
import {useNavigate} from "react-router-dom";

export const OrderPlaced = ()=>{
     const navigate=useNavigate()

    return(
         <div style={{marginTop: '150px', marginLeft: '35%'}}>
             
              <img  src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/media/90211520c82920dcaf6aea7604aeb029.gif" alt="" onClick={()=>navigate("/#home")}/>
          
         </div>
        
    )
}