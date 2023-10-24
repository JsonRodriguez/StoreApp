import { Link } from "react-router-dom"

export const Error404 = () => {
  return (
    <div className="error404">
        <span className="oops">Oops!</span>
        <h1>404 - PÁGINA NO ENCONTRADA.</h1>
        <p>Puedes seguir navegando en nuestra página, buscando productos que sean de su interés.</p>
        <Link to='/' className="btnGoHome">Ir al inicio <i className="fa-solid fa-house"></i></Link>
    </div>
  )
}
