module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: {
          'yellow': '#FFEECC', 
          'yellowClar': '#FFF8EA',
          'greyClar': '#DEDEDE', 
          'greenOp': 'rgb(0,127,102,0.8)',
          'green': 'rgb(0,127,102)',
          
        },
        div: {
          'blue': '#33658A', 
          'blueClar': '#4FA5E3',
          'white': 'rgb(255,255,255, 0.7)',
          'blueOp': 'rgb(51,101,138, 0.8)',
          'green': 'rgb(0,127,102)',
          'red': '#FF0000',
        }
      },
      fontFamily: {
        police: ['Montserrat Alternates'],
        Annie: ['Annie Use Your Telescope'],
        roboto: ['Roboto']
      },
    },
  },
  plugins: [],
}