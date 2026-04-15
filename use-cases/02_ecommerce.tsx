import { PicshaImage } from '@picsha-ai/react-sdk';

/**
 * Use Case: E-Commerce & Retail
 * 
 * 1. Automated Background Removal (removeBackground={true})
 * 2. Infinite Aspect Ratios Without Storage Bloat
 * 3. Smart Framing
 */
export default function ProductCard({ assetId, productName }) {
  return (
    <div className="product-card">
      <PicshaImage
        deliveryEndpoint="https://api.picsha.ai"
        assetId={assetId}
        alt={`Buy ${productName}`}
        
        // Dynamically size and crop
        width={600}
        aspectRatio="1:1"
        fit="contain"
        
        // AI background removal via Bedrock ML models
        removeBackground={true}
        background="white"
        
        // Ensure the absolute best compression formats are used
        format="auto" 
        className="w-full h-auto rounded-lg shadow-sm"
      />
      <h3>{productName}</h3>
    </div>
  );
}

// Next you could do a generative edit outpainting for social media formats (like TikTok 9:16):
// <PicshaImage ... aspectRatio="9:16" generativeFill="realistic product studio background" />
