/**
 * Use Case: Digital Asset Management (DAM)
 * 
 * Demonstrates how to use Picsha API as a Headless DAM.
 */

const API_KEY = "sk_your_api_key";
const BASE_URL = "https://api.picsha.ai/v1";

async function damWorkflows() {
  // 1. Generating Document Summaries via Claude Sonnet
  // Triggers Amazon Bedrock/Claude to attach a holistic summary to a PDF
  await fetch(`${BASE_URL}/assets/asset_982b1/summarize`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${API_KEY}` }
  });
  console.log("Document summarized and tagged.");

  // 2. Utilizing DAM Relationships & Groups
  // Explicitly link an optimized web image back to its giant source RAW file
  await fetch(`${BASE_URL}/dam/relationships`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      source_asset_id: "asset_high_res_raw_123",
      target_asset_id: "asset_web_proxy_456",
      relationship_type: "variant_of"
    })
  });
  console.log("DAM relationships created.");
}

/* 
 * 3. Native Agentic Searching (MCP)
 * If your enterprise deploys internal Claude Desktop agents, you can configure the MCP server:
 * {
 *   "mcpServers": {
 *     "picsha-internal-dam": {
 *       "command": "npx",
 *       "args": ["-y", "@picsha-ai/mcp-server"],
 *       "env": { "PICSHA_API_KEY": "sk_your_api_key" }
 *     }
 *   }
 * }
 */
