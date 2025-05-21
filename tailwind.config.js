/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sfRegular: ['SF-Pro-regular', 'sans-serif'],
        sfMedium: ['SFProDisplay-Medium', 'sans-serif'],
        sfLight: ['SFProDisplay-Light', 'sans-serif'],
        daMiOne: ['DaMiOne-Regular', 'sans-serif'],
        sfRoundedBold: ['FontsFree-Net-SF-Compact-Rounded-Bold', 'sans-serif'],
        sfRoundedMedium: ['FontsFree-Net-SF-Compact-Rounded-Medium', 'sans-serif'],
        sfRoundedRegular: ['FontsFree-Net-SF-Compact-Rounded-Regular', 'sans-serif'],
        sfUltraLight: ['SFProDisplay-Ultralight', 'sans-serif'],
        geistMono: ['GeistMonoVF', 'sans-serif'],
        novoposelensky: ['Novoposelensky', 'sans-serif'],
        tourney: ['Tourney-Regular', 'sans-serif'],
        MichromaReg:['Michroma-Regular','sans-serif'],
        Black:['Black','sans-serif']
      },
      boxShadow: {
        'custom': '0 4px 15px #B49C80', // кастомная мягкая тень
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, rgba(199, 226, 211, 0.5) 43%, rgba(24, 79, 248, 0.5) 100%)',
      },
      
      fontSize: {
        '30px-12px': 'clamp(0.75rem, 0.4167rem + 1.6667vw, 1.875rem)', // Размер шрифта, адаптирующийся к экрану
        '20px-11px': 'clamp(0.6875rem, 0.5208rem + 0.8333vw, 1.25rem)', // Меньший размер для адаптации
        '16px-11px': 'clamp(0.6875rem, 0.5949rem + 0.463vw, 1rem)',
        '42px-16px': 'clamp(1rem, 0.5185rem + 2.4074vw, 2.625rem)',
        '40px-11px':'clamp(0.6875rem, 0.1505rem + 2.6852vw, 2.5rem)',
        '24px-15px':'clamp(0.9375rem, 0.7708rem + 0.8333vw, 1.5rem)'
      },
      colors: {
        blue_primary: '#293D7A',
        secondary: '#FF6347',
        bz_foot:'#E8E2CF',
      },
      screens: {
        'xs': '480px',       // Кастомное разрешение для очень маленьких экранов (например, смартфонов)
        'xxs': '320px',       // Кастомное разрешение для очень маленьких экранов (например, смартфонов)
        'sm': '640px',       // Стандартное малое разрешение Tailwind
        'md': '903px',       // Стандартное среднее разрешение Tailwind
        'lg': '1024px',      // Стандартное большое разрешение Tailwind
        'xl': '1280px',      // Стандартное разрешение для очень больших экранов
        '2xl': '1536px',     // Стандартное очень большое разрешение Tailwind
        '5xl': '2000px',     // Стандартное очень большое разрешение Tailwind
        'custom-lg': '1400px', // Кастомное разрешение, например, для больших мониторов
      },
    },
  },
  plugins: [],
};

