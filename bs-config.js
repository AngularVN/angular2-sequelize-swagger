var proxyMiddleware = require('http-proxy-middleware');
var fallbackMiddleware = require('connect-history-api-fallback');

module.exports = {
    port: 8000,
    files: ["public/**/*.{html,htm,css,js}"],
    server: {
        baseDir: "public",
        middleware: {
            1: proxyMiddleware('/api', {
                target: 'http://localhost:3000',
                changeOrigin: false   
            }),       
            2: proxyMiddleware('/swagger', {
                target: 'http://localhost:3000',
                changeOrigin: false   
            })           
        }
    }
};