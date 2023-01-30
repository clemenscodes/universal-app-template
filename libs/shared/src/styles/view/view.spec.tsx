import React from 'react';
import { render } from '@testing-library/react-native';
import { View } from './view';

describe('View', () => {
    it('should render successfully', () => {
        const { container } = render(<View />);
        expect(container).toBeTruthy();
    });
});
