/**
 * @see {@link https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration | 文档}查看文档
 *
 */
export default {
  '**/*.{js,mjs,cjs,ts,jsx,tsx}': (fileNames) => {
    return [
      `pnpm exec eslint ${fileNames.join(' ')}`,
      `pnpm exec prettier -w ${fileNames.join(' ')}`,
    ];
  },
};
