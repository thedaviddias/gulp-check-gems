var gutil = require('gulp-util');
var through = require('through2');
var shell = require('shelljs');
var File = gutil.File;

const PLUGIN_NAME = 'gulp-check-gems';

function shellResult (gemfile) {
  var result = shell.exec('gem list -i ' + gemfile, { silent: true });
  return result.code;
}

function gulpCheckGems(options, task) {

  options = options || {};
  var gemfile = options.gemfile;

  // Check the presence of Ruby in your system
  if (!shell.which('ruby')) { throw new Error('gulp-check-gems: Ruby seems not to be installed in your system. Please install Ruby'); }
  // Check the stream child
  if (!task) { throw new Error('gulp-check-gems: You need to specify a child action!'); return done();}
  // In case, you don't specify the gemfile option
  if (!options.gemfile) { throw new Error('gulp-check-gems: Nothing to check, please specify your `gemfile`.'); }

  if (shellResult(gemfile) === 1) {
    console.log(PLUGIN_NAME, 'Your gem called "' + gemfile + '" was not found in your system!');
    return through.obj(function (file, enc, callback) { return this.push(file) })
  }
  else {
    stream = 'function' == typeof task ? task() : task;
  }

  return stream;

};

module.exports = gulpCheckGems;

