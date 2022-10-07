/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
  ],
  theme: {
    container: {
      padding: '0.85rem',
    },
    extend: {
      backgroundColor: {
        'theme-base': 'var(--theme-base)',
        'theme-base-100': 'var(--theme-base-100)',
        'theme-base-200': 'var(--theme-base-200)',

        'theme-gray': 'var(--theme-gray)',
        'theme-gray-100': 'var(--theme-gray-100)',

        'theme-slate': 'var(--theme-slate)',
        'theme-slate-100': 'var(--theme-slate-100)',
      },
      colors: {
        'theme-base': 'var(--theme-base)',
        'theme-base-100': 'var(--theme-base-100)',
        'theme-base-200': 'var(--theme-base-200)',

        'theme-gray': 'var(--theme-gray)',
        'theme-gray-100': 'var(--theme-gray-100)',

        'theme-slate': 'var(--theme-slate)',
        'theme-slate-100': 'var(--theme-slate-100)',

        'theme-facebook': 'var(--facebook)',
        'theme-twitter': 'var(--twitter)',
        'theme-instagram': 'var(--instagram)',
      },
      spacing: {
        gutter: 'var(--gutter)',
      },
      borderRadius: {
        base: 'var(--rounded-base)',
      },
      boxShadow: {
        primary: 'var(--shadow-primary)',
        'base-1': 'var(--shadow-shadow-base-1)',
        'base-2': 'var(--shadow-shadow-base-2)',
      },
    },
  },
}
