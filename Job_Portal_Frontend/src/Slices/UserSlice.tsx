import {createSlice} from "@reduxjs/toolkit";
import {getItem,removeItem,setItem} from "../Services/LocalStorageService";
//  const UserSlice=createSlice({
//     name:"user",initialState:getItem("user"),
//     reducers:{
//         setUser:(state,action)=>           //set User on local storage .It Takes(type,payload) what the action is type increment decand payload we pass the object and change the state
//         {
//             setItem("user",action.payload);
//             state=getItem("user");   //original component updated means state is updated
//         return state;        }  //to understand state is change or not surely using return redux update the data to other componentns by comparing
//     },
//     removeUser:()=>{
//         removeItem("user");
//        // state=null;
//         return {};
        
//     }
// }
//  });



const UserSlice = createSlice({
  name: "user",
  initialState:getItem("user"),
  reducers: {
    setUser: (state, action) => {
      setItem("user", action.payload);
      state=getItem("user")
      return state;  
    },
    removeUser: (state) => {
      removeItem("user");
      removeItem("token");
      state=null;
      return state;//If we skip this then each time we need to refresh our page after logout
    }
  }
});




 export const {setUser,removeUser}=UserSlice.actions;
 export default UserSlice.reducer;