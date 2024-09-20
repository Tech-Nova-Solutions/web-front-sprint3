import { Link } from "react-router-dom"
import { IngressosStyle } from "../css/IngressosStyle"
const Ingressos = () => {
  return (
    <IngressosStyle>
    <section className="ingressos-container">
      <div className="banner-ingressos">
        <h1>Ingressos</h1>
        <p>Garanta agora seus ingressos para assistir a Fórmula E ao vivo.</p>
        <p>Nos vemos na pista!</p>
      </div>
      <div className="datas">
        <div className="cards-datas">
            <p>Portland</p>
            <p>21/09</p>
            <p>ROUND 13</p>
            <img src='src/assets/portland.png' alt="local da corrida" />
            <Link to='/ingressos' className='btn'>Comprar Ingressos</Link>
  
        </div>
        <div className="cards-datas">
            <p>Portland</p>
            <p>05/10</p>
            <p>ROUND 14</p>
            <img src='src/assets/portland.png' alt="local da corrida" />
            <Link to='/ingressos' className='btn'>Comprar Ingressos</Link>
        </div>
        <div className="cards-datas">
            <p>Londres</p>
            <p>14/10</p>
            <p>ROUND 15</p>
            <img src='src/assets/londres.png' alt="local da corrida" />
            <Link to='/ingressos' className='btn'>Comprar Ingressos</Link>
        </div>
        <div className="cards-datas">
            <p>Londres</p>
            <p>01/11</p>
            <p>ROUND 16</p>
            <img src='src/assets/londres.png' alt="local da corrida" />
            <Link to='/ingressos' className='btn'>Comprar Ingressos</Link>
        </div>
        <div className="cards-datas">
          <p>São Paulo</p>
          <p>10/11</p>
          <p>ROUND 17</p>
          <img src="src/assets/saopaulo.jpg" alt="local" />
          <Link to='/ingressos' className='btn'>Comprar Ingressos</Link>
        </div>
        <div className="cards-datas">
              <p>São Paulo</p>
              <p>18/11</p>
              <p>ROUND 18</p>
              <img src="src/assets/saopaulo.jpg" alt="local" />
              <Link to='/ingressos' className='btn'>Comprar Ingressos</Link>
        </div>
      </div>
      <div className="vantagens">
        <div className="carro">

        </div>
        
        <div className="text">
        <h2>Assistir a uma corrida de carros elétricos, como a Fórmula E, é uma experiência única e emocionante: </h2>
        <ul>
          <li><span>Cenários Urbanos</span>: Corridas ocorrem no coração das cidades.</li>
          <li><span>Sustentabilidade</span>: Eventos ecológicos com uso de energia renovável.</li>
          <li><span>Silêncio Relativo</span>: Zumbido dos motores elétricos em vez do rugido de motores a combustão.</li>
          <li><span>Interatividade</span>: Tecnologias como o FanBoost envolvem os fãs.
          </li>
          <li><span>Pilotos de Elite</span>: Inclusão de ex-pilotos de Fórmula 1.
          </li>
          <li><span>Design Futurista</span>: Carros com estética moderna.</li>
          <li><span>Iluminação e Efeitos</span>: Corridas noturnas com efeitos visuais impressionantes.</li>
          <li><span>Diversidade e Inclusão</span>: Ambiente acolhedor e diversificado.</li>
          <li><span>Engajamento Global</span>: Corridas em várias cidades ao redor do mundo</li>
          <li><span>Corridas Intensas</span>: Ação concentrada em 45 minutos a uma hora.</li>
        </ul>
        
        <h2>Junte-se a nós para vivenciar a emoção das corridas de carros elétricos!</h2>
        

        </div>
       
      </div>

    </section>
    </IngressosStyle>
  )
}

export default Ingressos