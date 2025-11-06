import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        fontFamily: [
            '"Inter"',
            '"Poppins"', 
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
        },
        h2: {
            fontFamily: '"Poppins", sans-serif', 
            fontWeight: 600,
        },
        h3: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
        },
        h4: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 500,
        },
        body1: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 400,
            lineHeight: 1.7,
        },
        body2: {
            fontFamily: '"Inter", sans-serif', 
            fontWeight: 400,
            lineHeight: 1.6,
        },
        button: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 500,
            textTransform: 'none' as const,
        },
    },
    palette: {
        primary: {
            main: '#232323',
            light: '#2a2a2a',
            dark: '#1a1a1a',
        },
        secondary: {
            main: '#2563eb',
            light: '#60a5fa',
            dark: '#1d4ed8',
        },
        success: {
            main: '#10b981',
            light: '#34d399',
        },
        warning: {
            main: '#f59e0b',
            light: '#fbbf24',
        },
        info: {
            main: '#06b6d4',
            light: '#22d3ee',
        },
        error: {
            main: '#ef4444',
            light: '#f87171',
        },
    },
    spacing: 8,
    shadows: [
        'none',
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '0 2px 4px rgba(0,0,0,0.1)',
        '0 4px 8px rgba(0,0,0,0.12)',
        '0 8px 16px rgba(0,0,0,0.15)',
        '0 12px 24px rgba(0,0,0,0.18)',
        '0 16px 32px rgba(0,0,0,0.2)',
        '0 20px 40px rgba(0,0,0,0.22)',
        '0 24px 48px rgba(0,0,0,0.24)',
        '0 2px 8px rgba(37, 99, 235, 0.15)',
        '0 4px 16px rgba(37, 99, 235, 0.2)',
        '0 8px 24px rgba(37, 99, 235, 0.25)',
        '0 12px 32px rgba(37, 99, 235, 0.3)',
        '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14)',
        '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14)',
        '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14)',
        '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14)',
        '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14)',
        '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14)',
        '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14)',
        '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14)',
    ],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    padding: '10px 24px',
                    transition: 'all 0.3s ease',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                },
            },
        },
    },
});
theme = responsiveFontSizes(theme);

export default theme;