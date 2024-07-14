// components/LogoAdditionComponent.tsx
"use client"
import React, { useState } from 'react';

interface LogoAdditionComponentProps {
  onLogoSelect: (logoUrl: string) => void;
}

const LogoAdditionComponent: React.FC<LogoAdditionComponentProps> = ({ onLogoSelect }) => {
  const [logoUrl, setLogoUrl] = useState<string>('');

  const handleLogoSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoUrl(url);
      onLogoSelect(url); // Pass selected logo URL to parent component
    }
  };

  return (
    <div className="text-center mt-4">
      <h2>Add Logo</h2>
      <input type="file" accept="image/*" onChange={handleLogoSelect} />
      {logoUrl && (
        <div className="mt-4">
          <img src={logoUrl} alt="Selected Logo" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        </div>
      )}
    </div>
  );
};

export default LogoAdditionComponent;
