var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("Hooray");
});

gulp.task('html', function() {
    console.log("Imagine something useful");
});

gulp.task('styles', function() {
    console.log("Imagine sass or postcss running");
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    })
});
