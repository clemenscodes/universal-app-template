import React from 'react';
import { render } from '@testing-library/react-native';
import { fixTestingConsoleError } from '@test';
import * as Typography from './typography';
jest.mock('next/router', () => require('next-router-mock'));

describe('Typography', () => {
    afterEach(fixTestingConsoleError);

    it('should render p successfully', () => {
        const { container } = render(<Typography.P />);
        expect(container).toBeTruthy();
    });

    it('should render h1 successfully', () => {
        const { container } = render(<Typography.H1 />);
        expect(container).toBeTruthy();
    });

    it('should render a successfully', () => {
        const { container } = render(<Typography.A />);
        expect(container).toBeTruthy();
    });

    it('should render text successfully', () => {
        const { container } = render(<Typography.Text />);
        expect(container).toBeTruthy();
    });

    describe('TextLink', () => {
        it('should apply the style prop to the text', () => {
            const { getByText } = render(
                <Typography.TextLink href="/" style={{ color: 'red' }}>
                    Link
                </Typography.TextLink>
            );
            const element = getByText('Link');
            expect(element).toHaveStyle({ color: 'red' });
        });
        it('should apply the text-base font-bold hover:underline text-blue-500 class to the element', () => {
            const classes = 'text-base font-bold hover:underline text-blue-500';
            const { getByText } = render(<Typography.TextLink href="/">Link</Typography.TextLink>);
            const element = getByText('Link');
            const values = Object.values(element.props.style[0][0]);
            expect(values[1]).toContain(classes);
        });
    });
});
