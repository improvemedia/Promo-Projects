window.jQuery = window.$ = require('jquery')
window.jade = require('./lib/pug-runtime')

require('fastclick')

data = require('./data/posts')
ga = require('./ga')

require('./lib/component')
require('./components/header')
require('./components/share-btn')

attachFastClick(document.body)

$(document).ready ->

  Component.vitalize()