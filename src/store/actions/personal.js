
export const FETCH_PERSONAL_DATA = 'PERSONAL/FETCH_PERSONAL_DATA';

export const fetchPersonalData = async (dispatch) => {

	const data = await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				userInfo: {
					username: 'rick',
					job: 'frontend developer'
				}
			})
		}, 2000)
	});

	dispatch({
		type: FETCH_PERSONAL_DATA,
		payload: data
	});

}
