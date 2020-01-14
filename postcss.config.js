// It is handy to not have those transformations while we developing
    module.exports = {
        plugins: [
            /*require('autoprefixer'),*/
                require('autoprefixer')({
                    grid: true
                }),
            require('cssnano'),
            // More postCSS modules here if needed
        ]
    }