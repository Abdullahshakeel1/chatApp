import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server:{
 
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure:false, 
      },
    },
  }
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://chat-app-vp7f.vercel.app', // Your backend URL
//         changeOrigin: true, // Changes the origin of the host header to the target URL
//         secure: false, // Allow self-signed certs (if applicable)
//       },
//     },
//   },
// });