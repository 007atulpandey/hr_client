
export const initialState = null

export const reducer = ( state , action ) =>{
     
    if(action.type=="CLEAR")
    return null;
    if( action.type == "USER") {
        return action.payload ;
    } 
   
    return state ;
}