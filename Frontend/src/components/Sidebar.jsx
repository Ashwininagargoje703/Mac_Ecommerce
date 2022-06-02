// import {
//   AccountBox,
//   Article,
//   Group,
//   Home,
//   ModeNight,
//   Person,
//   Settings,
//   Storefront,
// } from "@mui/icons-material";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Switch,
// } from "@mui/material";
// import React from "react";
// import {useNavigate} from "react-router-dom"

// const Sidebar = () => {
//   const navigate=useNavigate()
//   return (
//     <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block"} }}>
//       <Box position="fixed" style={{bgcolor: 'black'}}>
//         <List>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#home">
//               <ListItemIcon>
//                 <Home />
//               </ListItemIcon>
//               <ListItemText primary="Homepage" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton onClick={()=>navigate("/product")}>
//               <ListItemIcon>
//                 <Article />
//               </ListItemIcon>
//               <ListItemText primary="Categories" />
//             </ListItemButton>
//           </ListItem>
  
         
//         </List>
//       </Box>
//     </Box>
//   );
// };

// export default Sidebar;