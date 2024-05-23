/* eslint-env node */

module.exports = {
    root: true,
    env: { 
        browser: true,
        es2020: true,
        worker: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:node/recommended'
    ],
    ignorePatterns: [
        'dist/**/*',
        'node_modules/**/*',
    ]
};
