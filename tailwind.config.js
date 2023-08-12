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
    extend: {},
  },
  plugins: [],
}

