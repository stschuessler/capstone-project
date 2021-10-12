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

body {
	height: 100vh;
	width: 100%;
	}
`
export default GlobalStyles
