/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                linkblue: '#1070e1d9',
                ashgray: '#58667E',
                buttonblue: '#3861FB',
                buttonbluehover: '#3359E7',
                subscribebg: '#F8FAFD',
                hrcolor: '#EFF2F5',
                whitegd1: '#ffffffff',
                whitegd0: '#ffffff00',
            },

            screens: {
                max1280: { max: '1279px' },
                max_sm: { max: '640px' },
                max_md: { max: '1024px' },
                max_sm: { max: '768px' },
            },
        },
    },
    plugins: [],
}
