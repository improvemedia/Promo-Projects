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
  }

  function setBackground(postID) {
    if (postID == 'http://localhost:8080/article_hd_branding.html' || postID == 'http://localhost:8080/article_branding.html') {
      $('.page').css({'background-image': 'url(https://cdn.inmyroom.ru/uploads/upload/file/126/buble_bg.jpg)'})
    }
  }

  function setCurrentProducts(postID) {
    var result = [];
    if (postID == 'http://localhost:8080/article_hd_products.html' || postID == 'http://localhost:8080/article_products.html') {
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