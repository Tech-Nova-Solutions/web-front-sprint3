import { Link } from "react-router-dom"
import { HeaderStyle } from "../css/HeaderStyle"
import logo1 from '../assets/formula-e-logo-1.png'
import MenuHamburguer from "./MenuHamburguer"
const Header = () => {
  return (
    <HeaderStyle>
      <header className='header'>
      
        <img src={logo1} alt="logo formula e" className="logo1"/>
        <div className='nav'>
            <Link to='/' className="links">Home</Link>
            <Link to='/ingressos' className="links">Ingressos</Link>
            <Link to='/sobre' className="links">Sobre nós</Link>
            <Link to='/desafios' className="links">Desafios & Soluções</Link>
        </div>
        <MenuHamburguer/>

        <Link to='/login' className="login">Login</Link>
      </header>
      
   </HeaderStyle>
  )
}

export default Header