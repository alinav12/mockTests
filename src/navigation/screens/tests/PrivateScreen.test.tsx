import {render, fireEvent, act} from '@testing-library/react-native';
import PrivateScreen from '../PrivateScreen';

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  return {
    ...ActualReactRedux,
    useSelector: jest.fn().mockImplementation(() => {
      return {
        user: {},
        loading: false,
        error: '',
      };
    }),
  };
});

describe('use-debounce test', () => {
  jest.spyOn(global, 'setTimeout');
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it('should handle use-debounce', () => {
    const utils = render(<PrivateScreen />);

    const input = utils.getByLabelText('user-input');
    expect(setTimeout).toBeCalledTimes(0);
    fireEvent.changeText(input, '123');
    jest.advanceTimersByTime(100);
    expect(setTimeout).toBeCalledTimes(1);
    jest.advanceTimersByTime(1500);
    expect(setTimeout).toBeCalledTimes(2);
    fireEvent.changeText(input, '123');
    jest.advanceTimersByTime(1000);
    expect(setTimeout).toBeCalledTimes(3);
    // act(() => {
    //   jest.runOnlyPendingTimers();
    // });
    // expect(setTimeout).toBeCalledTimes(2);

    // fireEvent.changeText(input, '12345');
    // act(() => {
    //   jest.runOnlyPendingTimers();
    // });
    // expect(setTimeout).toBeCalledTimes(3);
  });
});
