# Kalam Technologies Website

A modern, responsive technology company website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Fully Responsive Design** - Works seamlessly across all device sizes
- **Modern Design System** - Professional teal/turquoise theme with clean typography
- **Modular Architecture** - Easy to maintain and extend
- **Theme Customization** - Simple theme switching system
- **Performance Optimized** - Fast loading with optimized images and animations
- **Accessibility Focused** - Built with accessibility best practices
- **SEO Optimized** - Proper meta tags and semantic HTML

## 🎨 Design System

The website uses a comprehensive design system defined in:
- `src/index.css` - CSS custom properties and design tokens
- `tailwind.config.ts` - Extended Tailwind configuration
- `src/config/theme.ts` - Theme management system

### Changing Themes

To change the website theme:

1. **Using Predefined Themes:**
```typescript
import { blueTheme, applyTheme } from '@/config/theme';
applyTheme(blueTheme);
```

2. **Creating Custom Themes:**
```typescript
const customTheme = {
  name: "Custom Theme",
  colors: {
    primary: "280 70% 50%", // Your primary color in HSL
    primaryGlow: "280 70% 60%",
    accent: "280 80% 60%",
  },
  // ... other theme properties
};
applyTheme(customTheme);
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer components
│   ├── sections/        # Page sections (Hero, About, Services, etc.)
│   └── ui/             # Reusable UI components (shadcn/ui)
├── config/
│   └── theme.ts        # Theme configuration
├── assets/             # Images and static assets
├── pages/              # Page components
└── lib/                # Utilities and helpers
```

## 🔧 Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icon library
- **Radix UI** - Accessible component primitives

## 🚀 Getting Started

1. **Clone the repository:**
```bash
git clone <repository-url>
cd kalam-technologies
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Build for production:**
```bash
npm run build
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components are designed mobile-first with progressive enhancement.

## 🎯 Adding New Sections

To add a new section:

1. **Create component in `src/components/sections/`:**
```typescript
// src/components/sections/NewSection.tsx
const NewSection = () => {
  return (
    <section className="py-20">
      {/* Your content */}
    </section>
  );
};
export default NewSection;
```

2. **Import and add to main page:**
```typescript
// src/pages/Index.tsx
import NewSection from "@/components/sections/NewSection";

// Add to the main component
<NewSection />
```

## 🎨 Design Guidelines

### Colors
- Use semantic tokens: `bg-primary`, `text-foreground`, etc.
- Never use direct colors like `bg-blue-500`
- All colors are defined in HSL format in the design system

### Typography
- Use `font-display` for headings
- Use `font-sans` for body text
- Semantic sizes: `text-hero`, `text-display`, etc.

### Spacing
- Use consistent spacing scale: `p-4`, `mb-8`, `gap-6`, etc.
- Sections should use `py-20 lg:py-32` for vertical padding

### Components
- All components should be responsive by default
- Use the design system tokens consistently
- Add hover states and smooth transitions

## 🔧 Customization

### Changing Content
- Hero section: Edit `src/components/sections/HeroSection.tsx`
- Services: Update the services array in `src/components/sections/ServicesSection.tsx`
- Company info: Modify `src/components/sections/CompanySection.tsx`
- Contact details: Update `src/components/layout/Footer.tsx`

### Styling
- Colors: Update CSS custom properties in `src/index.css`
- Fonts: Change font imports in `index.html` and update `tailwind.config.ts`
- Theme: Use the theme system in `src/config/theme.ts`

## 🚀 Deployment

The website can be deployed to any static hosting platform:

### Lovable (Recommended)
- Click "Publish" in the Lovable interface
- Connect custom domain in Project Settings

### Other Platforms
- **Vercel:** Connect GitHub repository
- **Netlify:** Drag and drop build folder
- **Azure Static Web Apps:** Connect repository

Build command: `npm run build`
Build directory: `dist`

## 📈 Performance

The website is optimized for performance:
- Optimized images with proper formats
- CSS custom properties for efficient styling
- Minimal JavaScript bundle
- Smooth animations with hardware acceleration

## ♿ Accessibility

Built with accessibility in mind:
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

## 📞 Support

For questions or support:
- Email: intern.kalamtech@gmail.com
- Create an issue in the repository

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
