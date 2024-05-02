import React from "react";
import ReactDOM from "react-dom/client";

import ResetStyles from "./styles/Reset.styled";
import GlobalStyles from "./styles/Global.styled";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ResetStyles />
		<GlobalStyles />
		<App />
	</React.StrictMode>
);
