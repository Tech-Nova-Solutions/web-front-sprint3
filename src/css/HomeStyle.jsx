import styled from 'styled-components'

export const HomeStyle = styled.section`

.container-home{
    width:100%;
    min-height:100vh;
    background:var(--bg-color);

}
.banner-home{
    width: 100%;
    min-height: 40vh;
    display: grid;
    grid-template-areas: 
        "logo carro"
        "texto carro"
        " btn     title "
    ;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 0.5fr;
    column-gap: 80px;
    background: var(--azul-claro);
   
}
.logo{
    grid-area: logo;
    max-width: 100% ;
    height:auto;  
    align-self: center;
    justify-self: center;
    
}
.carro1{
    grid-area: carro;
    max-width: 100%;
    height: auto;
    display: flex;
    align-self: center;
    justify-self: center;
}
.text{
    grid-area: texto;
    color:var(--bg-color);
    height: auto;
    text-align: justify;
    padding-left: 50px;
    justify-self: center;
    align-self:center;
    font-size:1.2rem;
    max-width: 800px;
}
.btn-sabermais{
    grid-area: btn;
    justify-self: center;
    align-self: center;
    background: var(--bg-color);
    text-decoration:underline;
    text-decoration-thickness: 2px;
    color: var(--azul-claro);width:266px;
    height: 45px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
}
.section-title{
    grid-area:title;
    width:100%;
    height: 60px;  
    background:var(--bg-color);
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
    display:flex;
    justify-content: center;
    align-items: center;
    color: var(--azul-escuro);
    font-size:1.8rem;
    align-self: flex-end;
    justify-self:flex-end;

}
.section-title h1{
    font-size: 2.5rem;
    color: var(--azul-escuro);

}

.calendario-corridas{
    width:100%;
    min-height:50vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap:30px;
    flex-wrap: wrap;
    padding :40px;


}
.card-corridas{
    background:#fff;
    width: 200px;
    height:300px;
    box-shadow: 0 4px 8px black;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    color:var(--azul-escuro);
    font-weight: 800;
    gap:10px;
}
.card-corridas img{
    width:100%;
    height:auto;
    border-radius: 8px;
    
}
.btn{
    width: 100%;
    height: 50px;
    background: var(--azul-claro);
    border-radius:15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:var(--bg-color);
    font-weight: 600;
}
.btn:hover{
        background:var(--azul-escuro);
    }


.info-sust{
    width:100%;
    min-height:60vh;
    background-image: url(src/assets/foto-fundo.png);
    background-size: cover;
    background-position:center center;
    background-repeat: no-repeat;
    display:flex;
    flex-direction: column;
   
    gap:90px;
    
    
    
}
.titulo-sust{
    color: var(--azul-escuro);
    padding: 20px 20px;
    
}
.titulo-sust h2{
    font-size:2.2rem;
    font-weight:800;
}
.titulo-sust h3{
    font-size:1.8rem;
    font-weight: 400;
}

.texto-sust{
    width: 80%;
    max-width: 1000px;
    height:50%;
    align-self: center;
    justify-self: center;
    text-align:justify;
    background: var(--azul-claro);
    color:var(--bg-color);
    border-radius:60px ;
    
}
.texto-sust p{
    padding:25px;
}
.section-title2{

    background:var(--bg-color);
    margin-top: auto;
    clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
    width: 60%;
    height:60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--azul-escuro);
    font-size:1.8rem;
    

}
.parceiros{
    width:100%;
    min-height:40vh;

}
.parceiros-1{
    display: flex;
    min-height: 10vh;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--azul-escuro);
    
}
.parceiros-2{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid var(--azul-escuro);
    padding: 10px 20px;
    gap:10px;
   
    
}

.parceiros-2 img{
    width: 100%;
    max-width:100px;
    height: auto;

}
.parceiros-3{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;   
    padding:10px 20px;
}
.parceiros-3 img{
    width: 100%;
    max-width:100px;
    height: auto;
}
/*MOBILE*/
@media (max-width: 480px) {
    .banner-home{
        width:100%;
        min-height:100vh ;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        gap: 50px;
        
    }
    .logo{
        width:80%;
        height: auto;
    }
    .carro1{
        width:80%;
        height:auto;

    }
    .text{
        font-size:1rem;
        align-self: center;
        padding: 15px;
    }
    .section-title{
       margin-top: auto;
       height:60px;
       width:90%;
    }
    .btn{
        text-align:center;
    }
    
}
/*TABLET*/
@media (max-width:840px){
    .calendario-corridas{
        flex:1 1 calc(50% - 20px);
    }
}





`