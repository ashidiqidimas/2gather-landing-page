const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        container: {
            center: true,
        },
        fontSize: {
          'base': ['1rem', '1rem'],
        },
        screens: {
            'tablet': '768px',
            'laptop': '1366px',
        },
        colors: {
            gray: colors.slate,
            white: colors.white,
        },
        extend: {
            fontFamily: {
                sans: ['Nunito', defaultTheme.fontFamily.sans],
            },
            colors: {
                primaryColor: {
                    50: '#E2F1FF',
                    100: '#B9DCFF',
                    200: '#8AC6FF',
                    300: '#53B0FF',
                    400: '#229DFF',
                    500: '#008CFF',
                    600: '#117DFF',
                    700: '#2369F6',
                    800: '#2A56E3',
                    900: '#3231C3',
                },
                textColor: {
                    'primary': '#0A1841',
                    'secondary': '#284575',
                    'tertiary': '#5E789C',
                }
            },
        },
    },
    plugins: [],
}
