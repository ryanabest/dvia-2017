var gulp = require('gulp');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('browser-sync', function () {
  bs.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('watch', gulp.parallel('browser-sync', function() {
    gulp.watch("**.html").on('change', bs.reload);
    gulp.watch("**/**/**/**.html").on('change', bs.reload);
    gulp.watch("**/**/**/**.css").on('change', bs.reload);
    gulp.watch("**/**/**/**.js").on('change', bs.reload);
    gulp.watch("*.css").on('change', bs.reload);
    gulp.watch("*.js").on('change', bs.reload);
}));
