# async-raf [![npm version](https://badge.fury.io/js/async-raf.svg)](https://badge.fury.io/js/async-raf)
_Get async animation frame context_


### Install
`npm install --save async-raf`

### Why?

When you want to get a value from requestAnimationFrame, instead of:

```javascript
const area = await new Promise((resolve) => {
    window.requestAnimationFrame(() => {
        cosnt { offsetWidth, offsetHeight } = someElement;
        resolve(offsetWidth * offsetHeight);
    });
});
```

You can use AsynRAF:

```javascript
const area = await asyncRaf(() => {
    cosnt { offsetWidth, offsetHeight } = someElement;
    return offsetWidth * offsetHeight;
});
```

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