import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import ResetStyles from "./styles/Reset.styled";
import GlobalStyles from "./styles/Global.styled";
import theme from "./styles/Theme.styled.js";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ResetStyles />
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
