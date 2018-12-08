var gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssVars = require('postcss-simple-vars'),
autoprefixer = require('autoprefixer'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');



gulp.task('styles', function(){
	return gulp.src('./css/style.css')
		.pipe(postcss([cssImport, mixins, cssVars, nested, autoprefixer]))
		.pipe(gulp.dest('./temp'));
	
});


