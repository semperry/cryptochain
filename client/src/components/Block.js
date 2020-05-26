import React, { useState } from "react";
import { Button } from "react-bootstrap";

import Transaction from "./Transaction";

const Block = (props) => {
	const [displayTransaction, setDisplayTransaction] = useState(false);
	const { timestamp, data, hash } = props.block;

	const hashDisplay = `${hash.substring(0, 15)}...`;

	const renderTransaction = () => {
		const stringifiedData = JSON.stringify(data);

		const dataDisplay =
			stringifiedData.length > 35
				? `${stringifiedData.substring(0, 35)}...`
				: stringifiedData;

		return (
			<div>
				{displayTransaction ? (
					<div>
						{data.map((transaction) => (
							<div key={transaction.id}>
								<hr />
								<Transaction transaction={transaction} />
							</div>
						))}
					</div>
				) : null}
				<Button
					bsStyle="danger"
					bsSize="small"
					onClick={() => setDisplayTransaction(!displayTransaction)}
				>
					{displayTransaction ? "Show Less" : "Show More"}
				</Button>
			</div>
		);
	};

	return (
		<div className="Block">
			<div>Hash: {hashDisplay}</div>
			<div>Timestamp: {new Date(timestamp).toLocaleString()}</div>
			{renderTransaction()}
		</div>
	);
};

export default Block;
