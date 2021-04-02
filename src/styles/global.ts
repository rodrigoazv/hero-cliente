import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: #fff;
        font-size: 14px;
        color: #333;
        font-family: sans-serif;
    }
    a{
        cursor: pointer;
    }
    button{
        cursor: pointer;
    }
    h2{
        color: #333;
    }
`;
