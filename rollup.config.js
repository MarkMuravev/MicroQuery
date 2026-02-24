import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { dts } from 'rollup-plugin-dts';

export default [{
    input: 'src/index.js',
    output: [
        {
            file: 'dist/microquery.esm.js',
            format: 'esm',
            sourcemap: true,
        },
        {
            file: 'dist/microquery.cjs',
            format: 'cjs',
            sourcemap: true,
            exports: 'named',
        },
        {
            file: 'dist/microquery.umd.js',
            format: 'umd',
            name: '$', // Глобальная переменная в браузере
            sourcemap: true,
            exports: 'named',
        },
    ],
    plugins: [
        resolve(), // Позволяет импортировать модули из node_modules
        commonjs(), // Позволяет импортировать CommonJS модули
    ],
    external: [] // внешние зависимости, которые не нужно бандлить 
}, {
    input: 'src/index.min.js',
    output: [
        {
            file: 'dist/microquery.esm.min.js',
            format: 'esm',
            sourcemap: true,
        },
        {
            file: 'dist/microquery.min.cjs',
            format: 'cjs',
            sourcemap: true,
            exports: 'named',
        },
        {
            file: 'dist/microquery.umd.min.js',
            format: 'umd',
            name: '$',
            sourcemap: true,
            exports: 'named',
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
    ],
    external: []
}, {
    input: 'src/index.d.ts',
    output: [{ file: 'dist/microquery.d.ts', format: 'es' }],
    plugins: [dts()],
}];