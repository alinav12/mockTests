let text = '';
const mockClipboard = {
  // getString: jest.fn().mockResolvedValue(text),

  getString: jest.fn().mockImplementation(() => {
    return Promise.resolve(text);
  }),

  setString: jest.fn().mockImplementation((newText: string) => {
    text = newText;
  }),
};

export default mockClipboard;
