import { generateUserInitials } from '../services/helpers';

describe('generateUserInitials', () => {
  it('returns an empty string for an empty name', () => {
    expect(generateUserInitials('')).toBe('');
  });

  it('returns the first letter of a single-word name', () => {
    expect(generateUserInitials('John')).toBe('J');
  });

  it('returns initials for a multi-word name', () => {
    expect(generateUserInitials('John Doe')).toBe('JD');
  });

  it('returns initials in uppercase', () => {
    expect(generateUserInitials('jane doe')).toBe('JD');
  });

  it('handles names with spaces at the beginning or end', () => {
    expect(generateUserInitials('  John Doe  ')).toBe('JD');
  });

  it('handles names with multiple middle names', () => {
    expect(generateUserInitials('Chukwuma Ciroma Adekunle')).toBe('CCA');
  });
});

