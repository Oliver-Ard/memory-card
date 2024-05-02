import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
	--ff-body: "Montserrat", sans-serif;

  --font-size-200: 0.694rem;
	--font-size-300: 0.833rem;
	--font-size-400: 1rem;
	--font-size-500: 1.2rem;
	--font-size-600: 1.44rem;
	--font-size-700: 1.728rem;
	--font-size-800: 2.074rem;
	--font-size-900: 2.488rem;
	--font-size-1000: 2.986rem;

	--clr-primary: #FF3511;
	--clr-dark: #242020;
	--clr-light: #fff;
	
	--clr-overlay: rgb(0, 0, 0, 0.7);

	--box-shadow: 0px 5px 15px 0 rgba(0, 0, 0, 0.8);

	--shadow-border: 0 0 0 10px var(--clr-dark);
	--shadow-border-2: 0 0 0 8px var(--clr-dark);

	--border-radius: 8px;
	--border-radius-2: 50%;
	--border-radius-3: 50px;
}

	body {
	font-family: var(--ff-body);
	font-size: var(--font-size-500);
	color: var(--clr-dark);
}
	
	button {
	display: inline-block;
	cursor: pointer;
	color: inherit;
	border: none;
	padding: 0.3em;
}

button:active {
	opacity: 0.8;
}

i {
	font-size: inherit;
	margin: 0 0.3rem;
}
`;

export default GlobalStyles;
