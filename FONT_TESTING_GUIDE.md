# 🔤 Font Testing System - Quick Guide

## 🚀 Three Ways to Test Fonts

### 1. **INSTANT METHOD** - Change in Code
```typescript
// In src/config/theme.ts, just change this line:
export const currentFontCombo = fontCombinations.elegant; // ← Change this!

// Available options:
// modern, clean, elegant, corporate, friendly, contemporary,
// impact, premium, minimal, creative, editorial, tech,
// google1, google2, google3
```

### 2. **BROWSER CONSOLE** - Real-time Testing
```javascript
// Open browser console (F12) and try:
listFonts()           // See all available combinations
testFont("elegant")   // Test elegant combination
testFont("creative")  // Test creative combination
testFont("tech")      // Test tech combination
```

### 3. **UI COMPONENT** - Visual Testing (Optional)
```tsx
// Add to your App.tsx temporarily:
import { FontTester } from '@/components/dev/FontTester';

// Then in your JSX:
<FontTester />  // Shows floating font picker
```

## 📋 Available Font Combinations

| Name | Display Font | Body Font | Description |
|------|-------------|-----------|-------------|
| `modern` | Montserrat | Work Sans | Modern & Professional |
| `clean` | Poppins | Inter | Clean & Readable |
| `elegant` | Playfair Display | Source Sans Pro | Elegant & Sophisticated |
| `corporate` | Inter | Montserrat | Corporate & Trustworthy |
| `friendly` | Work Sans | Poppins | Friendly & Approachable |
| `contemporary` | Poppins | Work Sans | Contemporary & Fresh |
| `impact` | Montserrat | Inter | High Impact & Clear |
| `premium` | Montserrat | Poppins | Premium & Polished |
| `minimal` | Inter | Work Sans | Minimal & Clean |
| `creative` | Oswald | Open Sans | Creative & Dynamic |
| `editorial` | Merriweather | Lato | Editorial & Readable |
| `tech` | Roboto | Roboto | Tech & Consistent |
| `google1` | Nunito | Source Sans Pro | Google Fonts Classic |
| `google2` | Raleway | Open Sans | Google Fonts Popular |
| `google3` | Quicksand | Lato | Google Fonts Trendy |

## 🎯 How It Works

1. **All fonts are preloaded** in index.html - no delays!
2. **CSS variables update instantly** when you change combinations
3. **All themes use the same font combination** - consistent across color themes
4. **No rebuild required** - just save the file and see changes

## 💡 Pro Tips

- **Test with your content**: Use real text from your site to see how fonts look
- **Check responsiveness**: Test on different screen sizes
- **Consider readability**: Ensure body text is easy to read at all sizes
- **Brand consistency**: Choose fonts that match your brand personality

## 🔄 Making Permanent Changes

Once you find the perfect combination:
1. Update `currentFontCombo` in `theme.ts`
2. Remove the `FontTester` component if you added it
3. Clean up any console testing
4. Consider removing unused fonts from `index.html` for performance

Your font choice will automatically apply to all themes and components!
