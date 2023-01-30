import * as React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from '../app';

test('renders correctly', () => {
    const { getByTestId } = render(
        <NavigationContainer>
            <App />
        </NavigationContainer>
    );
    expect(getByTestId('heading')).toHaveTextContent('Welcome to Solito.');
});
