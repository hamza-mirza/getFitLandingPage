//Plugin variables
var gulp = require("gulp"),
watch = require("gulp-watch"),
uglify = require('gulp-uglify'),
minify = require("gulp-minify-css"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
cssImport = require("postcss-import"),
plumber = require("gulp-plumber"),
browserSync = require("browser-sync").create();

//File paths

var cssPath = "resources/css/styles.css",
cssWatchPath = "resources/css/**/*.css";
jsPath = "resources/js/**/*.js",
distPathCss = "resources/dist/css",
distPathJs = "resources/dist/js";

//Plumber error function
var onError = function(err) {
    console.log(err);
    this.emit("end");
}

//Tasks
gulp.task("styles", function(){
    return gulp.src(cssPath).
    pipe(plumber({
        errorHandler: onError
    })).
    pipe(postcss([cssImport, autoprefixer])).
    pipe(postcss([ require('postcss-simple-vars')({ silent: true }) ])).
    pipe(minify()).
    pipe(gulp.dest(distPathCss));
});

gulp.task('scripts', function () {
	console.log('starting scripts task');

	return gulp.src(jsPath)
		.pipe(uglify())
		.pipe(gulp.dest(distPathJs));
});

gulp.task("watch", function(){

    browserSync.init({
        notify: false,
        server: {
            baseDir: "."
        }
    });

    watch('./index.html', function(){
        browserSync.reload();
    });
    watch(cssWatchPath, function(){
        gulp.start('cssInject');
    });
});

gulp.task("cssInject", ['styles'], function(){
    return gulp.src(distPathCss).
    pipe(browserSync.stream());
});
