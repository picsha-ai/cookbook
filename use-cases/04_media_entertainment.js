/**
 * Use Case: Media & Entertainment
 */
import * as tus from "tus-js-client";

const API_KEY = "sk_your_api_key";
const BASE_URL = "https://api.picsha.ai/v1";

async function mediaWorkflows() {
  // 1. Registering Cast Members for Facial Recognition
  // Tell the intelligence layer who a specific actor or public figure is.
  await fetch(`${BASE_URL}/rekognition/faces/face_id_12345`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: "John Doe" // Future AI searches for 'John Doe' will strictly match this biometric profile
    })
  });
}

function uploadMassiveVideo(file) {
  // 2. TUS Resumable Uploads for Massive Video Files
  // Safely stream chunks directly to the bucket, useful for unstable remote sets.
  const upload = new tus.Upload(file, {
    endpoint: `${BASE_URL}/upload/resumable/`,
    retryDelays: [0, 3000, 5000, 10000, 20000],
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    metadata: {
      filename: file.name,
      filetype: file.type
    },
    onSuccess: function() {
      console.log("Download URL:", upload.url);
      // Trigger standard /v1/assets endpoint to finalize media entry 
    }
  });

  upload.start();
}

/**
 * 3. Delivering Dynamically Watermarked Screeners
 * Original: https://api.picsha.ai/v1/assets/asset_123/render
 * Watermarked: https://api.picsha.ai/v1/assets/asset_123/render?wm=watermark_asset_id&wm_pos=southeast&w=1920&fmt=webp
 */
