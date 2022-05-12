

const initialstate={
    product:[],
    selectedproduct:{},
    sortedData:[]
}
 export const reducer=(state=initialstate,{type,payload})=>{
     
                 
    switch(type){
        case 'SET_PRODUCT':
            return{
                ...state,
                product:payload
            }
        case 'SELECTED_PRODUCT':
            return{
                ...state,
                selectedproduct:payload
            }  
        case 'SORTED_DATA':
            return{
                ...state,
                sortedData:payload
            }   
           
            default:return state
                  
    }
 }