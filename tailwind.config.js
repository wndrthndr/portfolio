/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        // === Hero Blobs ===
        floatBlob: {
          '0%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
          '50%': { transform: 'translateY(-40px) translateX(30px) scale(1.1)' },
          '100%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
        },
    
        floatBlob2: {
          '0%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
          '50%': { transform: 'translateY(40px) translateX(-30px) scale(0.9)' },
          '100%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
        },
    
        // === Grain Pulse ===
        grainPulse: {
          '0%': { opacity: 0.05 },
          '50%': { opacity: 0.1 },
          '100%': { opacity: 0.05 },
        },
    
        // === Name Drop 3D ===
        nameDrop3D: {
          '0%': {
            transform: 'perspective(800px) translateZ(600px) rotateX(-15deg) scale(2)',
            opacity: '0',
          },
          '100%': {
            transform: 'perspective(800px) translateZ(0px) rotateX(0deg) scale(1)',
            opacity: '1',
          },
        },
    
        // === Soft Fade & Slide ===
        fadeSlideSoft: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
    
        // === Skills Card Animations ===
        slideCenter: {
          '0%': { transform: 'translateY(40px) scale(0.95)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
    
        slideLeft: {
          '0%': { transform: 'translateX(-120px) rotate(-4deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotate(-2deg)', opacity: '1' },
        },
    
        slideRight: {
          '0%': { transform: 'translateX(120px) rotate(4deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotate(2deg)', opacity: '1' },
        },
        scrapSpinIn: {
          "0%": {
            transform: "rotate(45deg) scale(0.6)",
            opacity: "0",
            transformOrigin: "top left"
          },
          "100%": {
            transform: "rotate(var(--final-rotation)) scale(1)",
            opacity: "1",
            transformOrigin: "top left"
          }
        }
        
      },
    
      animation: {
        // Hero Background
        floatBlob: 'floatBlob 10s ease-in-out infinite',
        floatBlob2: 'floatBlob2 14s ease-in-out infinite',
        grainPulse: 'grainPulse 6s ease-in-out infinite',
    
        // Hero Text
        nameDrop3D: 'nameDrop3D 1.4s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        fadeSlideSoft: 'fadeSlideSoft 1.4s ease-out forwards',
    
        // Skills Cards
        slideCenter: 'slideCenter 0.9s ease-out forwards',
        slideLeft: 'slideLeft 0.9s ease-out forwards',
        slideRight: 'slideRight 0.9s ease-out forwards',
        scrapSpinIn: "scrapSpinIn 0.9s ease-out forwards"

      }
      
    }
    
    
  },
  plugins: [],
};
