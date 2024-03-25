import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
// https://vitejs.dev/config/
export default defineConfig({
    // optimizeDeps: {
    //     esbuildOptions: {
    //         // Node.js global to browser globalThis
    //         define: {
    //             global: 'globalThis',
    //         },
    //         // Enable esbuild polyfill plugins
    //         plugins: [
    //             NodeGlobalsPolyfillPlugin({
    //                 buffer: true,
    //             }),
    //         ],
    //     },
    // },
    plugins: [react(), nodePolyfills()],
});
