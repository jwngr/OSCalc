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
gulp.task("scripts", function() {
  return gulp.src("src/**/*.js")
    // Lint
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"))
    .pipe(jshint.reporter("fail"))

    // Write un-minified version
    .pipe(gulp.dest("dist"))

    // Minify
    .pipe(uglify({
      preserveComments: "some"
    }))

    // Rename file
    .pipe(concat("oscalc.min.js"))

    // Write minified version to the distribution directory
    .pipe(gulp.dest("dist"));
});

/* Re-runs the "scripts" task every time a script file changes */
gulp.task("watch", function() {
  gulp.watch(["src/**/*.js"], ["scripts"]);
});

/* Builds the distribution files */
gulp.task("build", ["scripts"]);

/* Runs the "test" and "scripts" tasks by default */
gulp.task("default", ["build"]);
