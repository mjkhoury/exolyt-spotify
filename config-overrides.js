import { resolve } from 'path'

export default function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@Types': resolve(__dirname, 'src/types'),
      '@Context': resolve(__dirname, 'context'),
      '@Utils': resolve(__dirname, 'src/utils'),
      '@Theme': resolve(__dirname, 'src/theme'),
      '@Static': resolve(__dirname, 'src/static'),
      '@Styles': resolve(__dirname, 'src/styles'),
      '@Hooks': resolve(__dirname, 'src/hooks'),
      '@Assets': resolve(__dirname, 'src/assets'),
      '@Components': resolve(__dirname, 'src/components'),
      '@API': resolve(__dirname, 'pages/api')
    }
  }

  return config
}
