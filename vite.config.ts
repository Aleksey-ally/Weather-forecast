import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

import {defineConfig} from 'vite'

export default defineConfig(() => {

    return {
        plugins: [react()],
        server: {
            host: '0.0.0.0',
            open: true,
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        },
        define: {
            __APP_ENV__: process.env.VITE_VERCEL_ENV,
        },
    }
})
