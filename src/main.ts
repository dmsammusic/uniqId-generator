import { randomUUID } from 'crypto';

/**
 * @function nanoid
 * @description Generates a random string of the given length from [a-zA-Z0-9_-].
 * @param {number} [length=21] The length of the string to generate.
 * @returns {string}
 * @example
 * const id = nanoid(); // e.g., 'Co062ECzKSah7j8twYFLW'
 * const customId = nanoid(10); // e.g., 'aB3dE0G1hJ'
 */
export const nanoid = (length: number = 21): string => {
	return crypto.getRandomValues(new Uint8Array(length)).reduce((accumulator, element) => {
		const maskedElement = element & 63;
		if (maskedElement < 36) return accumulator + maskedElement.toString(36);
		else if (maskedElement < 62) return accumulator + (maskedElement - 26).toString(36).toUpperCase();
		else if (maskedElement === 62) return accumulator + '_';
		else return accumulator + '-';
	}, '');
};

/**
 * @function uuid
 * @description Generates a random UUID string.
 * @returns {string}
 * @example
 * const id = uuid(); // e.g., '30798c9d-e796-4001-ad4b-eee4e5992ffb'
 */
export const uuid = (): string => {
	return randomUUID().toString();
};

/**
 * @function otp
 * @description Generates a random number string of the given length.
 * @param {number} [length=6] The length of the string to generate.
 * @returns {string}
 * @example
 * const code = otp(); // e.g., '127654'
 * const customCode = otp(4); // e.g., '4821'
 */
export const otp = (length: number = 6): string => {
	const numberString = '0123456789';
	let otp = '';
	for (let i = 0; i < length; i++) {
		otp += numberString.charAt((Math.random() * numberString.length) | 0);
	}
	return otp;
};

