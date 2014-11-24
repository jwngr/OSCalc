/**************/
/*  REQUIRES  */
/**************/
var gulp = require("gulp");

// File IO
var concat = require("gulp-concat");
var jshint = require("gulp-jshint");
var uglify = require("gulp-uglify");


/***********/
/*  TASKS  */
/***********/
/* Lints, minifies, and concatenates the script files */
gulp.task("build", function() {
  // Create a stream from the source files
  return gulp.src("src/**/*.js")
    // Lint
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"))
    .pipe(jshint.reporter("fail"))

    // Write the un-minified version to the distribution directory
    .pipe(gulp.dest("dist"))

    // Minify
    .pipe(uglify({
      preserveComments: "some"
    }))

    // Rename the minified file
    .pipe(concat("oscalc.min.js"))

    // Write the minified file to the distribution directory
    .pipe(gulp.dest("dist"));
});

/* Re-builds the distribution files every time a source file changes */
gulp.task("watch", function() {
  gulp.watch(["src/**/*.js"], ["build"]);
});

/* Runs the scripts" tasks by default */
gulp.task("default", ["build"]);
