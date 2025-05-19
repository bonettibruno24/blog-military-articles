module.exports = {
  content: [
    './*.html',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        blueAdapted: '#0067cc',
        grayCustom: '#a0a0a0',
        grayGelato: '#595959',
        blackRecent: '#282828',
      }
    }
  },
  plugins: []
}