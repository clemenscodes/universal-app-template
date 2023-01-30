module.exports = {
    displayName: 'mobile-demo',
    resolver: '@nrwl/jest/plugins/resolver',
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
    coverageDirectory: '../../../../coverage/apps/clients/mobile-demo',
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|moti|solito)',
    ],
    setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
    moduleNameMapper: {
        '\\.svg$': '@nrwl/expo/plugins/jest/svg-mock',
    },
};
