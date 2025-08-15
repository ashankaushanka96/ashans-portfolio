# Ashan Pathiranage - Modern Portfolio

A modern, responsive developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features interactive 3D elements, smooth animations, and a premium design with glassmorphism effects.

## ✨ Features

- **Modern Design**: Clean, minimalist design with glassmorphism accents
- **3D Interactive Elements**: React Three Fiber with floating cubes and wireframe globe
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Dark/Light Theme**: Automatic theme switching with system preference detection
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Lighthouse score ≥90, optimized images and bundle size
- **Accessible**: Semantic HTML, keyboard navigation, ARIA labels
- **SEO Ready**: Meta tags, Open Graph, structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber + Drei
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ashankaushanka96/ashans-portfolio.git
cd ashans-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── navbar.tsx        # Navigation bar
│   ├── hero.tsx          # Hero section with 3D
│   ├── about.tsx         # About section
│   ├── skills.tsx        # Skills and technologies
│   ├── projects.tsx      # Project showcase
│   ├── experience.tsx    # Work experience timeline
│   ├── contact.tsx       # Contact form
│   ├── footer.tsx        # Footer
│   └── three-scene.tsx   # 3D scene component
├── lib/                  # Utility functions
└── types/                # TypeScript type definitions
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #0c4a6e)
- **Background**: Light gray to dark gray
- **Glass**: Semi-transparent overlays
- **Text**: High contrast for accessibility

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold with tight tracking
- **Body**: Medium weight with relaxed line height

### Components
- **Glass Cards**: Backdrop blur with subtle borders
- **Buttons**: Primary and secondary variants
- **Skill Badges**: Rounded pills with color coding
- **Timeline**: Vertical layout with connecting lines

## 🔧 Configuration

### Tailwind CSS
Custom design tokens and utilities in `tailwind.config.js`:
- Color palette with CSS variables
- Custom animations and keyframes
- Glassmorphism utilities
- Responsive breakpoints

### Next.js
Optimized configuration in `next.config.js`:
- Image optimization
- Static export for GitHub Pages
- Performance optimizations

## 📱 Responsive Design

- **Mobile**: Single column layout, touch-friendly interactions
- **Tablet**: Two-column grid, optimized spacing
- **Desktop**: Multi-column layout, hover effects
- **Large Screens**: Maximum width container, enhanced 3D effects

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader friendly
- Reduced motion support

## 🚀 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Export static files:
```bash
npm run export
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Other Platforms

The project can be deployed to any static hosting platform:
- Vercel
- Netlify
- AWS S3
- Cloudflare Pages

## 📊 Performance

- **Lighthouse Score**: ≥90 across all metrics
- **Bundle Size**: <250KB (excluding 3D)
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - 3D graphics
- [Lucide](https://lucide.dev/) - Beautiful icons

## 📞 Contact

- **Email**: ashan.pathiranage@gmail.com
- **LinkedIn**: [ashan-pathiranage](https://linkedin.com/in/ashan-pathiranage)
- **GitHub**: [ashankaushanka96](https://github.com/ashankaushanka96)

---

Made with ❤️ by Ashan Pathiranage
