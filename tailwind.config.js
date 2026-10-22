/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          bg: 'var(--color-paper-bg)',
          sheet: 'var(--color-paper-sheet)',
          warm: 'var(--color-paper-warm)',
          kraft: 'var(--color-paper-kraft)',
          line: 'var(--color-paper-line)',
        },
        ink: {
          DEFAULT: 'var(--color-ink-primary)',
          secondary: 'var(--color-ink-secondary)',
          muted: 'var(--color-ink-muted)',
        },
        accent: {
          olive: 'var(--color-accent-olive)',
          brick: 'var(--color-accent-brick)',
          kraft: 'var(--color-accent-kraft)',
          yellow: 'var(--color-note-yellow)',
          blue: 'var(--color-note-blue)',
          blueInk: 'var(--color-accent-blue-ink)',
        }
      },
      fontFamily: {
        hand: ['var(--font-hand-en)', 'var(--font-hand-zh)', 'cursive'],
        handZh: ['var(--font-hand-zh)', 'var(--font-hand-en)', 'cursive'],
        body: ['var(--font-body-zh)', 'sans-serif'],
        serifZh: ['var(--font-serif-zh)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'paper': '2px 3px 0px rgba(40, 41, 35, 0.08), 0 8px 20px -4px rgba(40, 41, 35, 0.06)',
        'paper-hover': '4px 6px 0px rgba(40, 41, 35, 0.14), 0 14px 28px -6px rgba(40, 41, 35, 0.10)',
        'sticky': '3px 4px 0px rgba(40, 41, 35, 0.10), 0 6px 14px rgba(40, 41, 35, 0.06)',
        'sketch': '2px 2px 0px #282923',
      }
    },
  },
  plugins: [],
}
