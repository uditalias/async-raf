/**
 * Get async animation frame context
 * 
 * Usage:
 * 		
 * 		// All callbacks will be execute inside `requestAnimationFrame()`
 * 
 * 		asyncRaf(() => {
 * 			// get some properties that causes page reflow
 * 			const { offsetWidth, offsetHeight } = someElement;
 * 
 * 			// return a value to be resolved.
 * 			return offsetWidth * offsetHeight;
 * 		});
 * 
 * 		OR resolve it yourself
 * 
 * 		asyncRaf((resolve) => {
 * 			// get some properties that causes page reflow
 * 			const { offsetWidth, offsetHeight } = someElement;
 * 
 * 			// resolve the value.
 * 			resolve(offsetWidth * offsetHeight);
 * 		});
 * 
 * 		OR use async callback
 * 
 * 		asyncRaf(async () => {
 * 			// get some properties that causes page reflow
 * 			const { offsetWidth, offsetHeight } = someElement;
 * 
 * 			const area = await calculateElementArea(offsetWidth, offsetHeight);
 * 
 * 			return area;
 * 		});
 */
module.exports = function asyncRaf(fn) {
	return new Promise((resolve, reject) => {
		window.requestAnimationFrame(async () => {
			if (fn.length >= 1) {
				fn(resolve, reject);
			} else {
				try {
					resolve(
						await fn()
					);
				} catch (e) {
					reject(e);
				}
			}
		});
	});
}