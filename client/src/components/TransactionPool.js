import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import history from "../history";
import Transaction from "./Transaction";

const POLL_INTERVAL_MS = 10000;

const TransactionPool = () => {
	const [transactionPoolMap, setTransactionPoolMap] = useState({});

	const fetchTransactionPoolMap = () => {
		fetch(`${document.location.origin}/api/transaction-pool-map`)
			.then((res) => res.json())
			.then((data) => setTransactionPoolMap(data))
			.catch((err) => console.error(err));
	};

	const handleMining = () => {
		fetch(`${document.location.origin}/api/mine-transactions`).then((res) => {
			if (res.status === 200) {
				alert("success");
				history.push("/blocks");
			} else {
				alert("The mine-transactions block request did not complete.");
			}
		});
	};

	useEffect(() => {
		fetchTransactionPoolMap();
		const poolInterval = setInterval(() => {
			fetchTransactionPoolMap();
		}, POLL_INTERVAL_MS);

		return () => clearInterval(poolInterval);
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
			<hr />
			<Button bsStyle="danger" onClick={handleMining}>
				Mine the Transactions
			</Button>
		</div>
	);
};

export default TransactionPool;
