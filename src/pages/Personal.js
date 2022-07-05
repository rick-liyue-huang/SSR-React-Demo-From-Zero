import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchPersonalData} from "../store/actions/personal";
import {Helmet} from "react-helmet";

const PersonalPage = () => {

	const dispatch = useDispatch();
	const personalData = useSelector(state => state.personal);

	useEffect(() => {
		dispatch(fetchPersonalData);
	}, []);

	const renderHead = () => {
		return (
			<Helmet>
				<title>personal page</title>
			</Helmet>
		)
	}

	return (
		<div>
			{renderHead()}
			<h3>Personal Page</h3>
			<p>{personalData?.userInfo?.username}</p>
			<p>{personalData?.userInfo?.job}</p>
		</div>
	);
};

PersonalPage.getInitialData = async (store) => {
	return store.dispatch(fetchPersonalData)
}

export default PersonalPage;
