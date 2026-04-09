import { useEffect } from 'react';

export const ChatbotEmbed = () => {
  useEffect(() => {
    // Add Botpress webchat scripts dynamically
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
    script1.defer = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2025/08/27/23/20250827232644-6IS5ZDWR.js';
    script2.defer = true;
    document.head.appendChild(script2);

    return () => {
      // Cleanup scripts when component unmounts
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null; // This component doesn't render anything visible
};