import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ 
        fontWeight: 'bold', 
        fontSize: '20px',
        color: '#2563eb',
        fontFamily: 'Inter, sans-serif'
      }}>
        nummi
      </span>
      <span style={{ marginLeft: '8px', color: '#6b7280', fontSize: '14px' }}>
        docs
      </span>
    </div>
  ),
  project: {
    link: 'https://github.com/nummi-ai/nummi',
  },
  chat: {
    link: 'https://chat.nummi.ai',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  docsRepositoryBase: 'https://github.com/nummi-ai/nummi-docs/tree/main',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} © Nummi AI. Built with{' '}
        <a href="https://nextra.site" target="_blank" rel="noopener noreferrer">
          Nextra
        </a>
        .
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nummi Documentation" />
      <meta property="og:description" content="Learn how to use Nummi, the AI-first workspace for creators and teams." />
      <meta name="description" content="Learn how to use Nummi, the AI-first workspace for creators and teams." />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Nummi Docs'
    }
  },
  primaryHue: 217, // Nummi blue
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
  },
}

export default config