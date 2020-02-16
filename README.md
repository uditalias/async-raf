# async-raf
Get async animation frame context

### Install
`npm install --save async-raf`

### Usage
```javascript
// All callbacks will be execute inside `requestAnimationFrame()`

asyncRaf(() => {
	// get some properties that causes page reflow
	const { offsetWidth, offsetHeight } = someElement;
	// return a value to be resolved.
	return offsetWidth * offsetHeight;
});

// OR resolve it yourself
asyncRaf((resolve) => {
	// get some properties that causes page reflow
	const { offsetWidth, offsetHeight } = someElement;
	// resolve the value.
	resolve(offsetWidth * offsetHeight);
});

// OR use async callback
asyncRaf(async () => {
	// get some properties that causes page reflow
	const { offsetWidth, offsetHeight } = someElement;
	const area = await calculateElementArea(offsetWidth, offsetHeight);
	return area;
});
```

### License
[MIT]("LICENSE")