var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('html', function(){
	 gulp.src('./src/index.html')
		.pipe(gulp.dest('./dist'));
});

gulp.task('img', function(){
	 gulp.src('./src/img/*.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/img'));
});

gulp.task('default', ['html', 'img']);
