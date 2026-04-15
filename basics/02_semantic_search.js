// Picsha AI: Semantic Search
// This script demonstrates how to query the Picsha AI platform using natural language to retrieve highly relevant images.

const API_URL = "https://api.picsha.ai/v1";
const API_KEY = process.env.PICSHA_API_KEY || "YOUR_API_KEY_HERE";

async function searchAssets() {
    const query = "a dog running in a park";
    console.log(`Searching for: '${query}'...`);

    const response = await fetch(`${API_URL}/search`, {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            keyword: query,
            limit: 3
        })
    });

    if (response.ok) {
        const data = await response.json();
        const results = data.data || [];
        console.log(`\nFound ${results.length} results for: '${query}'\n`);
        
        results.forEach(asset => {
            const assetUrl = asset.url;
            console.log(`✅ Asset ID: ${asset.id}`);
            console.log(`🔗 Delivery URL: ${assetUrl}\n`);
        });
    } else {
        const text = await response.text();
        console.error(`Error: ${response.status} - ${text}`);
    }
}

searchAssets();
