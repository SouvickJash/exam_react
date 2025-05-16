import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiFetching = () => {
    const[data,setData]=useState()

    const URL="https://jsonplaceholder.typicode.com/users"
    const getData=async()=>{
     const responce=await axios.get(URL)
     setData(responce.data)
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(data)

  return (
    <>
         {/* <h1>Api fetching Page</h1> */}
         {
            data?.map((item,index)=>{
                const{id,name,email,address}=item
                return(
                    <>
                       <div>{index+1}</div>
                       <div>{id}</div>
                       <div>{name}</div>
                       <div>{email}</div>
                       <div>address: {address.street}</div>
                    </>
                )
            })
         }
    </>
  )
}

export default ApiFetching
