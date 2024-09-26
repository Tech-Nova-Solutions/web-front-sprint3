import styled from "styled-components";
export const LoginStyle = styled.section `

.container-login {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden; 
    display:flex;
    justify-content: center;
    align-items: center;
}

.container-login::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(src/assets/fundo-login.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position:  center center;
    filter: blur(8px); 
    z-index: -1; 
    
}

.login-form{
    width:40%;
    height:50%;
    border-radius: 100px;
    background: var(--azul-escuro);
    display: flex;
    flex-direction: column;
    gap:40px;
    justify-content: center;
    align-items: center;
    color:var(--bg-color);
    font-weight: 600;
    font-size:1.2rem;
    

}
.login-form input{
    width:100%;
    height: 30px;
    border-radius: 50px;
    border:none;
    text-align:center;
    outline-color: var(--azul-claro);
    
    
}
.form-group{
    width:70%;
    
}

.login-btn{
    width:30%;
    height: 10%;
    background: var(--azul-claro);
    border-radius:20px;
    display: flex;
    justify-content: center;

   

    
}

.login-form-btn{
    width:100%;
    background: transparent;
    border:none;
    color:var(--bg-color);
    text-transform: uppercase;
    font-size:1rem;
    font-weight: 600;
     

}
.login-btn:hover{
    background-color: var(--bg-color);
    color:var(--azul-claro);
}
.login-form-btn:hover{
    color: var(--azul-claro);
}

.text2{
    color:aquamarine;
    text-decoration: underline;
    text-decoration-thickness:2px;

}
.text2:hover{
    color:var(--azul-claro);
}


//TABLET
@media (max-width:840px){
    .login-form{
        width:45%;
        min-height: 45%;
        font-size: 0.9rem;
        padding:20px;
    }
    .form-group{
        display: flex;
        flex-direction: column;
        gap:10px;
        width:90%;
    }
    
}

//MOBILE
@media (max-width:480px){
    .login-form{
        width:60%;
        min-height: 45%;
    }
    .login-btn{
        min-width: 65px;
    }
}


`