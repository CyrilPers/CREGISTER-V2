import { useState } from "react"
import LoginPage from "./component/pages/login/LoginPage"

function App(){
  // state (états, données)
  const [prenom, setPrenom] = useState("Cyril")
  const [count, setCount] = useState(1)

  // comportements
  const handleClick = () => {
    setCount(count+1)
  }


  // affichage (render)
  return  (
    <LoginPage/>
  )
}

export default App
