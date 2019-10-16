import { createGlobalStyle } from "styled-components"
import { Colors } from "../../constants"

export const GlobalStyle = createGlobalStyle`
    * {
        background-color: ${Colors.White};
        color: ${Colors.Black};
    }
    html, body {
        margin: 0;
    }
    ::selection {
        background-color: ${Colors.Orange};
        color: ${Colors.White};
    }
    
`
