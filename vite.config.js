import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',

                'resources/js/products.js',
                'resources/js/search.js',
                'resources/js/cart.js',
            ],
            refresh: true,
        }),
    ],
    resolve: {
    	alias: {
    		'~bootstrap': path.resolve(__dirname, 'node_module/boostrap'),
    	}
    },
});
