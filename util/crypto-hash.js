const crypto = require("crypto");

const cryptoHash = (...inputs) => {
	const hash = crypto.createHash("sha256");

	hash.update(
		inputs
			.map((input) => JSON.stringify(input))
			.sort()
			.join(" ")
	);

	// Digest is a term in cryptography that means the result
	return hash.digest("hex");
};

module.exports = cryptoHash;
