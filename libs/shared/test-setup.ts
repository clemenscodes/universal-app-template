/* eslint-disable @typescript-eslint/no-var-requires */
import '@testing-library/jest-native/extend-expect';
// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';
require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();
jest.mock(
    'react-native-safe-area-context',
    () => require('react-native-safe-area-context/jest/mock').default
);
// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');

    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    Reanimated.default.call = () => {};

    return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
