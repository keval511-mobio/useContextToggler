import React, { useContext } from 'react'
import { UserContext } from '../App'


export default function ChildeC() {
 

    const user = useContext(UserContext)


  return (
    <> 
    
    <h2>Background Color switch to : {user.theme} </h2>
    <input type="checkbox"  name="" id=""onClick={user.handleclick} />
    <button onClick={user.handleclick} >{user.theme}  </button>
    </>
  )
}   
