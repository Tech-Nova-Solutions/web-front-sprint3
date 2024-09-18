import { Link } from "react-router-dom"


const Desafios = () => {
  return (
    <section className="container-desafios">
      <h1>Desafios e Soluções</h1>
      <div className="texto-1">
        <p>Uma das maiores diferenças entre a Fórmula E e outras competições automobilísticas é o som dos carros. Enquanto os motores a combustão são conhecidos por seus rugidos altos e emocionantes, os motores elétricos da Fórmula E produzem muito menos barulho. Isso pode ser uma desvantagem para os fãs acostumados à experiência sonora das corridas tradicionais, já que o som é uma parte importante da emoção e do espetáculo.</p>
        <p>Para criar uma experiência mais emocionante para os fãs, a Fórmula E terá que explorar  o uso de sons artificiais. Esses sons são projetados para simular a intensidade e a emoção dos motores a combustão, mas de uma maneira que seja mais ambientalmente amigável. Além disso, o menor ruído permite que os espectadores apreciem outros sons da corrida, como o contato dos pneus com a pista e a interação entre os pilotos e suas equipes, oferecendo uma nova dimensão à experiência da corrida.</p>
        <img src="" alt="ondas" />
      </div>
      <div className="texto-2">
        <img src="" alt="redes" />
        <p>Outro problema é o desconhecimento sobre a História da Fórmula E.
        Embora a Fórmula E tenha feito avanços significativos desde seu lançamento em 2014, ainda há um grande número de pessoas que não conhecem sua história e seus objetivos. A falta de familiaridade com a evolução da Fórmula E e sua missão de promover a sustentabilidade e a inovação tecnológica pode limitar o engajamento e o interesse do público.</p>
        <p>
        A Fórmula E tem investido fortemente em campanhas de marketing e iniciativas educacionais para aumentar a conscientização sobre sua história e objetivos. Isso inclui a criação de documentários, séries de vídeos e artigos informativos que detalham a origem da Fórmula E, seus marcos importantes e suas contribuições para a sustentabilidade. Além disso, a Fórmula E tem fortalecido sua presença nas redes sociais e colaborado com influenciadores e mídias especializadas para alcançar um público mais amplo e diversificado.
        </p>
      </div>
      <Link to='/sobre'>Conhecer nossa história</Link>
      
      


    </section>
  )
}

export default Desafios