import { act, waitFor } from '@testing-library/react-native';
export const fixTestingConsoleError = async () => await act(() => waitFor(() => 0));
