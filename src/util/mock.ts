export const mockPromise = <T>(
	returnValue: T,
	fulfill = true,
	timeout = 1000
) =>
	new Promise<T>(function (resolve, reject) {
		setTimeout(() => {
			fulfill ? resolve(returnValue) : reject('Error message');
			return;
		}, timeout);
	});
