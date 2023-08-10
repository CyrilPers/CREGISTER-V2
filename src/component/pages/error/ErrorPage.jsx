import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')

  }

  return (
    <div id="error-page">
      <h1>ErrorPage</h1>
      <button onClick={handleClick}>Retourner à la page d'accueil.</button>
      <p>
      </p>
    </div>
  )
}