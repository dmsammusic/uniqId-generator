import { nanoid, uuid, otp } from './main'; // Update with actual import path

describe('ID Generation Module', () => {
	describe('nanoid', () => {
		it('should generate a string of default length 21', () => {
			const id = nanoid();
			expect(id).toHaveLength(21);
		});

		it('should generate a string of specified custom length', () => {
			const customLength = 10;
			const id = nanoid(customLength);
			expect(id).toHaveLength(customLength);
		});

		it('should generate unique identifiers', () => {
			const id1 = nanoid();
			const id2 = nanoid();
			expect(id1).not.toBe(id2);
		});

		it('should only contain valid characters', () => {
			const id = nanoid();
			const validChars = /^[0-9a-zA-Z_-]+$/;
			expect(validChars.test(id)).toBeTruthy();
		});
	});

	describe('uuid', () => {
		it('should generate a valid UUID string', () => {
			const id = uuid();
			const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
			expect(uuidRegex.test(id)).toBeTruthy();
		});

		it('should generate unique UUIDs', () => {
			const id1 = uuid();
			const id2 = uuid();
			expect(id1).not.toBe(id2);
		});
	});

	describe('otp', () => {
		it('should generate a 6-digit OTP by default', () => {
			const code = otp();
			expect(code).toHaveLength(6);
			expect(/^\d+$/.test(code)).toBeTruthy();
		});

		it('should generate OTP of specified length', () => {
			const customLength = 4;
			const code = otp(customLength);
			expect(code).toHaveLength(customLength);
			expect(/^\d+$/.test(code)).toBeTruthy();
		});

		it('should generate different OTPs', () => {
			const code1 = otp();
			const code2 = otp();
			expect(code1).not.toBe(code2);
		});
	});
});
