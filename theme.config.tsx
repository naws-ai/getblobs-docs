import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/logo.svg" alt="GetBlobs" style={{ height: 24 }} />
      <span style={{ marginLeft: 8, fontWeight: 600, fontSize: 14 }}>Docs</span>
    </>
  ),
  head: (
    <>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </>
  ),
  project: { link: 'https://github.com/naws-ai/getblobs-docs' },
  docsRepositoryBase: 'https://github.com/naws-ai/getblobs-docs/tree/main/pages',
  footer: { content: '© GetBlobs' },
  darkMode: true
}

export default config
