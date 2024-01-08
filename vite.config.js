import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                'resources/css/onboarding.css',
                'resources/frontend/css/frontend.css',
                
                'resources/sass/admin.scss',
                'resources/sass/app.scss',
                
                'resources/js/onboarding.js',
                'resources/frontend/js/frontend.js',              

            ],
            refresh: true,
        }),
    ],

});