// 🔤 FONT TESTING COMPONENT (Development Only)
// ============================================
// Add this to your site temporarily to test fonts with a UI

import React, { useState } from 'react';
import { fontCombinations, testFont } from '@/config/theme';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const FontTester: React.FC = () => {
  const [currentFont, setCurrentFont] = useState<keyof typeof fontCombinations>('modern');

  const handleFontChange = (fontKey: keyof typeof fontCombinations) => {
    setCurrentFont(fontKey);
    testFont(fontKey);
  };

  return (
    <Card className="fixed bottom-4 right-4 w-80 bg-white/95 backdrop-blur-sm border-2 z-50">
      <CardHeader>
        <CardTitle className="text-lg">🔤 Font Tester</CardTitle>
        <CardDescription>
          Test different font combinations instantly
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
          {Object.entries(fontCombinations).map(([key, combo]) => (
            <Button
              key={key}
              variant={currentFont === key ? "default" : "outline"}
              size="sm"
              onClick={() => handleFontChange(key as keyof typeof fontCombinations)}
              className="text-xs justify-start"
              title={`${combo.display} + ${combo.sans}`}
            >
              {combo.description}
            </Button>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
          <p className="font-display font-bold">Display Font Sample</p>
          <p className="font-sans">Body text sample with the current font combination.</p>
          <p className="text-xs text-gray-600 mt-1">
            {fontCombinations[currentFont].display} + {fontCombinations[currentFont].sans}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

// Usage: Add <FontTester /> to your main component temporarily
// Remove it when you've found your perfect font combination!
