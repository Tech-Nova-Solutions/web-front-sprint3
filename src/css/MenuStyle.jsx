import styled from "styled-components";

export const MenuStyle = styled.div `

/* Estilos básicos para o container e o ícone */
.hamburger-menu-container {
  position: relative;
  display:none;
}

.hamburger-icon {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
}

.hamburger-icon .bar {
  width: 30px;
  height: 3px;
  background:var(--azul-escuro);
  border-radius: 20px;
  transition: all 0.3s ease;
}

/* Transformações para o ícone de "X" quando o menu estiver aberto */
.hamburger-icon .bar.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-icon .bar.open:nth-child(2) {
  opacity: 0;
}

.hamburger-icon .bar.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Estilos do menu */
.menu {
  position: absolute;
  top: 50px;
  right: 0;
  width: 200px;
  height: 0;
  background:var(--azul-escuro);
  overflow: hidden;
  transition: height 0.3s ease;
  
}

.menu.open {
  height: 200px;
  
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.menu ul li {
  padding: 15px;
}

.menu ul li a {
  color: white;
  text-decoration: none;
}

@media(max-width: 480px) {
    .hamburger-menu-container{
        display: block;
    }
    

}



`