import React from 'react';
import { render } from '@testing-library/react-native';
import { HomeScreen } from './home';
import { fixTestingConsoleError } from '@test';
jest.mock('next/router', () => require('next-router-mock'));

describe('Home', () => {
    afterEach(fixTestingConsoleError);
    it('should render successfully', () => {
        const { container } = render(<HomeScreen />);
        expect(container).toBeTruthy();
    });
});
