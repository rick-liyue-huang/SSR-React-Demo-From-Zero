import React from 'react';
import ReactDomServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server';
import RoutesList, {routesConfig} from "./routes";
import {Provider} from "react-redux";
// import store from "./store";
import createStoreInstance from "./store";
import {Helmet} from "react-helmet";



const express = require('express');


const app = express();
const PORT = process.env.POT || 3000;

app.use(express.static('dist/public'));

app.get('*', (req, res) => {


	// create singleton store
	const store = createStoreInstance();


	//
	const promises = routesConfig?.map(route => {
		const component = route?.component;
		if (route?.path === req?.url && component?.getInitialData) {
			return component?.getInitialData(store);
		}
		else {
			return null;
		}
	});

	Promise.all(promises).then(() => {

		const preloadedState = store.getState();

		const content = ReactDomServer.renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} >
					<RoutesList />
				</StaticRouter>
			</Provider>

		)

		// console.log(content);

		const helmet = Helmet.renderStatic();

		const html = `
		<html>
			<head>
				${helmet.title.toString()}
				${helmet.meta.toString()}
			</head>
			<body>
				<div id="root">${content}</div>
				<script>
					window.__PRELOAD_STATE__=${JSON.stringify(preloadedState)}
				</script>
				<!--	here the React will control the ssr page	-->
				<script src="bundle_client.js"></script>
			</body>
		</html>
	`;

		res.writeHead(200, {
			'content-type': 'text/html;charset=utf8'
		})
		res.end(html);

	})

});

app.listen(PORT, () => {
	console.log(`server is running on port of ${PORT}`);
});
