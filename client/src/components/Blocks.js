import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Block from "./Block";

const Blocks = () => {
	const [blocks, setBlocks] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/api/blocks")
			.then((res) => res.json())
			.then((data) => setBlocks(data))
			.catch((err) => console.error(err));
	}, []);

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
			{renderBlocks()}
		</div>
	);
};

export default Blocks;
