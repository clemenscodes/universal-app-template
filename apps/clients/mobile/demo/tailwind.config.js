const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const { theme } = require(join(__dirname, '../../../../libs/shared/src/styles/theme'));

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        join(__dirname, './app/**/*!(*.stories|*.spec).{ts,tsx,html}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        ...theme,
    },
    plugins: [],
};
