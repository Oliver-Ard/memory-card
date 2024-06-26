import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

/* Prevent font size inflation */
html {
	-moz-text-size-adjust: none;
	-webkit-text-size-adjust: none;
	text-size-adjust: none;
}

/* Set core body defaults */
body {
	min-height: 100vh;
	line-height: 1.5;
}

/* Set shorter line heights on headings and interactive elements */
h1,
h2,
h3,
h4,
button,
input,
label {
	line-height: 1.1;
}

/* Balance text wrapping on headings */
h1,
h2,
h3,
h4 {
	text-wrap: balance;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
	font: inherit;
}

/* Remove the underline for links and inherits the color */
a {
	color: inherit;
	text-decoration: none;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul,
ol {
	list-style: none;
}

/* Make images easier to work with */
img,
picture {
	max-width: 100%;
	display: block;
}
`;

export default ResetStyles;
