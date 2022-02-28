import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
const Shop = () => {
	const dispatch = useDispatch();
	const { withdrawMoney, desopiteMoney } = bindActionCreators(
		actionCreators,
		dispatch
	);
	return (
		<div className="p-4">
			<h4>Deposite/Withdraw Money</h4>
			<button
				className="btn btn-primary mx-2"
				onClick={() => withdrawMoney(100)}
			>
				-
			</button>
			Update your Balance
			<button
				className="btn btn-primary mx-2"
				onClick={() => desopiteMoney(100)}
			>
				+
			</button>
			{/* <button
				className="btn btn-primary mx-2"
				onClick={() => {
					dispatch(actionCreators.withdrawMoney(100));
				}}
			>
				-
			</button>
			Update your Balance
			<button
				className="btn btn-primary mx-2"
				onClick={() => {
					dispatch(actionCreators.desopiteMoney(100));
				}}
			>
				+
			</button> */}
		</div>
	);
};

export default Shop;
