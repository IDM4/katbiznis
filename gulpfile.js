

var gulp = require( "gulp" ),
    image = require( "gulp-image" ),
    pug = require( "gulp-pug" ),
    sass = require( "gulp-sass" ),
    autoprefixer = require( "gulp-autoprefixer" ),
    csso = require( "gulp-csso" );

// Task for images
gulp.task( "images", function() {
    gulp.src( "src/images/**" )
        .pipe( image() )
        .pipe( gulp.dest("assets/images") );
} );
// Task for styles
gulp.task( "css", function() {
    gulp.src( "src/sass/**/*.scss" )
        .pipe( sass().on( ".error", sass.logError) )
        .pipe( autoprefixer() )
        .pipe( csso() )
        .pipe( gulp.dest("assets/css") );
} );

// Task for pug

gulp.task( "html", function() {
    gulp.src( "src/pug/**/*.pug" )
        .pipe( pug() )
        .pipe( gulp.dest(".") );
} );

// Task for js

// watch tasks

// aliases