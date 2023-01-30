import React from 'react';
import { render } from '@testing-library/react-native';
import Index from '../pages/index';
jest.mock('next/router', () => require('next-router-mock'));

console.log = jest.fn();

describe('Index', () => {
    it('should render successfully', () => {
        const { container } = render(<Index />);
        expect(container).toBeTruthy();
    });
});
