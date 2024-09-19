import styled from 'styled-components'

export const FooterStyle = styled.footer `

    .container{
        width:100%;
        height:150px;
        background: var(--azul-claro);
        display:grid;
        grid-template-areas: 
            "logo text text text"
            "logo   h5   h5     ."
        
        ;
        grid-template-columns:  repeat(4,1fr);
        grid-template-rows: auto;
    }
    .logo{
        grid-area:logo;
        width: 87px;
        height: 80px;
        justify-self: center;
        align-self: center;
    }
    .text{
        display: flex;
        flex-direction: column;
        font-weight:500;
        gap:10px;
        justify-content:center;
        align-items: center;
        color:var(--bg-color);


    }

    .container h5{
        grid-area: h5;
        display:flex;
        align-self: center;
        justify-self: center;
        color: var(--bg-color);
    }

`