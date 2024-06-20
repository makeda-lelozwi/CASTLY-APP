import { useReducer } from "react";
import { TextField, Typography } from "@mui/material";

export default  function Carousel() {
  const userObject={firstname:String, lastname:String, age:Number}

  const setUserDetails=(currentState, action)=>{
    switch(action.type){
      case "setFirstName":
        return {...currentState, firstname: action.payload}
      case "setLastName":
        return {...currentState, lastname: action.payload}
      case "setAge":
        return {...currentState, age: action.payload}
    }
  }
  const [user, dispatchUser] = useReducer(setUserDetails,{userObject})

  const handleTextField= (type,e)=>{
     e.preventDefault();
     dispatchUser({type:type, payload: e.target.value})
  }

  const style = {id:"outlined-basic", label:"Outlined", variant:"outlined"}
  return (
    <div className="className user-form">
      <Typography >`{user.firstname} {user.lastname} {user.age}`</Typography>
      <TextField  sx={{...style}} placeholder="Enter firstname" value={user.firstname} onChange={(e)=>handleTextField("setFirstName",e)} />
      <TextField sx={{...style}} placeholder="Enter lastname"  value={user.lastname} onChange={(e)=>handleTextField("setLastName",e)} />
      <TextField sx={{...style}} placeholder="Enter age" value={user.age} onChange={(e)=>handleTextField("setAge",e)}/>
    </div>
  );
}