import { Link } from "react-router-dom"
import { HomeStyle } from "../css/HomeStyle"
import logo from "../assets/formula-e-logo-2.png"
import carro from '../assets/carro-pag-1.png'
import londres from '../assets/londres.png'
import usa from '../assets/portland.png'



const Home = () => {
  return (
    <HomeStyle>
        <section className="container-home">
            <div className="banner-home"> 
                <img src={logo} alt="logo-formulaE" className="logo"/>
                <img src={carro} alt="carro" className="carro1"/>
                <p className="text">A Fórmula E é a principal categoria de automobilismo de carros elétricos, lançada em 2014. Promovendo a mobilidade sustentável e a inovação tecnológica, ela realiza corridas emocionantes em circuitos urbanos globais e serve como um laboratório para desenvolver tecnologias avançadas para veículos elétricos de produção em massa.</p>
                <Link to='/sobre' className="btn-sabermais">Quero saber mais!</Link>
                
                    <h1 className="section-title">
                    Futuras Corridas
                </h1>
                
            
            </div>
            <div className="calendario-corridas">
                <div className="card-corridas">
                    <p>Portland</p>
                    <p>21/09</p>
                    <p>ROUND 13</p>
                    <img src={usa} alt="local da corrida" />
                    <Link to='/ingressos' className='btn'>Comprar Ingressos</Link>
                </div>
                <div className="card-corridas">
                    <p>Portland</p>
                    <p>05/10</p>
                    <p>ROUND 14</p>
                    <img src={usa} alt="local da corrida" />
                    <Link to='/ingressos' className='btn'>Comprar Ingressos</Link>
                </div>
                <div className="card-corridas">
                    <p>Londres</p>
                    <p>14/10</p>
                    <p>ROUND 15</p>
                    <img src={londres} alt="local da corrida" />
                    <Link to='/ingressos' className='btn'>Comprar Ingressos</Link>
                </div>
                <div className="card-corridas">
                    <p>Londres</p>
                    <p>01/11</p>
                    <p>ROUND 16</p>
                    <img src={londres} alt="local da corrida" />
                    <Link to='/ingressos' className='btn'>Comprar Ingressos</Link>
                </div>

            </div>

            <div className="info-sust">
                <div className='titulo-sust'>
                    <h2>Sustentabilidade na Fórmula E:</h2>
                    <h3>Rumo a um Futuro Limpo e Sustentável</h3>
                </div>
                
                <div className="texto-sust">
                    <p>A Fórmula E lidera a sustentabilidade no automobilismo com veículos elétricos, reduzindo emissões e usando circuitos urbanos. Funciona como um laboratório para tecnologias limpas, que são aplicadas em veículos de rua. Promove a conscientização ambiental e colabora com organizações e empresas para compartilhar recursos e práticas sustentáveis.  A Fórmula E está moldando um futuro de mobilidade limpa e inspirando ações sustentáveis em todo o mundo.</p>
                </div>
                <h1 className="section-title2">Parceiros</h1>
            </div>
            <div className="parceiros">
                <div className="parceiros-1">
                    <img src="src/assets/parceiros/ABB-logo.png" alt="ABB" />
                </div>
                <div className="parceiros-2">
                    <img src="src\assets\parceiros\Julius-baer-logo.png" alt="parceiros" />
                    <img src="src\assets\parceiros\HK_2019_Logo-1.png" alt="parceiros" />
                    <img src="src\assets\parceiros\pif_colour.png" alt="parceiros" />
                    <img src="src\assets\parceiros\1200px-SABIC_Logo_RGB.png" alt="parceiros" />
                </div>
                <div className="parceiros-2">
                    <img src="src\assets\parceiros\Allianz-sponsor.png" alt="parceiros" />
                    <img src="src\assets\parceiros\antofagasta-minerals-logo.png" alt="parceiros" />
                    <img src="src\assets\parceiros\Bosch-Logo-1925.png" alt="parceiros" />
                    <img src="src\assets\parceiros\DHL_Logo.png" alt="parceiros" />
                    <img src="src\assets\parceiros\google-cloud.png" alt="parceiros" />
                    <img src="src\assets\parceiros\Ifosys-Logo.png" alt="parceiros" />
                    <img src="src\assets\parceiros\SaaudiaLogo.png" alt="parceiros" />

                </div>
                <div className="parceiros-3">
                    <img src="src\assets\parceiros\Aggreko-Logo-RGB-01.png" alt="parceiros" />
                    <img src="src\assets\parceiros\Hackett_Sport_Logo_Black.png" alt="parceiros" />
                    <img src="src\assets\parceiros\southwire-logo.png" alt="parceiros" />
                    <img src="src\assets\parceiros\taittinger_logo.png" alt="parceiros" />
                    <img src="src\assets\parceiros\Tata-Communications-Logo-Stacked-Blue-New.png" alt="parceiros" />
                </div>

            </div>
        </section>
    </HomeStyle>
  )
}

export default Home