import styled from "styled-components";

export const CadastrarUsuarioStyle = styled.section `

    .container-cadastro{
        width:100%; 
        min-height: 100vh ;
        background-image: linear-gradient(to top ,var(--azul-claro), var(--bg-color));
        display: flex;
        justify-content: center;
        align-items:center;        
    }
    form{
        width:40%;
        min-height: 40vh;
        background: var(--azul-escuro);
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        gap:50px;
        border-radius:40px;
        padding:20px;


        
    }
    
    .form-group{
        width:100%;
        display: flex;
        justify-content: center;
        gap: 50px;
        color:var(--bg-color);
        font-size:1.2rem;
        font-weight: 600;
    }
    .form-group input{
        width:50%;
        height:30px;
        border-radius: 10px;
        text-align:center;
        outline-color:var(--azul-claro);
    }
    form h2{
        width:100%;
        height:7vh;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:2rem;
        color:var(--azul-escuro);
        background-image:linear-gradient(to right, var(--azul-claro), var(--bg-color));
        border-radius:20px;
        
    }
    .btn{
        width:30%;
        height: 40px;
        min-width:100px;
        border-radius:10px;
        background: var(--azul-claro);
        color:var(--bg-color);
        border:none;
        font-size:1.2rem;
        font-weight: 700;


    }
    .btn:hover{
        background:var(--bg-color);
        color:var(--azul-claro)
    }

    //TABLET
    @media(max-width:840px){
        form{
            width:50%;
            padding:20px;
        }
        form h2{
            border-radius:20px;
        }
        .form-group input{
            width:40%;
        }
        
    }

    //MOBILE
    @media(max-width:480px){
        .form-group{
            font-size:0.9rem;
            gap:30px;
        }
        .form-group input{
            width:60%;
        }
        
    }
    


`