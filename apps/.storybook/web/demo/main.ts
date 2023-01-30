import { rootMain } from '../../../../.storybook/main';
import type { StorybookConfig, Options } from '@storybook/core-common';

const config: StorybookConfig = {
    ...rootMain,
    core: { ...rootMain.core, builder: 'webpack5' },
    stories: [
        ...rootMain.stories,
        '../../../clients/web/demo/stories/**/*.stories.?(ts|tsx|js|jsx)',
    ],
    addons: [
        ...(rootMain.addons || []),
        '@nrwl/react/plugins/storybook',
        'storybook-addon-swc',
        'storybook-addon-next-router',
        {
            name: '@storybook/addon-react-native-web',
            options: {
                modulesToTranspile: ['solito', 'nativewind', 'moti'],
                babelPlugins: [
                    '@babel/plugin-proposal-export-namespace-from',
                    'react-native-reanimated/plugin',
                    'nativewind/babel',
                ],
            },
        },
    ],
    framework: '@storybook/react',
    webpackFinal: async (config, { configType }: Options) => {
        // apply any global webpack configs that might have been specified in .storybook/main.ts
        if (rootMain.webpackFinal) {
            config = await rootMain.webpackFinal(config, { configType } as Options);
        }

        // add your own webpack tweaks if needed
        return config;
    },
};

module.exports = config;
