import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const App = () => {
	const [walletInfo, setWalletInfo] = useState({
		address: "",
		balance: 0,
	});

	const { address, balance } = walletInfo;

	useEffect(() => {
		fetch("http://localhost:3000/api/wallet-info")
			.then((res) => res.json())
			.then((data) => setWalletInfo({ ...data }));
	}, []);

	return (
		<div className="App">
			<img className="logo" src={logo} alt="logo" />
			<br />
			<div>Welcome to the blockchain...</div>
			<br />
			<div>
				<Link to="/blocks">Blocks</Link>
			</div>
			<div>
				<Link to="/conduct-transaction">Conduct a Transaction</Link>
			</div>
			<br />

			<div className="WalletInfo">
				<div>Address: {address} </div>
				<div>Balance: {balance} </div>
			</div>
		</div>
	);
};

export default App;
