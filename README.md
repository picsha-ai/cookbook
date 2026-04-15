# Picsha AI Cookbook 📖

Welcome to the **Picsha AI Cookbook**! This repository is your go-to resource for practical, ready-to-run examples demonstrating how to harness the power of the [Picsha AI Platform](https://picsha.ai). 

Picsha AI is the **Agentic Media Server**—we don't just store files; we run intelligent pipelines to vectorize, summarize, and process your media so it's instantly actionable for LLMs and autonomous agents.

## What's Inside?

We provide interactive Jupyter Notebooks, Node.js scripts, and React components across multiple industries so you can start interacting with the API natively without writing boilerplate code.

### 📚 API Basics
* [**`basics/01_api_basics.js`**](./basics/01_api_basics.js) *(JavaScript)* - Learn how to authenticate via your API Key, connect to the cloud infrastructure via Node.js, and fetch your indexed assets.
* [**`basics/02_semantic_search.js`**](./basics/02_semantic_search.js) *(JavaScript)* - Discover how to run natural-language hybrid semantic searches across your visual library, and dynamically retrieve intelligent images.

### 💼 Industry Use Cases
* [**`use-cases/01_life_sciences.ipynb`**](./use-cases/01_life_sciences.ipynb) *(Python)* - Upload complex formats (RAW/HEIC), search "dark data", and load arrays directly into PyTorch/Pandas seamlessly.
* [**`use-cases/02_ecommerce.tsx`**](./use-cases/02_ecommerce.tsx) *(React SDK)* - Dynamically render catalog sizes on the fly via URL, strip image backgrounds, and integrate generative expand features into storefronts using `<PicshaImage>`.
* [**`use-cases/03_headless_dam.js`**](./use-cases/03_headless_dam.js) *(Node.js)* - Treat Picsha as a Headless DAM. Trigger Claude PDF summaries, define relational asset hierarchies (`variant_of`), and configure MCP context.
* [**`use-cases/04_media_entertainment.js`**](./use-cases/04_media_entertainment.js) *(JavaScript)* - Push massive broadcast files via TUS Resumable Uploads, leverage facial recognition via AWS Rekognition, and apply dynamic watermarking.

## Quick Start
Clone this repository to your local machine:
```bash
git clone https://github.com/picsha-ai/cookbook.git
cd cookbook
export PICSHA_API_KEY="your_api_key_here"
```

## Contributing

We love seeing what our community builds! If you've created a unique script, an MCP Agent integration, or an advanced transformation workflow, please consider submitting a **Pull Request**.
