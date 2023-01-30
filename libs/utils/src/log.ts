export const log = (...args: unknown[]) => {
    if (process.env['NODE_ENV'] !== 'production') {
        console.log(...args);
    }
};
