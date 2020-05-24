import React, { useState, useEffect } from "react";
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
			{console.log("blocks", blocks)}
			<h3>Blocks</h3>
			{renderBlocks()}
		</div>
	);
};

export default Blocks;
