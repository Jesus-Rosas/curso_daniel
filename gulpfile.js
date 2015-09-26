var gulp = require('gulp');
	stylus = require('gulp-stylus');
	uglify = require('gulp-uglify');
	watch = require('gulp-watch');



/*Stylus*/
gulp.task('stylus', function(){
	gulp.src('src/stylus/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('build/css'))
	});

/*Comprimir JavaScript*/
gulp.task('compress', function(){
		gulp.src('src/js/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('build/js'))
	});


/*Observar Archivos*/
gulp.task('wath-files', function(){
		gulp.watch('src/**/*.styl', ['stylus']);
		gulp.watch('src/**/*.js', ['compress']);
});

/*default*/
gulp.task('default', ['wath-files'])