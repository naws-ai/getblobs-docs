import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/logo.svg" alt="GetBlobs" style={{ height: 18 }} />
      <span style={{ marginLeft: 6, fontWeight: 500, fontSize: 13, opacity: 0.6 }}>Docs</span>
    </>
  ),
  head: (
    <>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </>
  ),
  navbar: {
    extraContent: (
      <a href="https://getblobs.com" target="_blank" rel="noreferrer" style={{ fontSize: 13, opacity: 0.6 }}>
        ← GetBlobs
      </a>
    )
  },
  project: { link: 'https://github.com/naws-ai/getblobs-docs' },
  docsRepositoryBase: 'https://github.com/naws-ai/getblobs-docs/tree/main/pages',
  feedback: { content: null },
  editLink: { component: null },
  footer: { content: '© GetBlobs' },
  darkMode: true
}

export default config
