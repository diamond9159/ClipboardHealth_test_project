const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("When given input but no partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ name: "custom" });
    expect(trivialKey).toBe(
      "366f93026a8c348f506811bab633594418024b219acfc58204c56f18d6dc48924f41dea09febc0c84d063787d28c40205a5eb4f26c3fda97cc4fa0fcf7d6ba65"
    );
  });

  it("When given input with partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "123" });
    expect(trivialKey).toBe("123");
  });

  it("When given input with partitionKey not string", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: [123, 456] });
    expect(trivialKey).toBe("[123,456]");
  });
});
