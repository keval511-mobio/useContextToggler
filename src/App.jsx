import { createContext, useState } from 'react'
import './App.css'
import ChildeA from './Components/ChildeA'

export const UserContext = createContext(null)

function App() {
  const[theme,setTheme]=useState('light')
  const[bg,setBg]=useState({bgb:"black",bgg:"green"})

  const name="keval"

  function handleclick(){
    theme=="light"?setTheme('dark'):setTheme('light')
  }
  const body =document.body
  theme=='light'?body.style.backgroundColor='white':body.style.backgroundColor='black'
 
  return(
    <>
 <UserContext.Provider value={{theme,name,handleclick,bg}}>
  <ChildeA/>
 </UserContext.Provider>
    </>
   )
    
}

export default App
