
  
import {
    
    Article,
    Group,
    Home,
    Storefront,
    
  } from "@mui/icons-material";
  import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Button,
    Stack
  } from "@mui/material";
  import React from "react";
  import { useDispatch,useSelector } from 'react-redux'
  import axios from 'axios'
import { setproducts } from '../redux/actions'

  
  const ProductSidebar = () => {
const dispatch=useDispatch()


const handleSortedData =(query)=>{
    axios.get(`http://localhost:8080/products?category=${query}`).then(({data})=>{
        console.log(data)
        dispatch(setproducts(data))
    })
}
const handleSorted =(order)=>{
    axios.get(`http://localhost:8080/products?_sort=price&_order=${order}`).then(({data})=>{
        console.log(data)
        dispatch(setproducts(data))
    })
}
const handleAllData=()=>{
    axios.get(`http://localhost:8080/products`).then(({data})=>{
        console.log(data)
        dispatch(setproducts(data))
    })
   
}



    return (
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="All Products" onClick={handleAllData} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="HandBag" onClick={()=>handleSortedData("handbag")} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary="Jewelery" onClick={()=>handleSortedData("jewelery")} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton  >
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary="BeautyProducts" onClick={()=>handleSortedData("beauty")} />
              </ListItemButton>
            </ListItem>
          </List>
          <Stack spacing={2} direction='column' >
          <Button variant="text" sx={{color:'red'}} onClick={()=>handleSorted("asc")}>sort by price asc</Button>
          <Button variant="text" sx={{color:'green'}} onClick={()=>handleSorted("desc")}>sort by price desc</Button>
          </Stack>
        </Box>
      </Box>
    );
  };
  
  export default ProductSidebar;
  