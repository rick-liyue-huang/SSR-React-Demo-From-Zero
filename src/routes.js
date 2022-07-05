import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import HomePage from "./pages/Home";
import PersonalPage from "./pages/Personal";


const RoutesList = () => {
	return (
		<div>
			<ul>
				<li><Link to={'/'}>Home</Link></li>
				<li><Link to={'/personal'}>Person</Link></li>
			</ul>

			<Routes>
				<Route exact path={'/'} element={<HomePage />} />
				<Route exact path={'/personal'} element={<PersonalPage />} />
			</Routes>
		</div>
	)
};

export const routesConfig = [
	{
		path: '/',
		component: HomePage
	},
	{
		path: '/personal',
		component: PersonalPage
	}
]


export default RoutesList;
