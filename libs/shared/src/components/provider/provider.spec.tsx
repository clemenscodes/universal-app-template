import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from './provider';

describe('Provider', () => {
    it('should render successfully', () => {
        const { container } = render(<Provider />);
        expect(container).toBeTruthy();
    });
});
