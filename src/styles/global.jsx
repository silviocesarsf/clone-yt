import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        list-style: none;
        outline: none;
    }

    body {
        background-color: ${(props) =>
				props.theme.colors.background_color};
        color: ${(props) => props.theme.colors.text_color};
        font-family: "Poppins";
    }

    ::-webkit-scrollbar-track {
    }
    ::-webkit-scrollbar {
        width: 8px;
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #b3b3b3;
        border-radius: 5px;
    }
    
`;
