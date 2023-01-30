import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { NavigationContainer } from '@react-navigation/native';

export const NavigationDecorator = (story) => {
    return <NavigationContainer independent={true}>{story()}</NavigationContainer>;
};

export const decorators = [withBackgrounds, NavigationDecorator];

export const parameters = {
    backgrounds: {
        default: 'plain',
        values: [
            { name: 'plain', value: 'white' },
            { name: 'warm', value: 'hotpink' },
            { name: 'cool', value: 'deepskyblue' },
        ],
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
