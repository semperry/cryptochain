import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Transaction from "./Transaction";

const TransactionPool = () => {
	const [transactionPoolMap, setTransactionPoolMap] = useState({});

	const fetchTransactionPoolMap = () => {
		fetch("http://localhost:3000/api/transaction-pool-map")
			.then((res) => res.json())
			.then((data) => setTransactionPoolMap(data))
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		fetchTransactionPoolMap();
	}, []);

	return (
		<div className="TransactionPool">
			<div>
				<Link to="/">Home</Link>
			</div>
			<h3>Transaction Pool</h3>
			{Object.values(transactionPoolMap).map((transaction) => {
				return (
					<div key={transaction.id}>
						<hr />
						<Transaction transaction={transaction} />
					</div>
				);
			})}
		</div>
	);
};

export default TransactionPool;
