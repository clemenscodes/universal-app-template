import React from 'react';
import { render } from '@testing-library/react-native';
import { UserScreen } from './user';
import { fixTestingConsoleError } from '@test';
jest.mock('next/router', () => require('next-router-mock'));

describe('User', () => {
    afterEach(fixTestingConsoleError);
    it('should render successfully', () => {
        const { container } = render(<UserScreen />);
        expect(container).toBeTruthy();
    });
});
