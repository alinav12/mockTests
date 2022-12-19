import ReactNativeBiometrics from 'react-native-biometrics';

jest.mock('react-native-biometrics', () => {
  return jest.fn().mockImplementation(() => {
    return {
      isSensorAvailable: jest.fn().mockImplementation(() => {
        return Promise.resolve({
          available: true,
          biometryType: 'TouchID',
          error: undefined,
        });
      }),
      simplePrompt: jest
        .fn()
        .mockImplementation(
          ({promptMessage, fallbackPromptMessage, cancelButtonText}) =>
            Promise.resolve({
              success: true,
              error: undefined,
            }),
        ),
    };
  });
});

describe('FaceIdComponent', () => {
  beforeEach(() => {
    ReactNativeBiometrics.mockClear();
  });
  it('should handle faceid properly', async () => {
    console.log('start');
    expect(ReactNativeBiometrics).not.toHaveBeenCalled();

    const rnBiometrics = new ReactNativeBiometrics();
    expect(ReactNativeBiometrics).toHaveBeenCalledTimes(1);

    const {available, biometryType} = await rnBiometrics.isSensorAvailable();

    expect(available).toBeTruthy();
    expect(biometryType).toBe('TouchID');

    const {success} = await rnBiometrics.simplePrompt({
      promptMessage: '',
      fallbackPromptMessage: '',
      cancelButtonText: '',
    });
    expect(success).toBeTruthy();
  });
});
