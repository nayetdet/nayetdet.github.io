module.exports = {
  ci: {
    collect: {
      startServerCommand: 'bunx vite preview --host 127.0.0.1',
      startServerReadyPattern: 'http://',
      startServerReadyTimeout: 30_000,
      url: ['http://127.0.0.1:4173/'],
      numberOfRuns: 1,
      settings: {
        onlyCategories: [
          'performance',
          'accessibility',
          'best-practices',
          'seo',
        ],
        chromeFlags: '--no-sandbox',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.6 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],
      },
    },
    upload: { target: 'filesystem', outputDir: '.lighthouseci' },
  },
};
