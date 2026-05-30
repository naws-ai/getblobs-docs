import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/logo.svg" alt="GetBlobs" style={{ height: 22 }} />
      <span style={{ marginLeft: 8, fontWeight: 400, fontSize: 16, opacity: 0.5, letterSpacing: '0.02em' }}>Docs</span>
    </>
  ),
  head: (
    <>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400..800&display=swap" rel="stylesheet" />
      <style>{`body, .nextra-content { font-family: 'Wix Madefor Display', sans-serif; }`}</style>
    </>
  ),
  project: { link: '' },
  docsRepositoryBase: 'https://github.com/naws-ai/getblobs-docs/tree/main/pages',
  feedback: { content: null },
  editLink: { component: null },
  footer: { content: '© GetBlobs' },
  darkMode: true
}

export default config
