export const desopiteMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: "deposite",
			payload: amount,
		});
	};
};

export const withdrawMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: "withdraw",
			payload: amount,
		});
	};
};
