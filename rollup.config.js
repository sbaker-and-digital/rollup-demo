// rollup.config.js
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/main.js',
    output: {
        file: "dist/index.js",
        format: 'cjs',
    },
    external: ['the-answer'], // <-- suppresses external dependency warning
    plugins: [
        babel({ babelHelpers: 'bundled' })
    ]
};
