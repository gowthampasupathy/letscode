import { useEffect } from "react"
import axios from "axios"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
function BasicExample() {
   
    const navigator=useNavigate()
    const apiUrl = process.env.REACT_APP_API_URL;
    useEffect(()=>{
        axios.get(`${apiUrl}/explore`,{withCredentials:true})
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
