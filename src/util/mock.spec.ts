import { mockPromise } from './mock';

describe('Mocks', () => {
	describe('mockPromise', () => {
		it('should return success', async () => {
			const promise = await mockPromise<string>('success');
			expect(promise).toBe('success');
		});
	});
});
