const initialState={
    counter:0,
    history:[]
}


const reducer=(state=initialState,action)=>{
    if(action.type==='INCREMENT')
    {
        return{
            ...state,
            counter:state.counter+1
        }
    }
    if(action.type==='DECREMENT')
    {
        return{
            ...state,
            counter:state.counter-1
        }
    }
    if(action.type==='INCREMENTby5')
    {
        return{
            ...state,
            counter:state.counter+action.value
        }
    }
    if(action.type==='DECREMENTby5')
    {
        return{
            ...state,
            counter:state.counter-action.value
        }
    }
    if(action.type==='STORE')
    {

        return{
            ...state,
            history:state.history.concat(state.counter)
        }
    }
    return state;
}


export default reducer;