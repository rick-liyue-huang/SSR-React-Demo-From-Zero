import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchHomeData} from "../store/actions/home";
import {Helmet} from "react-helmet";


const HomePage = () => {

	const dispatch = useDispatch();
	const homeData = useSelector((state) => state.home);

	console.log(dispatch);
	console.log(homeData);

	const handleClick = () => {
		console.log('this is clicked');
	};

	useEffect(() => {
		dispatch(fetchHomeData)
	}, []);

	const renderHead = () => {
		return (
			<Helmet>
				<title>home page</title>
			</Helmet>
		)
	}

	return (
		<div>
			{renderHead()}
			this is home page
			<br/>
			<button onClick={handleClick}>Click me</button>
			<br/>
			<ul>
				{
					homeData?.articles.map(article => <li key={article.id}>
						<h3>Title: {article.title}</h3>
						<p>Content: {article.content}</p>
					</li>)
				}
			</ul>

		</div>
	);
};

// similar as getServerSideProps method, to let the server side get the data
/**
 * Similar as
 * useEffect(() => {
 * 		dispatch(fetchHomeData)
 * 	}, []);
 * 	in client side
 */

HomePage.getInitialData = async (store) => {
	return store.dispatch(fetchHomeData);
}

export default HomePage;
