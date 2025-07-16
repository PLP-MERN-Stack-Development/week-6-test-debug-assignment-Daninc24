import { formatDate, validateEmail } from '../../utils';

describe('formatDate', () => {
  it('formats a date string to MM/DD/YYYY', () => {
    expect(formatDate('2023-01-15')).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
  });
});

describe('validateEmail', () => {
  it('returns true for valid emails', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });
  it('returns false for invalid emails', () => {
    expect(validateEmail('invalid-email')).toBe(false);
    expect(validateEmail('test@.com')).toBe(false);
    expect(validateEmail('test@com')).toBe(false);
  });
}); 