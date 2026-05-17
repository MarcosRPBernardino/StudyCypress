import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from '@babel/core'
import istanbulModule from 'babel-plugin-istanbul'

const { transformAsync } = babel
const istanbul = istanbulModule.default ?? istanbulModule

const isAppSource = (id) => {
  const filePath = id.split('?')[0].replace(/\\/g, '/')

  return filePath.includes('/src/') && /\.(js|jsx)$/.test(filePath)
}

const istanbulCoveragePlugin = () => ({
  name: 'istanbul-coverage',
  apply: 'serve',
  enforce: 'post',
  async transform(code, id) {
    if (!isAppSource(id)) {
      return null
    }

    const result = await transformAsync(code, {
      filename: id.split('?')[0],
      babelrc: false,
      configFile: false,
      sourceMaps: true,
      parserOpts: {
        plugins: ['jsx'],
      },
      plugins: [
        [
          istanbul,
          {
            exclude: ['node_modules/**', 'cypress/**'],
          },
        ],
      ],
    })

    return {
      code: result.code,
      map: result.map,
    }
  },
})

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    port: 5173,
    strictPort: true,
  },
  plugins: [
    react(),
    mode === 'coverage' ? istanbulCoveragePlugin() : null,
  ],
}))
