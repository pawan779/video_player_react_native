
const initialState=false



export const themeReducer=(state=initialState,action)=>{

    if(action.type=="CHANGE_COLOR")
    {
        return(action.payload)
    }
return state
}