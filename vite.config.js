// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// import react from '@vitejs/plugin-react';

// export default {
// 	plugins: [react()],
// 	optimizeDeps: {
// 		include: ['@fortawesome/fontawesome-free'],
// 	},
// };
// vite.config.js
import React from 'react';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		include: [
			'@fortawesome/react-fontawesome',
			'@fortawesome/free-solid-svg-icons',
		],
	},
});
