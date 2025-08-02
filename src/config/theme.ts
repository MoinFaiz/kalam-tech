// Theme Configuration for Easy Customization
// To change themes, simply update these values and they'll propagate throughout the app

export interface Theme {
  name: string;
  colors: {
    primary: string;
    primaryGlow: string;
    accent: string;
    // Add more theme colors as needed
  };
  fonts: {
    display: string;
    sans: string;
  };
  gradients: {
    primary: string;
    hero: string;
    card: string;
  };
}

// Default Kalam Technologies Theme
export const kalamTheme: Theme = {
  name: "Kalam Technologies",
  colors: {
    primary: "180 70% 35%", // Teal
    primaryGlow: "180 70% 45%",
    accent: "180 80% 50%",
  },
  fonts: {
    display: "Poppins",
    sans: "Inter",
  },
  gradients: {
    primary: "linear-gradient(135deg, hsl(180 70% 35%), hsl(180 70% 45%))",
    hero: "linear-gradient(135deg, hsl(180 70% 35% / 0.1), hsl(180 80% 50% / 0.05))",
    card: "linear-gradient(135deg, hsl(0 0% 100%), hsl(215 15% 97%))",
  },
};

// Alternative Blue Theme Example
export const blueTheme: Theme = {
  name: "Blue Professional",
  colors: {
    primary: "220 90% 50%", // Blue
    primaryGlow: "220 90% 60%",
    accent: "220 100% 60%",
  },
  fonts: {
    display: "Poppins",
    sans: "Inter",
  },
  gradients: {
    primary: "linear-gradient(135deg, hsl(220 90% 50%), hsl(220 90% 60%))",
    hero: "linear-gradient(135deg, hsl(220 90% 50% / 0.1), hsl(220 100% 60% / 0.05))",
    card: "linear-gradient(135deg, hsl(0 0% 100%), hsl(215 15% 97%))",
  },
};

// Alternative Purple Theme Example
export const purpleTheme: Theme = {
  name: "Purple Innovation",
  colors: {
    primary: "270 70% 50%", // Purple
    primaryGlow: "270 70% 60%",
    accent: "270 80% 60%",
  },
  fonts: {
    display: "Poppins",
    sans: "Inter",
  },
  gradients: {
    primary: "linear-gradient(135deg, hsl(270 70% 50%), hsl(270 70% 60%))",
    hero: "linear-gradient(135deg, hsl(270 70% 50% / 0.1), hsl(270 80% 60% / 0.05))",
    card: "linear-gradient(135deg, hsl(0 0% 100%), hsl(215 15% 97%))",
  },
};

// Export current active theme
export const currentTheme = kalamTheme;

// Theme utility functions
export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  
  // Apply color variables
  root.style.setProperty('--primary', theme.colors.primary);
  root.style.setProperty('--primary-glow', theme.colors.primaryGlow);
  root.style.setProperty('--accent', theme.colors.accent);
  
  // Apply gradient variables
  root.style.setProperty('--gradient-primary', theme.gradients.primary);
  root.style.setProperty('--gradient-hero', theme.gradients.hero);
  root.style.setProperty('--gradient-card', theme.gradients.card);
};

// Usage Instructions:
// 1. Import the theme you want: import { blueTheme, applyTheme } from '@/config/theme'
// 2. Apply it: applyTheme(blueTheme)
// 3. Or create your own theme object and apply it
// 4. All components will automatically use the new theme colors