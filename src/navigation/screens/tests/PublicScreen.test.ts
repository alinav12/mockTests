import mockClipboard from './mockClipboard';

jest.mock('./Clipboard.ts', () => mockClipboard);

describe('mockClipboard', () => {
  const Clipboard = require('./Clipboard');

  it('should handle string with Clipboard', async () => {
    Clipboard.setString('test string');
    const result = await Clipboard.getString();
    const expected = 'test string';
    expect(result).toBe(expected);
  });
});
