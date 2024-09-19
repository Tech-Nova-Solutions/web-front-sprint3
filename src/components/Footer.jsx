import { FooterStyle } from "../css/FooterStyle"
import logo from '../assets/formula-e-logo-1.png'

const Footer = () => {
  return (
    <FooterStyle>
      <footer className="container">
          <img src={logo} alt="logo-formula-e" className="logo" />
          <div className="text">
            <p>Termos e Condições</p>
            <p>Recomendações</p>
            <p>Produção</p>
          </div>
          <div className="text">
              <p>Instagram</p>
              <p>Facebook</p>
              <p>X</p>
          </div>
          <div className="text">
              <p>(11)1234-5678</p>
              <p>formulae@contato.com.br</p>
              <p>São Paulo, SP - Brasil</p>
          </div>
          <h5>Copyright @2024; Designed By Formula E</h5>
      </footer>
    </FooterStyle>
  )
}

export default Footer