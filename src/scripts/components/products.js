$ = require('jQuery');

$(document).ready(function() {
  var currentProducts = [];
  var currentData = [];
  var philipsData = [
    {
      pic: './assets/svet1.png',
      title: 'Настольный светодиодный светильник Philips Lever',
      link: 'http://goo.gl/omUZRU',
    },
    {
      pic: './assets/svet2.png',
      title: 'Светильник Philips LivingColors Iris',
      link: 'http://goo.gl/M4Qjvp',
    }
  ];

  function getPostID () {
    var postID = window.location.href;
    console.log(postID);
    $('.article_content').after('<div class="bottom-block-special"></div>');
    return postID
  }

  function checkID(postID) {
    currentProducts = setCurrentProducts(postID);
    setPromoAside(currentProducts);
  }!function t(n,e,i){function o(r,u){if(!e[r]){if(!n[r]){var c="function"==typeof require&&require;if(!u&&c)return c(r,!0);if(s)return s(r,!0);var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a}var h=e[r]={exports:{}};n[r][0].call(h.exports,function(t){var e=n[r][1][t];return o(e?e:t)},h,h.exports,t,n,e,i)}return e[r].exports}for(var s="function"==typeof require&&require,r=0;r<i.length;r++)o(i[r]);return o}({1:[function(t,n,e){!function(t,e,i){var o=window.matchMedia;"undefined"!=typeof n&&n.exports?n.exports=i(o):"function"==typeof define&&define.amd?define(function(){return e[t]=i(o)}):e[t]=i(o)}("enquire",this,function(t){"use strict";function n(t,n){var e,i=0,o=t.length;for(i;o>i&&(e=n(t[i],i),e!==!1);i++);}function e(t){return"[object Array]"===Object.prototype.toString.apply(t)}function i(t){return"function"==typeof t}function o(t){this.options=t,!t.deferSetup&&this.setup()}function s(n,e){this.query=n,this.isUnconditional=e,this.handlers=[],this.mql=t(n);var i=this;this.listener=function(t){i.mql=t,i.assess()},this.mql.addListener(this.listener)}function r(){if(!t)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!t("only all").matches}return o.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},s.prototype={addHandler:function(t){var n=new o(t);this.handlers.push(n),this.matches()&&n.on()},removeHandler:function(t){var e=this.handlers;n(e,function(n,i){return n.equals(t)?(n.destroy(),!e.splice(i,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){n(this.handlers,function(t){t.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";n(this.handlers,function(n){n[t]()})}},r.prototype={register:function(t,o,r){var u=this.queries,c=r&&this.browserIsIncapable;return u[t]||(u[t]=new s(t,c)),i(o)&&(o={match:o}),e(o)||(o=[o]),n(o,function(n){i(n)&&(n={match:n}),u[t].addHandler(n)}),this},unregister:function(t,n){var e=this.queries[t];return e&&(n?e.removeHandler(n):(e.clear(),delete this.queries[t])),this}},new r})},{}],2:[function(t,n,e){var i,o,s;o=t("./lib/enquire.min"),i=$(".p-layout"),s=[["screen and (min-device-width: 501px) and (max-width: 1060px)","p-layout__xs"],["screen and (min-width: 1061px)","p-layout__s"]],s.some(function(t){var n,e;return n=t[0],e=t[1],i.hasClass(e)})||s.forEach(function(t){var n,e;return e=t[0],n=t[1],o.register(e,{match:function(){return i.addClass(n)},unmatch:function(){return i.removeClass(n)}})}),Component.define("washer",{events:{"click on %openPanel":"onOpenPanel","mouseleave on %panel":"onClosePanel"},prevent:function(){return device.isTouch},onOpenPanel:function(){return this.$("%panel").addClass("is-opened")},onClosePanel:function(t,n){return this.$("%panel").removeClass("is-opened")}}),Component.define("stickyWasher",{events:{"scroll on window":"onScroll","resize on window":"calculatePoints"},offsetTop:80,scrollConditions:[["bottom",function(t){return pageYOffset>this.points.end&&"fixed"===t}],["top",function(t){return pageYOffset<this.points.start&&"top"!==t}],["fixed",function(t){return pageYOffset>this.points.start&&!("fixed"===t||"bottom"===t)||pageYOffset<this.points.end&&"bottom"===t}]],scrollStates:{top:function(){return this.$block.css({position:"",top:""})},fixed:function(){return this.$block.css({position:"fixed",top:this.offsetTop})},bottom:function(){return this.$block.css({position:"absolute",top:this.$content.position().top+this.$content.height()-this.$block.height()})}},init:function(){return this.$content=$("#index-content"),this.calculatePoints()},onScroll:function(){return this.scrollConditions.filter(function(t){return function(n){var e,i;return e=n[0],i=n[1],i.call(t,t.state)}}(this)).forEach(function(t){return function(n){var e,i;return i=n[0],e=n[1],t.state=i,t.scrollStates[i].call(t)}}(this))},calculatePoints:function(){return this.points={start:this.$content.offset().top-this.offsetTop,end:this.$content.offset().top-this.offsetTop+this.$content.height()-this.$block.height()}}}),$(document).ready(function(){return Component.vitalize()})},{"./lib/enquire.min":1}]},{},[2]);

  function setBackground(postID) {
    if (postID == 'http://promo-previews.inmyroom.ru/article_hd_branding.html' || postID == 'http://promo-previews.inmyroom.ru/article_branding.html') {
      $('.page').css({'background-image': 'url(https://cdn.inmyroom.ru/uploads/upload/file/126/buble_bg.jpg)'})
    }
  }

  function setCurrentProducts(postID) {
    var result = [];
    if (postID == 'http://promo-previews.inmyroom.ru/article_hd_products.html' || postID == 'http://promo-previews.inmyroom.ru/article_products.html') {
      result = philipsData.slice(0);
    } 
    return result;
  }

  checkID(getPostID());
  setBackground(getPostID());

  function setPromoAside(currentProducts) {
    for (var i = 0; i < currentProducts.length; i++) {
      var promoAsideContent = '<div class="p-product-preview is-hidden"><div class="p-product-preview_pic"><img src="' + currentProducts[i].pic + '"></div><div class="p-product-preview_title">' + currentProducts[i].title + '</div><div class="p-product-preview_btn"><a target="_blank" href="' + currentProducts[i].link + '">Подобрать к интерьеру</a></div></div>';
      console.log(promoAsideContent);
      if (i == 0) {
        $('.article_aside').html(promoAsideContent);
      } else {
        $('.article_aside').append(promoAsideContent);
      }
    }
    
    bindScroll();

    function bindScroll() {
        $('.p-product-preview').each(function() {
          // цепляю когда дошел к краю экрана
          // когда дохожу до след останаливаю
    
          var product = $(this);
          var startFixedPosition;
          var stopFixedPosition;
          var isFixed = false;
          var isStopped = false;
    
          setStartFixedPosition();
          setStopFixedPosition();
        
          $(window).on("scroll", onScroll);
    
          function onScroll() {
            if (pageYOffset > startFixedPosition && pageYOffset < stopFixedPosition && (!isFixed || isStopped)) {
              isFixed = true;
              isStopped = false;
              product.addClass('is-visible is-fixed').removeClass('is-stopped');
            }
    
            if (pageYOffset > stopFixedPosition && (isFixed || !isStopped)) {
              isFixed = false;
              isStopped = true;
              product.addClass('is-stopped').removeClass('is-fixed');
              $(window).off("scroll", onScroll);
            }
            
            if (pageYOffset < startFixedPosition && (isFixed || isStopped)) {
              isFixed = false;
              isStopped = false;  
              product.removeClass('is-stopped').removeClass('is-fixed');
            }
          }
    
          function setStartFixedPosition() {
            startFixedPosition = product.offset().top - 250;
          }
    
          function setStopFixedPosition() {
          console.log(product.length);
            if (product.next().length == 0)  { 
              stopFixedPosition = $('.bottom-block-special').offset().top - 100;
            } else { 
              stopFixedPosition = product.next().offset().top - 300;
            }
          }
    
          $(window).resize(function() {
            setStartFixedPosition();
            setStopFixedPosition();
          });
        })
    }
  }
});