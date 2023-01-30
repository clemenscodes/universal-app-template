import React from 'react';
import { render } from '@testing-library/react-native';
import { Row } from './layout';

describe('Layout', () => {
    it('should render successfully', () => {
        const { container } = render(<Row />);
        expect(container).toBeTruthy();
    });
});
