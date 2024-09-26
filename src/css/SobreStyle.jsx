import styled from "styled-components";

export const SobreStyle = styled.section `

    .container-sobre{
        width:100%;
        min-height: 100vh;
    }
    .banner-container{
        width: 100%;
        min-height: 50vh;
        background-image: url(src/assets/fundo-bem-vind.png);
        background-position:center center;
        background-repeat: no-repeat;
        background-size:cover;
        display: grid;
        grid-template-areas: 
        "logo ."
        "texto ."
        "texto  title"
        ;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 2fr 1fr 1fr;
        row-gap: 40px;
    }
    .saudacao{
        grid-area: logo;
        width:60%;
        height:auto;
        background: var(--bg-color);
        border-top-right-radius: 100px;
        border-bottom-right-radius: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color:var(--azul-escuro);
        align-self: center;
        
        
        
    }
    .saudacao img{
        width:100%;
        height: auto;
        max-height: 220px;
    }
    
    .text{
        grid-area: texto;
        width: 100%;
        padding-left: 40px;
        text-align: justify;
        color:var(--bg-color);
        display: flex;
        flex-direction: column;
        gap:20px;
        font-size:1.1rem;
        font-weight: 500;
        align-self: center;
    }
    .section-title{
        grid-area:title;
        width:90%;
        height: 60px;  
        background:var(--bg-color);
        clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
        display:flex;
        justify-content: center;
        align-items: center;
        color: var(--azul-escuro);
        font-size:1.5rem;
        align-self: flex-end;
        justify-self:flex-end;
        
    }
    .nossa-historia{
        width:100%;
        min-height: 40vh;
        display: grid;
        grid-template-areas: 
            "img text"
            "img title"
            
        ;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr auto;
        
        column-gap: 10px;
        background: var(--bg-color);
    }
    .nossa-historia img{
        grid-area: img;
        width: 100%;
        height:auto;
        align-self: center;
        padding-left:20px;


    }
    .container{
        display: flex;
        grid-area:text;
        text-align: justify;
        font-size: 1.1rem;
        flex-direction: column;
        justify-content: space-evenly;
        padding:20px;
        
        

    }
    .container p{
        color:var(--azul-escuro);
        font-weight: 600;
    }
    .section-title2{
        grid-area:title;
        width:90%;
        height:60px;
        justify-self: flex-end;
        align-self: flex-end;
        background:var(--azul-escuro);
        margin-top: auto;
        clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
        display:flex;
        justify-content: center;
        align-items: center;
        font-size:1.5rem;
        color:var(--bg-color);

    }
    .proposito{
        width:100%;
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .text1{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align:justify;
        font-size: 1.2rem;
        padding:100px;
        background: var(--azul-escuro);
        color: var(--bg-color);
        font-weight: 300;

    }
    .texto{
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align:justify;
        padding:80px;
        gap:70px;
        font-size: 1.1rem;
        background-image: linear-gradient(to bottom ,var(--azul-escuro)0%, var(--azul-claro)96%);
        color:var(--bg-color);
    }
    .titulo{
        width: 40%;
        padding:20px;
        background: var(--bg-color);
        color:var(--azul-escuro);
        text-align: center;
        border-radius:100px;
        align-self:center;
    }
    //TABLET
    @media (max-width:840px){
        .saudacao{
            width: 70%;
        }
        .text{
            padding-bottom:20px;
        }
    }

    //MOBILE
    @media (max-width:480px){
        .banner-container{
            min-height: 60vh;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap:100px;
        }
        .saudacao{
            margin-top: 20px;
            align-self:flex-start;
        }
        .text{
            padding:20px;
        }
        .nossa-historia{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap:100px;
        }
        .container{
            font-size:0.9rem;
            gap: 20px;
        }
       .text1{
        padding: 50px;
        font-size:1rem;
       }
        .texto{
            padding: 20px;
            font-size:0.9rem;
        }
        .titulo{
            width:80%;
        }
    }
    
    



`