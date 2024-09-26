import {useState} from 'react'
import {Link} from 'react-router-dom'
import {MenuStyle} from '../css/MenuStyle'



const MenuHamburguer = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu =() =>{
        setIsOpen(!isOpen);
    };

  return (
    <MenuStyle>
    <div className="hamburger-menu-container">
      <button className="hamburger-icon" onClick={toggleMenu}>
        {/* Ícone de Menu */}
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </button>

      {/* Menu */}
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/ingressos'>Ingressos</Link></li>
          <li><Link to='/sobre'>Sobre Nós</Link></li>
          <li><Link to='/desafios'>Desafios e Soluções</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
    </div>
    </MenuStyle>
  )
}

export default MenuHamburguer