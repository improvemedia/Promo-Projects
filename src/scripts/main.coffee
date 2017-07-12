window.jQuery = window.$ = require('jquery')
window.jade = require('./lib/pug-runtime')

data = require('./data/posts')
ga = require('./ga')

require('./lib/component')
require('./components/header')
require('./components/share-btn')
require('./components/products')
require('./components/stickyWasher')
require('./components/washer')

$(document).ready ->

  Component.vitalize()
  # stickyWasher.init()
  # washer.init()


  $('.promo-main-btn').click ->
    $('.is-hidden').removeClass('is-hidden')

  $('#hd').click ->
    $('.promo-main-btn').removeClass('is-active')
    $(@).addClass('is-active')
    $('#branding').attr('href', '/article_hd_branding.html')
    $('#banner').attr('href', '/article_hd_banner.html')
    $('#menu').attr('href', '/article_hd_menu.html')
    $('#products').attr('href', '/article_hd_products.html')
    $('#static').attr('href', '/article_hd_banner_small.html')
    $('#washer').css({'opacity': 1})

  $('#default').click ->
    $('.promo-main-btn').removeClass('is-active')
    $(@).addClass('is-active')
    $('#branding').attr('href', '/article_branding.html')
    $('#banner').attr('href', '/article_banner.html')
    $('#menu').attr('href', '/article_menu.html')
    $('#products').attr('href', '/article_products.html')
    $('#static').attr('href', '/article_banner_small.html')
    $('#washer').css({'opacity': 0})