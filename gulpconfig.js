module.exports = {
    jsFiles: [
        '!./node_modules/**',
        '!./bower_components/**',
        '!./client/assets/js/vendor/*.js',
        './client/assets/js/*.js',
        './client/app/**/*.js',
        './server/**/*.js'
    ],
    angularModulesFiles: ['./client/app/**/*.module.js'],
    angularFiles: ['!./client/app/**/*.module.js', './client/app/**/*.js'],
    sassFiles: './client/assets/sass/*.scss',
    sassInput: './client/assets/sass/styles.scss',
    outputCss: './client/assets/dist',
    htmlFiles: ['./client/**/*.html']
};
