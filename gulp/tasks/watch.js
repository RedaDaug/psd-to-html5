var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch', function(){
	
	browserSync.init({
		server: {
			baseDir: "."
		}
	});
	
	watch('./css/**/*.css', function(){
		gulp.start('styles');
	});
	
	
});