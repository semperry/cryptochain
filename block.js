class Block {
	constructor({ timestamp, lastHash, hash, data }) {
		this.timestamp = timestamp;
		this.lastHash = lastHash;
		this.hash = hash;
		this.data = data;
	}
}

const block1 = new Block({
	hash: "hash",
	data: "data",
	timestamp: "01/01/01",
	lastHash: "last-hash",
});

console.log("block1", block1);
