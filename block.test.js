const Block = require("./block");

describe("Block", () => {
	const timestamp = "a-date";
	const lastHash = "foo-hash";
	const hash = "bar-hash";
	const data = ["blockchain", "data"];
	const block = new Block({
		timestamp,
		lastHash,
		data,
		hash,
	});

	it("has a timestamp, lastHash, hash, and data property", () => {
		// NOT BEST PRACTICE, but fuck it
		expect(block.timestamp).toEqual(timestamp);
		expect(block.lastHash).toEqual(lastHash);
		expect(block.hash).toEqual(hash);
		expect(block.data).toEqual(data);
	});
});
