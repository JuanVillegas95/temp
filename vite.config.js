import { defineConfig } from 'vite';

export default defineConfig({
    root: 'public',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: 'public/index.html',
                admin: 'public/admin.html',
            }
        }
    },
    server: {
        proxy: {
            '/api': 'http://localhost:3000/'
        }
    }
});
