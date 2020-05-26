import React, { useState } from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import history from "../history";

const ConductTransaction = () => {
	const [recipient, setRecipient] = useState("");
	const [amount, setAmount] = useState(0);

	const handleSubmit = () => {
		fetch(`${document.location.origin}/api/transact`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				recipient,
				amount,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				alert(data.message || data.type);
				history.push("/transaction-pool");
			})
			.catch((err) => console.error(err));
	};

	return (
		<div className="ConductTransaction">
			<Link to="/">Home</Link>
			<h3>Conduct a Transaction</h3>
			<FormGroup>
				<FormControl
					input="text"
					placeholder="recipient"
					value={recipient}
					onChange={(e) => setRecipient(e.target.value)}
				/>
			</FormGroup>
			<FormGroup>
				<FormControl
					input="text"
					placeholder="amount"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
			</FormGroup>
			<div>
				<Button bsStyle="danger" onClick={handleSubmit}>
					Submit
				</Button>
			</div>
		</div>
	);
};

export default ConductTransaction;
