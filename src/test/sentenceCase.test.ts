
import { sentenceCase } from '../services/helpers';

describe('sentenceCase', () => {
  it('returns an empty string for an empty string', () => {
    expect(sentenceCase('')).toBe('');
  });

  it('returns the word unchanged if it is already capitalized', () => {
    expect(sentenceCase('Hello')).toBe('Hello');
  });

  it('capitalizes the first letter and lowers the rest for a lowercase word', () => {
    expect(sentenceCase('hello')).toBe('Hello');
  });

  it('capitalizes the first letter of the sentence', () => {
    expect(sentenceCase('this is a sentence')).toBe('This is a sentence');
  });
});
