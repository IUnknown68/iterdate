import { join } from 'node:path';
import esbuild from 'rollup-plugin-esbuild';

const dist = 'dist';
const libName = 'iterdate';
const main = 'main';

function bundle(config) {
  return {
    ...config,
    input: join('src', `${main}.js`),
    external: (id) => !/^[./]/.test(id),
  };
}

export default [
  bundle({
    plugins: [
      esbuild(),
      // typescript({
      //   exclude: ['**/*.test.ts'],
      // }),
    ],

    output: [
      {
        file: join(dist, `${libName}.js`),
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: join(dist, `${libName}.mjs`),
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
];
