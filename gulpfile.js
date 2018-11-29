var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
cssVars = require('postcss-simple-vars'),
autoprefixer = require('autoprefixer'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();


gulp.task('styles', function(){
	return gulp.src('./css/style.css')
		.pipe(postcss([cssImport, cssVars, nested, autoprefixer]))
		.pipe(gulp.dest('./temp/style.css'));
	
});

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


