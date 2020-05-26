import React, { useState } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const ConductTransaction = () => {
	const [recipient, setRecipient] = useState("");
	const [amount, setAmount] = useState(0);

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
		</div>
	);
};

export default ConductTransaction;
