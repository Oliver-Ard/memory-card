import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import ResetStyles from "./styles/global/Reset.styled.js";
import GlobalStyles from "./styles/global/Global.styled.js";
import theme from "./styles/global/Theme.styled.js";

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
