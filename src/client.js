import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import RoutesList from "./routes";
import { hydrateRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
// import store from "./store";
import createStoreInstance from "./store";


const store = createStoreInstance(window?.__PRELOAD_STATE__);

console.log('store: ', store);


// let client can control the SSR page
hydrateRoot(
	document.getElementById('root'),
	<Provider store={store}>
		<BrowserRouter>
			<RoutesList />
		</BrowserRouter>
	</Provider>

);



