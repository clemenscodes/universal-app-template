module.exports = {
    displayName: 'shared',
    resolver: '@nrwl/jest/plugins/resolver',
    preset: 'jest-expo/web',
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|moti|solito|next)',
    ],
    moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
    moduleNameMapper: {
        '\\.svg$': '@nrwl/expo/plugins/jest/svg-mock',
    },
};
