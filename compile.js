var express = require('express'),
	app =  express(),
	qt = require('quickthumb'),
	stylus = require('stylus'),
    axis = require('axis'),
	autoprefixer = require('autoprefixer-stylus'),
    fs = require('fs'),
	im = require('imagemagick'),
	gm = require('gm'),
	thumb = require('node-thumbnail').thumb
//set filename to compile
var code = fs.readFileSync('./style.styl', 'utf8');

app.use('/public', qt.static(__dirname + ''));

stylus(code)
	.use(axis())
    .use(autoprefixer())
	.render(function(err,css) {
	if (err) return console.error(err);
	console.log(css);
//set output file
	fs.writeFile('style.css', css, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
});

//thumb
thumb({
  source: './img',
  destination: './img/thumb',
  concurrency: 4,
  width: 250,
}, function(err) {
  console.log('All done!');
});


