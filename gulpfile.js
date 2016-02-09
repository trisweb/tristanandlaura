var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var colors = require('colors');
var removeEmptyLines = require('gulp-remove-empty-lines');
var shell = require('gulp-shell');
var nodeStatic = require('node-static');
var http = require('http');

var errorHandler = function(err) {
  return notify({
    title: "SASS Compile Error",
    wait: false
  }).write({message: err.message, wait: false});
};

gulp.task('bower-files', function() {
	gulp.src(mainBowerFiles({ filter: /.*\.js$/i }))
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js'));

	gulp.src(mainBowerFiles({ filter: /.*\.css$/i }))
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('css'));
});

gulp.task('styles', function() {
	gulp.src('scss/main.scss')
		.pipe(sass({ outputStyle: 'nested' })
					.on('error', errorHandler))
		.pipe(removeEmptyLines())
		.pipe(gulp.dest('css'))
		.pipe(livereload({ auto: false }));
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(['scss/**/*.scss'], ['styles']);
	gulp.watch('bower.json', ['bower-files']);
});

gulp.task('deploy', shell.task([
	'rsync -azP css img js *.html trisweb@trisweb.com:/srv/www/tristanandlaura/'
]));

gulp.task('static', function(){
  // static server
  var file = new nodeStatic.Server('./', {
    cache: 3600,
    gzip: true
  });
  http.createServer(function (request, response){
    request.addListener('end', function(){
      file.serve(request, response);
    }).resume();
  }).listen( 8000 );
});

gulp.task('default', ['static', 'styles', 'watch']);
