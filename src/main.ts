import { randomUUID } from 'crypto';

export const nanoid = (length: number = 21) => {
	return crypto.getRandomValues(new Uint8Array(length)).reduce((accumulator, element) => {
		const maskedElement = element & 63;
		if (maskedElement < 36) return accumulator + maskedElement.toString(36);
		else if (maskedElement < 62) return accumulator + (maskedElement - 26).toString(36).toUpperCase();
		else if (maskedElement === 62) return accumulator + '_';
		else return accumulator + '-';
	}, '');
};

export const uuid = () => {
	return randomUUID().toString();
};

export const otp = (length: number = 6): string => {
	const numberString = '0123456789';
	let otp = '';
	for (let i = 0; i < length; i++) {
		otp += numberString.charAt((Math.random() * numberString.length) | 0);
	}
	return otp;
};
