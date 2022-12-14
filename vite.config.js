import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@components': fileURLToPath(new URL('./src/components', import.meta.url)),
			'@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
			'@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
			'@scss': fileURLToPath(new URL('./src/assets/scss', import.meta.url)),
			'@icons': fileURLToPath(new URL('./src/assets/icons', import.meta.url)),
			'@includes': fileURLToPath(new URL('./src/includes', import.meta.url)),
			'@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
			'@views': fileURLToPath(new URL('./src/views', import.meta.url)),
		}
	}
})