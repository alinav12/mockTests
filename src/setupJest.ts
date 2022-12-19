import mockClipboard from '@react-native-clipboard/clipboard/jest/clipboard-mock.js';
// import './mock-safe-area-context'
import './navigation/screens/tests/__mocks__/react-native-encrypted-storage/index';

require('jest-fetch-mock').enableMocks();

jest.mock('@react-native-clipboard/clipboard', () => mockClipboard);
