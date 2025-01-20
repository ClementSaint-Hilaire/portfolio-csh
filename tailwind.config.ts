import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	animation: {
  		marquee: 'marquee var(--duration) linear infinite',
  		'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  		'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
  		slide: 'slide var(--speed) ease-in-out infinite alternate',
  		orbit: 'orbit calc(var(--duration)*1s) linear infinite'
  	},
  	keyframes: {
  		'spin-around': {
  			'0%': {
  				transform: 'translateZ(0) rotate(0)'
  			},
  			'15%, 35%': {
  				transform: 'translateZ(0) rotate(90deg)'
  			},
  			'65%, 85%': {
  				transform: 'translateZ(0) rotate(270deg)'
  			},
  			'100%': {
  				transform: 'translateZ(0) rotate(360deg)'
  			}
  		},
  		slide: {
  			to: {
  				transform: 'translate(calc(100cqw - 100%), 0)'
  			}
  		},
  		marquee: {
  			from: {
  				transform: 'translateX(0)'
  			},
  			to: {
  				transform: 'translateX(calc(-100% - var(--gap)))'
  			}
  		},
  		'marquee-vertical': {
  			from: {
  				transform: 'translateY(0)'
  			},
  			to: {
  				transform: 'translateY(calc(-100% - var(--gap)))'
  			}
  		}
  	},
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-sans)',
                    ...fontFamily.sans
                ]
  		},
  		colors: {
  			pure_blanc: '#FFFFFF',
  			blanc: '#F5F5F7',
  			blanc_2: '#FAFAFA',
  			beige: '#F5F2EB',
  			gris: '#F5F5F5',
  			gris_2: '#75757A',
  			gris_3: '#454547',
  			gris_4: '#262626',
  			noir: '#1D1D1F',
  			pure_noir: '#000000',
  			bleu: '#0A84FF',
  			violet: '#9747FF',
  			vert: '#53CC28',
  			vert_2: '#68F636',
  			vert_3: '#02362D',
  			jaune: '#F6C136',
  			orange: '#FF4D06',
  			rouge: '#D62929',
  			'blue-start': 'rgba(10, 132, 255, 1)',
  			'blue-end': 'rgba(202, 232, 250, 1)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			
  		},
  		fontSize: {
  			sm: '9px',
  			m: '12px',
  			l: '17px',
  			xl: '21px',
  			'2xl': '26px',
  			'3xl': '36px',
  			'4xl': '56px',
  			'5xl': '80px'
  		},
  		borderRadius: {
  			none: '0',
  			rs: '9px',
  			rm: '12px',
  			rl: '16px',
  			rxl: '26px',
  			full: '9999px'
  		},
  		keyframes: {
  			orbit: {
  				'0%': {
  					transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'aurora-border': {
  				'0%, 100%': {
  					borderRadius: '37% 29% 27% 27% / 28% 25% 41% 37%'
  				},
  				'25%': {
  					borderRadius: '47% 29% 39% 49% / 61% 19% 66% 26%'
  				},
  				'50%': {
  					borderRadius: '57% 23% 47% 72% / 63% 17% 66% 33%'
  				},
  				'75%': {
  					borderRadius: '28% 49% 29% 100% / 93% 20% 64% 25%'
  				}
  			},
  			'aurora-1': {
  				'0%, 100%': {
  					top: '0',
  					right: '0'
  				},
  				'50%': {
  					top: '50%',
  					right: '25%'
  				},
  				'75%': {
  					top: '25%',
  					right: '50%'
  				}
  			},
  			'aurora-2': {
  				'0%, 100%': {
  					top: '0',
  					left: '0'
  				},
  				'60%': {
  					top: '75%',
  					left: '25%'
  				},
  				'85%': {
  					top: '50%',
  					left: '50%'
  				}
  			},
  			'aurora-3': {
  				'0%, 100%': {
  					bottom: '0',
  					left: '0'
  				},
  				'40%': {
  					bottom: '50%',
  					left: '25%'
  				},
  				'65%': {
  					bottom: '25%',
  					left: '50%'
  				}
  			},
  			'aurora-4': {
  				'0%, 100%': {
  					bottom: '0',
  					right: '0'
  				},
  				'50%': {
  					bottom: '25%',
  					right: '40%'
  				},
  				'90%': {
  					bottom: '50%',
  					right: '25%'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
