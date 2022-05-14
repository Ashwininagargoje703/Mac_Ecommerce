
  export const setproducts=(data)=>({
   
    type:'SET_PRODUCT',
    payload:data
  })
  
  export const selectedproduct=(data)=>({
      type:'SELECTED_PRODUCT',
      payload:data
  })

  export const sortedProducts=(data)=>({
    type:'SORTED_DATA',
    payload:data
})

export const Login_detail=(data)=>({
  type:"LOGIN_DETAIL",
  payload:data
})

