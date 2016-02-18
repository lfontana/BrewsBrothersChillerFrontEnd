var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], function() {

	browserSync.init({
			server: {
					baseDir: "./"
			}
	});

	gulp.watch("./**/*.scss", ['sass']).on('change', browserSync.reload);
	gulp.watch("./js/**.js").on('change', browserSync.reload);
	gulp.watch("./*.html").on('change', browserSync.reload);

});

/* Need to make sure Angular will take the compression. */

// gulp.task('compress', function () {
// 	return gulp.src('./js/**/*.js')
// 		.pipe(minify())
// 		.pipe(gulp.dest('./build'));
// });

gulp.task('sass', function() {
    return gulp.src("./css/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('test', function() {
	console.log('this is where my tests will go');
	return;
});

gulp.task('default', ['serve']);
