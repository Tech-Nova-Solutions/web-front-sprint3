import styled from "styled-components";
export const IngressosStyle = styled.section`

    .ingressos-container{
        width: 100%;
        min-height: 100vh;

    }

    .banner-ingressos{
        background-image: linear-gradient(to bottom, var(--azul-claro) 0%, rgba(0, 123, 255, 0) 30%, rgba(0, 123, 255, 0) 70%,var(--azul-claro) 100%),
        url(src/assets/foto-ingressos.png);
        background-size: cover;
        background-repeat:no-repeat;
        background-position:center center;
        width: 100%;
        min-height: 50vh;
        padding: 100px 120px;
        color: var(--bg-color);
    }
    .banner-ingressos h1{
        font-size:2rem;

    }
    
    .datas{
        width:100%;
        min-height:50vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap:30px;
        flex-wrap: wrap;
        padding :40px 150px;
    }
    .cards-datas{
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
    .cards-datas img{
        width: 100%;
        height: auto;
        border-radius:8px;
    }
    .btn{
        width: 100%;
        min-height: 35px;
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

    .vantagens{
        width: 100%;
        min-height: 60vh;
        display:flex;
        
    }
    .carro{
        height: auto;
        width:50%;
        background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%),
        url(src/assets/img-1.png);
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size:cover;
        
        
    }
    .text{
        width: 50%;
        height: auto;
        padding:20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }
    .text h2{
        font-size: 1.5rem;
        color: var(--azul-escuro);
    }
    .text ul{
        display:flex;
        flex-direction: column;
        gap:10px;
        color:var(--azul-escuro);
        font-weight: 600;
    }
    .text span{
        font-weight: bolder;
    }

`