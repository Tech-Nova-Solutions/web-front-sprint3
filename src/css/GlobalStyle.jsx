import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    :root{
        --bg-color:#f5f5f5;
        --azul-claro:#4a8adf;
        --azul-escuro:#0017b0;
        --font: 'Inter', sans-serif;
    }

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: var(--font);
        

    }
    
    html{
        scroll-behavior:smooth;
    }

    



`
export default GlobalStyle