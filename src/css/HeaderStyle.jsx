import styled from 'styled-components'

export const HeaderStyle = styled.header `
    .header{
        width: 100%;
        height: 80px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        background: var(--bg-color);
        padding: 0 20px;
    }
    .logo1{
        width:55px;
        height:50px;
        
    }
    .nav{
        
        height: 30px;
        padding-left: -120px;
        display: flex;
        align-items: center;
        gap:50px;

    }
    .links{
        color: var(--azul-escuro);
        font-weight: 700 ;
        font-size:1.3rem;
        text-decoration: underline;
    }
    .links:hover{
        color:var(--azul-claro);
    }
    .login{
        width:140px;
        height:45px;
        border-radius:30px;
        display:flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        font-weight: 500;
        color: var(--bg-color);
        background: var(--azul-escuro);
    }
    .login:hover{
        background: var(--azul-claro);

    }
    @media(max-width:480px){
        .header{
            height:60px;
            padding:0 10px;
        }
        .logo1{
            width:35px;
            height:35px;
            
        }
        
        .nav{
            display: none;
        }
        .login{
            display: none;
        }
        
    }

`