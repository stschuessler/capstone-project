import { createGlobalStyle } from 'styled-components'
import './fonts.css'

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: "Montserrat", Arial, sans-serif;
	color: inherit;  
}

:root {
  --default-border: solid 0.1px rgba( 0,0,0,0.2);
  --default-shadow: 2px 2px 2px 1px rgba(0,0,0,0.2);
}


body {
	height: 100vh;
	width: 100%;
	}
`
export default GlobalStyles
