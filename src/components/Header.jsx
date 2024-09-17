import { Link } from "react-router-dom"
const Header = () => {
  return (
   <header className='header'>
  
     <img src="" alt="logo formula e" />
     <div className='redirecionamento-paginas'>
        <Link to='/'>Home</Link>
        <Link to='/ingressos'>Ingressos</Link>
        <Link to='/sobre'>Sobre nós</Link>
        <Link to='/desafios'>Desafios & Soluções</Link>
     </div>
     

     <Link to='/login'>Login</Link>
   </header>
  )
}

export default Header