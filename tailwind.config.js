/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/partials/**/*.ejs',
    './views/**/*.ejs',
    './server.js',
    './config/**/*.js',
    './controllers/**/*.js',
    './middleware/**/*.js',
    './models/**/*.js',
    './routes/**/*.js',
    "./views/**/*.ejs"
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#29474A',
        'light-green': '#B0BDA2',
      },
      fontFamily: {
        header: ['Montserrat'],
        body: ['Karla']
      }
    },
  },
  plugins: [],
}

