import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import Block from "./Block";

const Blocks = () => {
	const [blocks, setBlocks] = useState([]);
	const [paginatedId, setPaginatedId] = useState(1);
	const [blocksLength, setBlocksLength] = useState(0);

	useEffect(() => {
		fetch(`${document.location.origin}/api/blocks/length`)
			.then((res) => res.json())
			.then((data) => setBlocksLength(data));

		fetchPaginatedBlocks(paginatedId)();
	}, []);

	const fetchPaginatedBlocks = (paginatedId) => () => {
		fetch(`${document.location.origin}/api/blocks/${paginatedId}`)
			.then((res) => res.json())
			.then((data) => setBlocks(data))
			.catch((err) => console.error(err));
	};

	const renderBlocks = () => {
		return blocks.map((block) => {
			return <Block key={block.hash} block={block} />;
		});
	};

	return (
		<div>
			<div>
				<Link exact to="/">
					Home
				</Link>
			</div>
			<h3>Blocks</h3>
			<div>
				{[...Array(Math.ceil(blocksLength / 5)).keys()].map((key) => {
					const paginatedId = key + 1;

					return (
						<span key={key} onClick={fetchPaginatedBlocks(paginatedId)}>
							<Button bsSize="small" bsStyle="danger">
								{paginatedId}
							</Button>
						</span>
					);
				})}
			</div>
			{renderBlocks()}
		</div>
	);
};

export default Blocks;
