import { Link } from "react-router-dom"


const Home = () => {
  return (
    <section className="container-home">
        <div className="banner-home"> 
        <img src="" alt="logo-formulaE" />
        <img src="" alt="carro" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum veniam ex fuga fugiat! Natus voluptates saepe, vero, itaque dolore corporis mollitia beatae iste ducimus vel quas maiores illo quos sit adipisci doloribus laudantium culpa nobis. Culpa molestiae explicabo quae, at tempora, consectetur accusamus natus perspiciatis eligendi accusantium perferendis quos soluta.</p>
        <Link to='/sobre' className="btn-sabermais">Quero saber mais</Link>

        <h1 className="section-title">
            Futuras Corridas
        </h1>
        </div>
        <div className="calendario-corridas">
            <div className="card-corridas">
                <p>cidade da corrida</p>
                <p>data</p>
                <p>etapa</p>
                <img src="" alt="local da corrida" />
                <Link to='/ingressos'></Link>
            </div>
            <div className="card-corridas">
                <p>cidade da corrida</p>
                <p>data</p>
                <p>etapa</p>
                <img src="" alt="local da corrida" />
                <Link to='/ingressos'></Link>
            </div>
            <div className="card-corridas">
                <p>cidade da corrida</p>
                <p>data</p>
                <p>etapa</p>
                <img src="" alt="local da corrida" />
                <Link to='/ingressos'></Link>
            </div>
            <div className="card-corridas">
                <p>cidade da corrida</p>
                <p>data</p>
                <p>etapa</p>
                <img src="" alt="local da corrida" />
                <Link to='/ingressos'></Link>
            </div>

        </div>

        <div className="info-sust">
            <h2>Sustentabilidade na Fórmula E:</h2>
            <h3>Rumo a um Futuro Limpo e Sustentável</h3>
            <div className="texto-sust">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nemo molestias quidem, vero illum earum in suscipit necessitatibus tempore aspernatur rem est harum enim distinctio deserunt, recusandae pariatur quae minus, facere perferendis perspiciatis aut quod! Perferendis asperiores deserunt distinctio sint molestiae sequi? Veniam odio quasi sunt autem delectus. Nihil, dolore.</p>
            </div>
            <h1 className="section-title">Parceiros</h1>
        </div>
        <div className="parceiros">
            <div className="parceiros-1">
                <img src="" alt="ABB" />
            </div>
            <div className="parceiros-2">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div className="parceiros-3">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />

            </div>
            <div className="parceiros-4">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>

        </div>
    </section>
  )
}

export default Home