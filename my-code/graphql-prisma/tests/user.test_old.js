import { getFirstName, isValidPassword } from '../src/utils/user.js';

test('should return first name when given full name', () => {
    const fname = getFirstName('First Name');
    expect(fname).toBe('First');
});

test('should return firstname when supplied firstname', () => {
    const fname = getFirstName('First');
    expect(fname).toBe('First');
});


test('should return false when password length < 8', () => {
    const isValid = isValidPassword('abcd');
    expect(isValid).toBe(false);
});

test('should return true when password >=8', () => {
    const isValid = isValidPassword('abcd1234');
    expect(isValid).toBe(true);
});