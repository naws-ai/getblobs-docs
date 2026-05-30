const https = require('https');
const fs = require('fs');

const TOKEN_LIST_URL = 'https://raw.githubusercontent.com/naws-ai/getblobs-token-list/main/token-list.json';
const OUTPUT_PATH = './pages/introduction/support-tokens.md';

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  const raw = await fetch(TOKEN_LIST_URL);
  const { tokens } = JSON.parse(raw);

  let md = `# Support Tokens\n\n`;
  md += `## Supported Token List on GetBlobs\n\n`;
  md += `Below is a list of tokens currently supported on Binance Smart Chain (Chain ID: 56).\n\n`;
  md += `> **Note**: Tokens without DEX liquidity may be removed from the supported list.\n\n`;
  md += `| Logo | Symbol | Name | Token Contract | CMC Link |\n`;
  md += `| :--- | :--- | :--- | :--- | :--- |\n`;

  for (const t of tokens) {
    const isNative = t.address === '0x0000000000000000000000000000000000000000';
    const contract = isNative ? 'Native Token' : `[BSC Scan](https://bscscan.com/token/${t.address})`;
    const cmc = t.cmcLinkKey ? `[View on CMC](https://coinmarketcap.com/currencies/${t.cmcLinkKey})` : '-';
    md += `| <img src="${t.logoURI}" width="24" height="24" /> | ${t.symbol} | ${t.name} | ${contract} | ${cmc} |\n`;
  }

  fs.writeFileSync(OUTPUT_PATH, md);
  console.log(`✅ support-tokens.md generated with ${tokens.length} tokens`);
}

main();
