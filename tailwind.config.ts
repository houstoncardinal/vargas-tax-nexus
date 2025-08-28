import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
					950: '#082f49',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					50: '#fdf4ff',
					100: '#fae8ff',
					200: '#f5d0fe',
					300: '#f0abfc',
					400: '#e879f9',
					500: '#d946ef',
					600: '#c026d3',
					700: '#a21caf',
					800: '#86198f',
					900: '#701a75',
					950: '#4a044e',
				},
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Premium gradient colors
				premium: {
					gold: '#FFD700',
					silver: '#C0C0C0',
					bronze: '#CD7F32',
					platinum: '#E5E4E2',
					diamond: '#B9F2FF',
				}
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-success': 'var(--gradient-success)',
				'gradient-premium': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'gradient-elite': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
				'gradient-luxury': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
				'gradient-royal': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
				'gradient-cosmic': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
				'gradient-aurora': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
				'gradient-sunset': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
				'gradient-ocean': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'gradient-forest': 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
				'gradient-fire': 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
				'gradient-ice': 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
				'gradient-midnight': 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
				'gradient-dawn': 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
				'gradient-dusk': 'linear-gradient(135deg, #a8caba 0%, #5d4e75 100%)',
				'gradient-stellar': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'gradient-neon': 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
				'gradient-crystal': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
				'gradient-velvet': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'gradient-silk': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'card': 'var(--shadow-card)',
				'glow': 'var(--shadow-glow)',
				'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'elite': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
				'luxury': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
				'royal': '0 50px 100px -20px rgba(0, 0, 0, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3)',
				'cosmic': '0 0 20px rgba(255, 255, 255, 0.1), 0 0 40px rgba(255, 255, 255, 0.05)',
				'neon': '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3), 0 0 15px rgba(255, 255, 255, 0.1)',
				'aurora': '0 0 30px rgba(138, 43, 226, 0.3), 0 0 60px rgba(138, 43, 226, 0.1)',
				'stellar': '0 0 40px rgba(100, 149, 237, 0.3), 0 0 80px rgba(100, 149, 237, 0.1)',
				'crystal': '0 0 50px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1)',
				'velvet': '0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05)',
				'silk': '0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05)',
				'floating': '0 10px 30px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05)',
				'deep': '0 25px 50px rgba(0, 0, 0, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1)',
				'soft': '0 5px 15px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
				'hard': '0 15px 30px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)',
				'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
				'outer-glow': '0 0 30px rgba(255, 255, 255, 0.2)',
				'text-glow': '0 0 10px rgba(255, 255, 255, 0.5)',
				'border-glow': '0 0 20px rgba(255, 255, 255, 0.3)',
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)',
				'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
				'expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
				'quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
				'cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
				'quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'xl': '1rem',
				'2xl': '1.5rem',
				'3xl': '2rem',
				'4xl': '3rem',
				'5xl': '4rem',
			},
			keyframes: {
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
				// Premium animations
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(255, 255, 255, 0.6)',
						transform: 'scale(1.05)'
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(255, 255, 255, 0.4)',
						transform: 'scale(1.02)'
					}
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-down': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(-30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': { 
						opacity: '0',
						transform: 'scale(0.8)'
					},
					'100%': { 
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'rotate-in': {
					'0%': { 
						opacity: '0',
						transform: 'rotate(-180deg) scale(0.8)'
					},
					'100%': { 
						opacity: '1',
						transform: 'rotate(0deg) scale(1)'
					}
				},
				'slide-in-up': {
					'0%': { 
						transform: 'translateY(100%)'
					},
					'100%': { 
						transform: 'translateY(0)'
					}
				},
				'slide-in-down': {
					'0%': { 
						transform: 'translateY(-100%)'
					},
					'100%': { 
						transform: 'translateY(0)'
					}
				},
				'bounce-gentle': {
					'0%, 100%': { 
						transform: 'translateY(0)'
					},
					'50%': { 
						transform: 'translateY(-10px)'
					}
				},
				'wiggle': {
					'0%, 100%': { 
						transform: 'rotate(-3deg)'
					},
					'50%': { 
						transform: 'rotate(3deg)'
					}
				},
				'heartbeat': {
					'0%, 100%': { 
						transform: 'scale(1)'
					},
					'50%': { 
						transform: 'scale(1.1)'
					}
				},
				'gradient-shift': {
					'0%, 100%': { 
						backgroundPosition: '0% 50%'
					},
					'50%': { 
						backgroundPosition: '100% 50%'
					}
				},
				'text-glow': {
					'0%, 100%': { 
						textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
					},
					'50%': { 
						textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6)'
					}
				},
				'border-pulse': {
					'0%, 100%': { 
						borderColor: 'rgba(255, 255, 255, 0.3)'
					},
					'50%': { 
						borderColor: 'rgba(255, 255, 255, 0.8)'
					}
				},
				'neon-flicker': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3), 0 0 15px rgba(255, 255, 255, 0.1)'
					},
					'50%': { 
						boxShadow: '0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2), 0 0 8px rgba(255, 255, 255, 0.1)'
					}
				},
				'cosmic-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)'
					},
					'33%': { 
						transform: 'translateY(-15px) rotate(1deg)'
					},
					'66%': { 
						transform: 'translateY(-10px) rotate(-1deg)'
					}
				},
				'stellar-spin': {
					'0%': { 
						transform: 'rotate(0deg)'
					},
					'100%': { 
						transform: 'rotate(360deg)'
					}
				},
				'aurora-wave': {
					'0%, 100%': { 
						transform: 'translateX(0) scaleY(1)'
					},
					'50%': { 
						transform: 'translateX(10px) scaleY(1.1)'
					}
				},
				'crystal-shine': {
					'0%': { 
						transform: 'translateX(-100%) skewX(-15deg)'
					},
					'100%': { 
						transform: 'translateX(200%) skewX(-15deg)'
					}
				},
				'velvet-rise': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(50px) scale(0.9)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'silk-flow': {
					'0%, 100%': { 
						transform: 'translateY(0)'
					},
					'50%': { 
						transform: 'translateY(-5px)'
					}
				},
				'premium-sparkle': {
					'0%, 100%': { 
						opacity: '0',
						transform: 'scale(0) rotate(0deg)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1) rotate(180deg)'
					}
				},
				'elite-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.7)'
					},
					'50%': { 
						transform: 'scale(1.05)',
						boxShadow: '0 0 0 10px rgba(255, 255, 255, 0)'
					}
				},
				'luxury-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.3)'
					}
				},
				'royal-shine': {
					'0%': { 
						backgroundPosition: '200% 0'
					},
					'100%': { 
						backgroundPosition: '-200% 0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in-down': 'fade-in-down 0.6s ease-out',
				'fade-in-left': 'fade-in-left 0.6s ease-out',
				'fade-in-right': 'fade-in-right 0.6s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'rotate-in': 'rotate-in 0.8s ease-out',
				'slide-in-up': 'slide-in-up 0.8s ease-out',
				'slide-in-down': 'slide-in-down 0.8s ease-out',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease infinite',
				'text-glow': 'text-glow 2s ease-in-out infinite',
				'border-pulse': 'border-pulse 2s ease-in-out infinite',
				'neon-flicker': 'neon-flicker 3s ease-in-out infinite',
				'cosmic-float': 'cosmic-float 8s ease-in-out infinite',
				'stellar-spin': 'stellar-spin 20s linear infinite',
				'aurora-wave': 'aurora-wave 4s ease-in-out infinite',
				'crystal-shine': 'crystal-shine 3s ease-in-out infinite',
				'velvet-rise': 'velvet-rise 0.8s ease-out',
				'silk-flow': 'silk-flow 3s ease-in-out infinite',
				'premium-sparkle': 'premium-sparkle 2s ease-in-out infinite',
				'elite-pulse': 'elite-pulse 2s ease-in-out infinite',
				'luxury-glow': 'luxury-glow 3s ease-in-out infinite',
				'royal-shine': 'royal-shine 4s ease-in-out infinite',
			},
			backdropBlur: {
				'xs': '2px',
				'4xl': '72px',
			},
			blur: {
				'4xl': '72px',
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			fontSize: {
				'2xs': ['0.625rem', { lineHeight: '0.75rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
			},
			zIndex: {
				'60': '60',
				'70': '70',
				'80': '80',
				'90': '90',
				'100': '100',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
