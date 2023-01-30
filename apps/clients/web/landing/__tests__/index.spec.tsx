import React from 'react';
import { render } from '@testing-library/react';
jest.mock('next/router', () => require('next-router-mock'));

console.log = jest.fn();

import Index from '../pages/index';

describe('Index', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Index />);
        expect(baseElement).toBeTruthy();
    });
});
