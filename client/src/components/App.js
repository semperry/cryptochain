import React, { useState, useEffect } from "react";

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
		<div>
			<div>Welcome to the blockchain...</div>
			<div>Address: {address} </div>
			<div>Balance: {balance} </div>
		</div>
	);
};

export default App;
