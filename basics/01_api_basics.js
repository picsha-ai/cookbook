// Picsha AI: API Basics
// This script demonstrates how to connect to the Picsha AI backend and fetch your intelligent media assets.

const API_URL = "https://api.picsha.ai/v1";
const API_KEY = process.env.PICSHA_API_KEY || "YOUR_API_KEY_HERE";

async function fetchAssets() {
    console.log("Connecting to Picsha AI Backend...");

    const response = await fetch(`${API_URL}/assets?type=image&limit=3`, {
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        const data = await response.json();
        const results = data.data || [];
        console.log(`Found ${results.length} assets.\n`);
        
        if (results.length > 0) {
            console.log("First Asset Structure:");
            console.log(JSON.stringify(results[0], null, 2));
        }
    } else {
        const text = await response.text();
        console.error(`Error: ${response.status} - ${text}`);
    }
}

fetchAssets();
