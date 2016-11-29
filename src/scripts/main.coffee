window.jQuery = window.$ = require('jquery')
window.jade = require('./lib/pug-runtime')

# require('fastclick')

data = require('./data/posts')
ga = require('./ga')

require('./lib/component')
require('./components/header')
require('./components/share-btn')
require('./components/products')
require('./components/washer')

# attachFastClick(document.body)

$(document).ready ->

  Component.vitalize()

  $('.promo-main-btn').click ->
    $('.is-hidden').removeClass('is-hidden')

  $('#hd').click ->
    $('.promo-main-btn').removeClass('is-active')
    $(@).addClass('is-active')
    $('#branding').attr('href', 'http://promo-previews.inmyroom.ru/article_hd_branding.html')
    $('#banner').attr('href', 'http://promo-previews.inmyroom.ru/article_hd_banner.html')
    $('#menu').attr('href', 'http://promo-previews.inmyroom.ru/article_hd_menu.html')
    $('#products').attr('href', 'http://promo-previews.inmyroom.ru/article_hd_products.html')
    $('#static').attr('href', 'http://promo-previews.inmyroom.ru/article_hd_banner_small.html'); 

  $('#default').click ->
    $('.promo-main-btn').removeClass('is-active')
    $(@).addClass('is-active')
    $('#branding').attr('href', 'http://promo-previews.inmyroom.ru/article_branding.html')
    $('#banner').attr('href', 'http://promo-previews.inmyroom.ru/article_banner.html')
    $('#menu').attr('href', 'http://promo-previews.inmyroom.ru/article_menu.html')
    $('#products').attr('href', 'http://promo-previews.inmyroom.ru/article_products.html')
    $('#static').attr('href', 'http://promo-previews.inmyroom.ru/article_banner_small.html');