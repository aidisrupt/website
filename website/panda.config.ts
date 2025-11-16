import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'
import orange from '@park-ui/panda-preset/colors/orange'
import slate from '@park-ui/panda-preset/colors/slate'
import typographyPreset from 'pandacss-preset-typography'
export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ['./app/routes/**/*.{ts,tsx,js,jsx}', './app/components/**/*.{ts,tsx,js,jsx}'],
    presets: [
        typographyPreset(),
        '@pandacss/preset-base',
        createPreset({
            accentColor: orange,
            grayColor: slate,
            radius: 'sm',
        }),
    ],

    jsxFramework: 'react',

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        breakpoints: {
            xxs: '340px',
            xs: '400px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '1.5xl': '1440px',
            '2xl': '1536px',
            '3xl': '1792px',
            '4xl': '1920px',
            '5xl': '2100px',
            '6xl': '2560px',
        },
        extend: {
            semanticTokens: {
                colors: {
                    // Or whatever name you've set as the semantic tokens
                    // prefix or recipe name
                    prose: {
                        body: {
                            value: '{colors.slate.dark.7}',
                        },
                        heading: {
                            value: '{colors.slate.dark.9}',
                        },
                        lead: {
                            value: '{colors.slate.dark.6}',
                        },
                        link: {
                            value: '{colors.slate.dark.2}',
                        },
                        bold: {
                            value: '{colors.slate.dark.9}',
                        },
                        counter: {
                            value: '{colors.slate.dark.5}',
                        },
                        bullet: {
                            value: '{colors.slate.dark.3}',
                        },
                        hrBorder: {
                            value: '{colors.slate.dark.2}',
                        },
                        quote: {
                            value: '{colors.slate.dark.9}',
                        },
                        quoteBorder: {
                            value: '{colors.slate.dark.2}',
                        },
                        caption: {
                            value: '{colors.slate.dark.5}',
                        },
                        kbd: {
                            value: '{colors.slate.dark.9}',
                        },
                        kbdShadow: {
                            // Expects an RGB value
                            value: '0 0 0',
                        },
                        code: {
                            value: '{colors.slate.dark.9}',
                        },
                        preCode: {
                            value: '{colors.slate.dark.2}',
                        },
                        preBg: {
                            value: '{colors.slate.dark.8}',
                        },
                        thBorder: {
                            value: '{colors.slate.dark.3}',
                        },
                        tdBorder: {
                            value: '{colors.slate.dark.2}',
                        },
                    },
                },
            },
        tokens: {
            colors: {
            'sunset-purple': { value: '#6C3DFF' },     // top gradient
            'sunset-pink': { value: '#E94057' },       // mid gradient
            'sunset-orange': { value: '#F27121' },     // bright orange
            'sunset-yellow': { value: '#FFD452' },     // horizon glow
            'midnight-blue': { value: '#0B132B' },     // deep navy background
            'teal-city': { value: '#1B9AAA' },         // teal accents
            'charcoal': { value: '#121212' },          // outlines
            'off-white': { value: '#F8F8F8' },         // clean text
            'shadow-blue': { value: '#2E3A59' },       // dark shadow
            'overlay-white': { value: 'rgba(255,255,255,0.85)' }, // overlay
            },
            fonts: {
            display: { value: '"Press Start 2P", "Ubuntu", sans-serif' },
            body: { value: 'Inter, "Ubuntu", sans-serif' },
            },
            zIndex: { '9999': { value: 9999 } },
      },

      keyframes: {
        rotateText: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
    },
  },

  outdir: 'app/styled-system',
})