import { Route, Routes } from "react-router-dom"
import "./App.css"
import LoginPage from "./component/pages/login/LoginPage"
import ErrorPage from "./component/pages/error/ErrorPage"
import OrderPage from "./component/pages/order/OrderPage"

function App(){


  // affichage (render)
  return  (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />

    </Routes>
  )
}

export default App
