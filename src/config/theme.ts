// Theme Configuration for Easy Customization
// To change themes, simply update these values and they'll propagate throughout the app

// 🔤 FONT COMBINATION PRESETS FOR EASY TESTING
// =============================================
// Simply change the currentFontCombo below to test different combinations!

export const fontCombinations = {
  // 🎯 RECOMMENDED COMBINATIONS
  modern: { display: "Montserrat", sans: "Work Sans", description: "Modern & Professional" },
  clean: { display: "Poppins", sans: "Inter", description: "Clean & Readable" },
  elegant: { display: "Playfair Display", sans: "Source Sans Pro", description: "Elegant & Sophisticated" },
  
  // 🔄 CLASSIC COMBINATIONS
  corporate: { display: "Inter", sans: "Montserrat", description: "Corporate & Trustworthy" },
  friendly: { display: "Work Sans", sans: "Poppins", description: "Friendly & Approachable" },
  contemporary: { display: "Poppins", sans: "Work Sans", description: "Contemporary & Fresh" },
  
  // ⚡ BOLD COMBINATIONS
  impact: { display: "Montserrat", sans: "Inter", description: "High Impact & Clear" },
  premium: { display: "Montserrat", sans: "Poppins", description: "Premium & Polished" },
  minimal: { display: "Inter", sans: "Work Sans", description: "Minimal & Clean" },
  
  // 🎨 CREATIVE COMBINATIONS
  creative: { display: "Oswald", sans: "Open Sans", description: "Creative & Dynamic" },
  editorial: { display: "Merriweather", sans: "Lato", description: "Editorial & Readable" },
  tech: { display: "Roboto", sans: "Roboto", description: "Tech & Consistent" },
  
  // 🌟 GOOGLE FONTS COMBOS
  google1: { display: "Nunito", sans: "Source Sans Pro", description: "Google Fonts Classic" },
  google2: { display: "Raleway", sans: "Open Sans", description: "Google Fonts Popular" },
  google3: { display: "Quicksand", sans: "Lato", description: "Google Fonts Trendy" },
} as const;

// 🚀 ACTIVE FONT COMBINATION
// Change this line to instantly test different font combinations!
export const currentFontCombo = fontCombinations.modern;

export interface Theme {
  name: string;
  colors: {
    primary: string;
    primaryGlow: string;
    accent: string;
    // Extended color palette (optional for backward compatibility)
    black?: string;
    darkGray?: string;
    warmBrown?: string;
    lightBeige?: string;
    nearWhite?: string;
    white?: string;
    // Add more theme colors as needed
  };
  fonts: {
    display: string;
    sans: string;
    description?: string;
  };
  gradients: {
    primary: string;
    hero: string;
    card: string;
  };
}

// 🎨 THEME PRESETS WITH FONT COMBINATIONS
// =======================================

// Teal Modern Theme
export const tealTheme: Theme = {
  name: "Teal Modern",
  colors: {
    primary: "180 70% 35%", // Teal
    primaryGlow: "180 70% 45%",
    accent: "180 80% 50%",
  },
  fonts: currentFontCombo, // Uses the active font combination!
  gradients: {
    primary: "linear-gradient(135deg, hsl(180 70% 35%), hsl(180 70% 45%))",
    hero: "linear-gradient(135deg, hsl(180 70% 35% / 0.1), hsl(180 80% 50% / 0.05))",
    card: "linear-gradient(135deg, hsl(0 0% 100%), hsl(215 15% 97%))",
  },
};

// Blue Professional Theme
export const blueTheme: Theme = {
  name: "Blue Professional",
  colors: {
    primary: "220 90% 50%", // Blue
    primaryGlow: "220 90% 60%",
    accent: "220 100% 60%",
  },
  fonts: currentFontCombo, // Uses the active font combination!
  gradients: {
    primary: "linear-gradient(135deg, hsl(220 90% 50%), hsl(220 90% 60%))",
    hero: "linear-gradient(135deg, hsl(220 90% 50% / 0.1), hsl(220 100% 60% / 0.05))",
    card: "linear-gradient(135deg, hsl(0 0% 100%), hsl(215 15% 97%))",
  },
};

// Purple Innovation Theme
export const purpleTheme: Theme = {
  name: "Purple Innovation",
  colors: {
    primary: "270 70% 50%", // Purple
    primaryGlow: "270 70% 60%",
    accent: "270 80% 60%",
  },
  fonts: currentFontCombo, // Uses the active font combination!
  gradients: {
    primary: "linear-gradient(135deg, hsl(270 70% 50%), hsl(270 70% 60%))",
    hero: "linear-gradient(135deg, hsl(270 70% 50% / 0.1), hsl(270 80% 60% / 0.05))",
    card: "linear-gradient(135deg, hsl(0 0% 100%), hsl(215 15% 97%))",
  },
};

// Green Nature Theme
export const greenTheme: Theme = {
  name: "Green Nature",
  colors: {
    primary: "142 76% 36%", // Green
    primaryGlow: "142 76% 46%",
    accent: "142 86% 46%",
  },
  fonts: currentFontCombo, // Uses the active font combination!
  gradients: {
    primary: "linear-gradient(135deg, hsl(142 76% 36%), hsl(142 76% 46%))",
    hero: "linear-gradient(135deg, hsl(142 76% 36% / 0.1), hsl(142 86% 46% / 0.05))",
    card: "linear-gradient(135deg, hsl(0 0% 100%), hsl(215 15% 97%))",
  },
};

// Orange Energy Theme
export const orangeTheme: Theme = {
  name: "Orange Energy",
  colors: {
    primary: "24 74% 58%", // Orange
    primaryGlow: "24 74% 68%",
    accent: "24 84% 68%",
  },
  fonts: currentFontCombo, // Uses the active font combination!
  gradients: {
    primary: "linear-gradient(135deg, hsl(24 74% 58%), hsl(24 74% 68%))",
    hero: "linear-gradient(135deg, hsl(24 74% 58% / 0.1), hsl(24 84% 68% / 0.05))",
    card: "linear-gradient(135deg, hsl(0 0% 100%), hsl(215 15% 97%))",
  },
};

// Custom Warm Neutral Theme
export const warmNeutralTheme: Theme = {
  name: "Warm Neutral",
  colors: {
    primary: "24 25% 61%", // #b9917e - Warm brown/taupe
    primaryGlow: "24 25% 71%",
    accent: "24 30% 71%",
    // Your custom color palette
    black: "#000000",        // Pure black
    darkGray: "#474747",     // Dark gray
    warmBrown: "#b9917e",    // Warm brown/taupe (primary)
    lightBeige: "#ddd8d3",   // Light beige
    nearWhite: "#fdfdfd",    // Near white
    white: "#ffffff",        // Pure white
  },
  fonts: currentFontCombo, // Uses the active font combination!
  gradients: {
    primary: "linear-gradient(135deg, #b9917e, #c9a18e)",
    hero: "linear-gradient(135deg, rgba(185, 145, 126, 0.1), rgba(221, 216, 211, 0.05))",
    card: "linear-gradient(135deg, #fdfdfd, #ddd8d3)",
  },
};

// 🎯 QUICK TESTING UTILITIES
// ========================

// Font Testing Helper - Use this in browser console!
export const testFont = (fontComboName: keyof typeof fontCombinations) => {
  const combo = fontCombinations[fontComboName];
  if (combo) {
    const root = document.documentElement;
    root.style.setProperty('--font-display', combo.display);
    root.style.setProperty('--font-sans', combo.sans);
    console.log(`✅ Applied ${combo.description}: ${combo.display} + ${combo.sans}`);
  }
};

// List all available font combinations
export const listFonts = () => {
  console.log('🔤 Available Font Combinations:');
  Object.entries(fontCombinations).forEach(([key, combo]) => {
    console.log(`📝 ${key}: ${combo.description} (${combo.display} + ${combo.sans})`);
  });
  console.log('\n🚀 Usage: testFont("modern") or testFont("clean") etc.');
};

// Export current active theme
export const currentTheme = warmNeutralTheme;

// Theme utility functions
export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  
  // Apply color variables
  root.style.setProperty('--primary', theme.colors.primary);
  root.style.setProperty('--primary-glow', theme.colors.primaryGlow);
  root.style.setProperty('--accent', theme.colors.accent);
  
  // Apply custom color palette (if available)
  if (theme.colors.black) root.style.setProperty('--color-black', theme.colors.black);
  if (theme.colors.darkGray) root.style.setProperty('--color-dark-gray', theme.colors.darkGray);
  if (theme.colors.warmBrown) root.style.setProperty('--color-warm-brown', theme.colors.warmBrown);
  if (theme.colors.lightBeige) root.style.setProperty('--color-light-beige', theme.colors.lightBeige);
  if (theme.colors.nearWhite) root.style.setProperty('--color-near-white', theme.colors.nearWhite);
  if (theme.colors.white) root.style.setProperty('--color-white', theme.colors.white);
  
  // Apply gradient variables
  root.style.setProperty('--gradient-primary', theme.gradients.primary);
  root.style.setProperty('--gradient-hero', theme.gradients.hero);
  root.style.setProperty('--gradient-card', theme.gradients.card);
  
  // Apply font variables (now using currentFontCombo)
  root.style.setProperty('--font-display', theme.fonts.display);
  root.style.setProperty('--font-sans', theme.fonts.sans);
  
  // Apply ring color (for focus states)
  root.style.setProperty('--ring', theme.colors.primary);
  
  // Update shadow colors to match theme
  root.style.setProperty('--shadow-soft', `0 4px 6px -1px hsl(${theme.colors.primary} / 0.1), 0 2px 4px -1px hsl(${theme.colors.primary} / 0.06)`);
  root.style.setProperty('--shadow-medium', `0 10px 15px -3px hsl(${theme.colors.primary} / 0.1), 0 4px 6px -2px hsl(${theme.colors.primary} / 0.05)`);
  root.style.setProperty('--shadow-large', `0 20px 25px -5px hsl(${theme.colors.primary} / 0.15), 0 10px 10px -5px hsl(${theme.colors.primary} / 0.04)`);
  root.style.setProperty('--shadow-glow', `0 0 20px hsl(${theme.colors.primaryGlow} / 0.3)`);
  
  // Apply custom color variables for easier use throughout the app
  if (theme.colors.black) {
    root.style.setProperty('--text-primary', theme.colors.black);
    root.style.setProperty('--bg-primary', theme.colors.nearWhite || '#fdfdfd');
    root.style.setProperty('--bg-secondary', theme.colors.lightBeige || '#ddd8d3');
    root.style.setProperty('--text-secondary', theme.colors.darkGray || '#474747');
    root.style.setProperty('--border-color', theme.colors.lightBeige || '#ddd8d3');
  }
  
  console.log(`🎨 Applied theme: ${theme.name} with ${theme.fonts.description || 'custom fonts'}`);
};

// 🎨 EASY FONT & THEME TESTING SYSTEM
// ===================================

/* 
🚀 SUPER QUICK FONT TESTING:

1. INSTANT FONT SWITCHING:
   - Change currentFontCombo above to any preset
   - Save file and fonts update immediately!

2. BROWSER CONSOLE TESTING:
   - Open browser console (F12)
   - Type: listFonts() to see all options
   - Type: testFont("clean") to test instantly
   - Type: testFont("elegant") for sophisticated look
   - Type: testFont("creative") for dynamic feel

3. PERMANENT CHANGES:
   - Update currentFontCombo = fontCombinations.your_choice
   - All themes will use the new font combination

📋 AVAILABLE COMBINATIONS:
✨ modern     - Montserrat + Work Sans (current)
✨ clean      - Poppins + Inter  
✨ elegant    - Playfair Display + Source Sans Pro
✨ corporate  - Inter + Montserrat
✨ friendly   - Work Sans + Poppins
✨ premium    - Montserrat + Poppins
✨ creative   - Oswald + Open Sans
✨ tech       - Roboto + Roboto
✨ And more! Use listFonts() to see all

🎯 THEME SWITCHING:
- Change currentTheme to any theme (warmNeutralTheme, blueTheme, purpleTheme, etc.)
- Colors and fonts update together
- Perfect for A/B testing different looks

🎨 WARM NEUTRAL COLOR PALETTE (Active):
Your custom colors are now active throughout the app:
- #000000 (Pure Black) - Text, high contrast elements
- #474747 (Dark Gray) - Secondary text, subtle elements
- #b9917e (Warm Brown) - Primary buttons, accents, CTAs
- #ddd8d3 (Light Beige) - Backgrounds, borders, cards
- #fdfdfd (Near White) - Main background, clean areas
- #ffffff (Pure White) - Pure white for contrast

🔧 HOW TO USE YOUR COLORS:

In CSS/Tailwind:
- bg-warm-brown, text-warm-brown
- bg-warm-light-beige, text-warm-dark-gray
- border-warm-light-beige
- Or use Tailwind: bg-warm-brown, text-warm-black

In Components:
- className="bg-warm-brown text-warm-white"
- className="bg-warm-light-beige text-warm-black"
- className="btn-warm-primary" (custom button style)
- className="btn-warm-secondary" (outline button style)

💡 PRO TIP: 
Open two browser tabs - one with your site, one with console
Test fonts in real-time without reloading!
Your warm neutral theme is automatically applied on app startup!
*/

