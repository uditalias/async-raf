const asyncRaf = require("./lib");

describe("asyncRaf", () => {

	it("should resolve by return value", async () => {

		const result = await asyncRaf(() => {
			return 1;
		});

		expect(result).toBe(1);
	});

	it("should resolve by resolve function", async () => {

		const result = await asyncRaf((resolve) => {
			resolve(1);
		});

		expect(result).toBe(1);
	});

	it("should resolve with async callback", async () => {

		window.requestAnimationFrame = jest.fn((cb) => setTimeout(cb, 16));

		const result = await asyncRaf(async () => {
			return 1;
		});

		expect(result).toBe(1);
		expect(window.requestAnimationFrame).toHaveBeenCalledTimes(1);
	});

});