const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    let { partitionKey } = event;
    candidate = partitionKey
      ? partitionKey
      : makeCandidate(JSON.stringify(event));
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  }

  return candidate.length > MAX_PARTITION_KEY_LENGTH
    ? makeCandidate(candidate)
    : candidate;
};

function makeCandidate(data) {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}
