
export const FETCH_HOME_DATA = 'HOME/FETCH_HOME_DATA';

export const fetchHomeData = async (dispatch) => {

	const data = await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				articles: [
					{
						id: 1,
						title: 'title one',
						content: 'content one'
					},
					{
						id: 2,
						title: 'title two',
						content: 'content two'
					}
				]
			})
		}, 2000)
	})

	dispatch({
		type: FETCH_HOME_DATA,
		payload: data
	});
}
