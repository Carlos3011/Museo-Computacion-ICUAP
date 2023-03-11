/**
 * @file
 * Enable Parallax effect for any block created by the user
 *
 * This module enables the user to select none, Same, or Opposite directions
 * when creating a block. Selecting Same or Opposite places a data attribute
 * which is ready by the attached javascript file, and then targeted for
 * calculations causing parallax effect based on 'same' or 'opposite' value.
 */

(function ($, Drupal, window, document, undefined) {

  Drupal.behaviors.parallax_admin = {
    attach: function(context, settings) {

    $(function() {

      // Enable parallax only if not mobile device
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) === false) {
        enableParallax(parallaxItems);
      }
    });
    }
  };

  // This function currently accepts an array of target selectors in the form
  // of strings, cycled through for parallax effects.
  function enableParallax(targetsObj) {
    $.each(targetsObj, function() {

      var currentObj = this;

      // check if object exists on page
      if ($(currentObj[0]).length > 0) {
        $(window).load(function() {
          parallaxCalculation(currentObj);
        });
        $(window).scroll(function() {
          parallaxCalculation(currentObj);
        });
        $(window).resize(function() {
          parallaxCalculation(currentObj);
        });
      }
    });
  }

  // Determines if each element passed to enableParallax is in the viewport and
  // passes through TRUE when element dimensions first are visible in viewport
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    if (elem.offset() !== null) {
      var elemTop = elem.offset().top;
      var elemBottom = elemTop + elem.height();
      return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    } else {
      return true;
    }
  }

  function parallaxCalculation(currentObj) {
    var $currentSelector = $(currentObj[0]);
    var verticalValue = currentObj[1];
    var horizontalValue = currentObj[2];

    if (isScrolledIntoView($currentSelector)) {   //On Scroll or Load, check if object is in view
      // Calculate position of top of target element relative to top of page
      // and height of target element
      var divTop = $currentSelector.offset().top;
      var divHeight = $currentSelector.height();

      // Calculate distance scrolled from top, the center of the viewport
      // (necessary for calculations), and the height of the viewport
      var docViewTop = $(window).scrollTop();
      var docViewSize = $(window).height();
      var docViewCenter = docViewTop + (docViewSize / 2);

      // Calculate the full range of effective parallax movement on the page
      var fullRange = docViewSize + divHeight;

      // My head hurts too much to explain this one. Ask Kyle.
      var currPosition = docViewCenter - (divTop - (docViewSize / 2));

      // Calculate percentage location of current position baseed on full range of parallax movement
      var currVerticalPercentage = (currPosition / fullRange) * 100;
      var currHorizontalPercentage = (currPosition / fullRange) * 100;

      // Determines if vertical parallax direction is opposite, and invertes the value
      // on a scale of 1-100
      if (verticalValue.indexOf("bottom-to-top") > -1) {
        $currentSelector.attr("data-position-vertical", currVerticalPercentage);
        currVerticalPercentage = 100 - $currentSelector.attr("data-position-vertical");
      }
      if (horizontalValue.indexOf("right-to-left") > -1) {
        $currentSelector.attr("data-position-horizontal", currHorizontalPercentage);
        currHorizontalPercentage = 100 - $currentSelector.attr("data-position-horizontal");
      }

      // Horizontal Background Percentage
      if (horizontalValue != "none") {
        coords = currHorizontalPercentage + "%";
      } else {
        coords = "50%";
      }

      // Vertical Background Percentage
      if (verticalValue != "none") {
        coords += " " + currVerticalPercentage + "%";
      } else {
        coords += " 50%";
      }

      // Apply background Position and apply background-size: Cover to avoid image tiling
      $currentSelector.css({ "backgroundPosition": coords });
    }
  }
})(jQuery, Drupal, this, this.document);

;/*})'"*/
;/*})'"*/
Drupal.TBMegaMenu = Drupal.TBMegaMenu || {};

(function ($) {
  Drupal.TBMegaMenu.oldWindowWidth = 0;
  Drupal.TBMegaMenu.displayedMenuMobile = false;
  Drupal.TBMegaMenu.supportedScreens = [980];
  Drupal.TBMegaMenu.menuResponsive = function () {
    var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    var navCollapse = $('.tb-megamenu').children('.nav-collapse');
    if (windowWidth < Drupal.TBMegaMenu.supportedScreens[0]) {
      navCollapse.addClass('collapse');
      if (Drupal.TBMegaMenu.displayedMenuMobile) {
        navCollapse.css({height: 'auto', overflow: 'visible'});
      } else {
        navCollapse.css({height: 0, overflow: 'hidden'});
      }
    } else {
      // If width of window is greater than 980 (supported screen).
      navCollapse.removeClass('collapse');
      if (navCollapse.height() <= 0) {
        navCollapse.css({height: 'auto', overflow: 'visible'});
      }
    }
  };
  
  Drupal.behaviors.tbMegaMenuAction = {
    attach: function(context) {
      $('.tb-megamenu-button', context).once('menuIstance', function () {
        var This = this;
        $(This).click(function() {
          if(parseInt($(this).parent().children('.nav-collapse').height())) {
            $(this).parent().children('.nav-collapse').css({height: 0, overflow: 'hidden'});
            Drupal.TBMegaMenu.displayedMenuMobile = false;
          }
          else {
            $(this).parent().children('.nav-collapse').css({height: 'auto', overflow: 'visible'});
            Drupal.TBMegaMenu.displayedMenuMobile = true;
          }
        });
      });
      
      
      var isTouch = 'ontouchstart' in window && !(/hp-tablet/gi).test(navigator.appVersion);
      if(!isTouch){
        $(document).ready(function($){
          var mm_duration = 0;
          $('.tb-megamenu').each (function(){
            if ($(this).data('duration')) {
              mm_duration = $(this).data('duration');
            }
          });
          var mm_timeout = mm_duration ? 100 + mm_duration : 500;
          $('.nav > li, li.mega').hover(function(event) {
            var $this = $(this);
            if ($this.hasClass ('mega')) {
              $this.addClass ('animating');
              clearTimeout ($this.data('animatingTimeout'));
              $this.data('animatingTimeout', setTimeout(function(){$this.removeClass ('animating')}, mm_timeout));
              clearTimeout ($this.data('hoverTimeout'));
              $this.data('hoverTimeout', setTimeout(function(){$this.addClass ('open')}, 100));  
            } else {
              clearTimeout ($this.data('hoverTimeout'));
              $this.data('hoverTimeout', 
              setTimeout(function(){$this.addClass ('open')}, 100));
            }
          },
          function(event) {
            var $this = $(this);
            if ($this.hasClass ('mega')) {
              $this.addClass ('animating');
              clearTimeout ($this.data('animatingTimeout'));
              $this.data('animatingTimeout', 
              setTimeout(function(){$this.removeClass ('animating')}, mm_timeout));
              clearTimeout ($this.data('hoverTimeout'));
              $this.data('hoverTimeout', setTimeout(function(){$this.removeClass ('open')}, 100));
            } else {
              clearTimeout ($this.data('hoverTimeout'));
              $this.data('hoverTimeout', 
              setTimeout(function(){$this.removeClass ('open')}, 100));
            }
          });
        });
      }
      
      $(window).resize(function() {
        var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
        if(windowWidth != Drupal.TBMegaMenu.oldWindowWidth){
          Drupal.TBMegaMenu.oldWindowWidth = windowWidth;
          Drupal.TBMegaMenu.menuResponsive();
        }
      });
    },
  }
})(jQuery);


;/*})'"*/
;/*})'"*/
Drupal.TBMegaMenu = Drupal.TBMegaMenu || {};

(function ($) {
  Drupal.TBMegaMenu.createTouchMenu = function(items) {
      items.children('a').each( function() {
	var $item = $(this);
        var tbitem = $(this).parent();
        $item.click( function(event){
          if ($item.hasClass('tb-megamenu-clicked')) {
            var $uri = $item.attr('href');
            window.location.href = $uri;
          }
          else {
            event.preventDefault();
            $item.addClass('tb-megamenu-clicked');
            if(!tbitem.hasClass('open')){	
              tbitem.addClass('open');
            }
          }
        }).closest('li').mouseleave( function(){
          $item.removeClass('tb-megamenu-clicked');
          tbitem.removeClass('open');
        });
     });
     /*
     items.children('a').children('span.caret').each( function() {
	var $item = $(this).parent();
        $item.click(function(event){
          tbitem = $item.parent();
          if ($item.hasClass('tb-megamenu-clicked')) {
            Drupal.TBMegaMenu.eventStopPropagation(event);
            if(tbitem.hasClass('open')){	
              tbitem.removeClass('open');
              $item.removeClass('tb-megamenu-clicked');
            }
          }
          else {
            Drupal.TBMegaMenu.eventStopPropagation(event);
            $item.addClass('tb-megamenu-clicked');
            if(!tbitem.hasClass('open')){	
              tbitem.addClass('open');
              $item.removeClass('tb-megamenu-clicked');
            }
          }
        });
     });
     */
  }
  
  Drupal.TBMegaMenu.eventStopPropagation = function(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    else if (window.event) {
      window.event.cancelBubble = true;
    }
  }  
  Drupal.behaviors.tbMegaMenuTouchAction = {
    attach: function(context) {
      var isTouch = 'ontouchstart' in window && !(/hp-tablet/gi).test(navigator.appVersion);
      if(isTouch){
        $('html').addClass('touch');
        Drupal.TBMegaMenu.createTouchMenu($('.tb-megamenu ul.nav li.mega').has('.dropdown-menu'));
      }
    }
  }
})(jQuery);

;/*})'"*/
;/*})'"*/
