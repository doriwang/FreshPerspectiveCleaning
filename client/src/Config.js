const config = {
	BACKEND_HOST: process.env.REACT_APP_BACKEND || "http://localhost:3001",
}

if (config.BACKEND_HOST === "SAMEHOST") { config.BACKEND_HOST = ""; }

export default config;