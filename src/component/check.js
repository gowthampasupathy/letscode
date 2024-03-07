import { useEffect } from "react"
import axios from "axios"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
function BasicExample() {
   
    const navigator=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3001/explore',{withCredentials:true})
        .then((result)=>{
          if(result.data.status==="Success"){
            console.log("Welcome To Lets'Code")
            
          }else{
            console.log("faild"+result.data)
            navigator('/')
       
          }
        }).catch((err)=>console.log(err))
      },[])
  return (
    <Outlet />
  );
}

export default BasicExample;
