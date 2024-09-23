import styled from "styled-components";

export const DesafiosStyle = styled.section `

    

    .container-desafios{
        width:100%;
        min-height:100vh;
        

    }
    .bg{
        background: var(--azul-claro);
        color:var(--azul-claro);
        height:4vh;
        width:100%;
    }
    
    .titulo-container{
        width:100%;
        height:5vh;
        background:var(--bg-color);
        display: flex;
        align-items: center;
        justify-content:center;
        
    }
    .titulo{
        background: var(--azul-escuro);
        color:var(--bg-color);
        width:30%;
        height:150%;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius:50px;
        font-size: 2rem;
        
    }
    .section-1{
        width:100%;
        min-height:50vh;
        display: grid;
        grid-template-areas: "texto img";
        grid-template-columns: 1.5fr 1fr;
        grid-template-rows: 1fr;
        background:var(--azul-claro);
        
    }
    .texto-1{
        
        grid-area:texto;
        display: flex;
        flex-direction: column;
        font-size: 1.2rem;
        justify-content: space-evenly;
        text-align: justify;
        color:var(--bg-color);
        padding:100px;
        gap:30px;
        
    }
    .section-1 img{
        width:100%;
        height: auto;
        padding: 80px;
        align-self: center;
    }

    .section-2{
        width:100%;
        min-height:50vh;
        display: grid;
        grid-template-areas: "img texto"
            "btn btn"
        ;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 0.5fr;
        background:var(--azul-claro);
    }

    .section-2 img{
        grid-area:img;
        width: 100%;
        height: auto;

    }
    .texto-2{
        text-align: justify;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:50px;
        gap:20px;
        color:var(--bg-color);
        font-size:1.2rem;
    }
    .btn{
        grid-area:btn;
        align-self: center;
        justify-self:center;
        
        background: var(--azul-escuro);
        color:var(--bg-color);
        width: 250px ;
        height: 50px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: underline;
        text-decoration-thickness:2px;
        font-size:1.1rem;
        font-weight: 600;
    }

`