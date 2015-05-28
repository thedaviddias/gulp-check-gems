# [gulp](https://gulpjs.com)-check-gems
[![Build Status](https://travis-ci.org/daviddiasfront/gulp-check-gems.svg?branch=master)](https://travis-ci.org/daviddiasfront/gulp-check-gems)

> Check the presence of a RubyGem in your system and execute a task

## Install

[![NPM](https://nodei.co/npm/gulp-check-gems.png?compact=true)](https://www.npmjs.org/package/gulp-check-gems)

```shell
$ npm install --save-dev gulp-check-gems
```

This plugin requires Ruby and your path configured.

## Usage

```js
var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var checkGem = require('gulp-check-gems');

gulp.task('sass', function () {
	return gulp.src('src/file.ext')
		.pipe(checkGem({gemfile: 'scss-lint'},
      		$.scsslint()
    	))
		.pipe(gulp.dest('dist'));
});
```


## API

### gemfile

- Type: `String`

```js
checkgem({
    gemfile: 'scss-lint'
});
```

## Changelog

### 0.0.1 Initial release
* initial code

## License

MIT © 2015 [David Dias](http://www.david-dias.com)
