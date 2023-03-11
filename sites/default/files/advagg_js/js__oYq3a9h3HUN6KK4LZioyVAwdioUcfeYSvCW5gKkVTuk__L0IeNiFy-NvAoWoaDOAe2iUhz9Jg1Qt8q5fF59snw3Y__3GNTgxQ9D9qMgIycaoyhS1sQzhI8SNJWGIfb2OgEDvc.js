/**
 * @file
 * Google CSE JavaScript setup and invocation code.
 */

// Callback to grab search terms from the URL and feed them to Google.
window.__gcse = {
  callback: function () {
    var keys = [];
    if (Drupal.settings.googleCSE.keys) {
      // Get search keys passed by settings.
      keys[1] = Drupal.settings.googleCSE.keys;
    } else {
      // Fallback to get keys from URL, if not set in settings.
      keys = /.*\/search\/google\/(.+)/.exec(document.location.pathname);
    }
    if (keys) {
      var gcse = google.search.cse.element.getElement("google_cse");
      if (gcse) {
        gcse.execute(decodeURIComponent(keys[1]));
      }
    }
  }
};

// The Google CSE standard code, just changed to pick up the SE if
// ("cx") from Drupal.settings.
(function() {
  var cx = Drupal.settings.googleCSE.cx;
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
    '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
}
)();

// Added to send input from search block to Google endpoint.
// The Form API AJAX framework should probably be used here.
(function($) {
  Drupal.behaviors.form_submit_processor = {
    attach: function (context, settings) {
      $("form#google-cse-results-searchbox-form").submit(function (e) {
        e.preventDefault();
        keys = $('form#google-cse-results-searchbox-form #edit-query').val();
        if (keys) {
          var gcse = google.search.cse.element.getElement("google_cse");
          if (gcse) {
            gcse.execute(decodeURIComponent(keys));
          }
        }
      });
    }
  }
})(jQuery);

;/*})'"*/
;/*})'"*/
(function($) {

  // Behavior to load FlexSlider
  Drupal.behaviors.flexslider = {
    attach: function(context, settings) {
      var id;
      var sliders = [];
      if ($.type(settings.flexslider) !== 'undefined' && $.type(settings.flexslider.instances) !== 'undefined') {

        for (id in settings.flexslider.instances) {

          if (settings.flexslider.optionsets[settings.flexslider.instances[id]] !== undefined) {
            if (settings.flexslider.optionsets[settings.flexslider.instances[id]].asNavFor !== '') {
              // We have to initialize all the sliders which are "asNavFor" first.
              _flexslider_init(id, settings.flexslider.optionsets[settings.flexslider.instances[id]], context);
            } else {
              // Everyone else is second
              sliders[id] = settings.flexslider.optionsets[settings.flexslider.instances[id]];
            }
          }
        }
      }
      // Slider set
      for (id in sliders) {
        _flexslider_init(id, settings.flexslider.optionsets[settings.flexslider.instances[id]], context);
      }
    }
  };

  /**
   * Initialize the flexslider instance
   */

  function _flexslider_init(id, optionset, context) {
    $('#' + id, context).once('flexslider', function() {
      // Remove width/height attributes
      // @todo load the css path from the settings
      $(this).find('ul.slides > li *').removeAttr('width').removeAttr('height');

      if (optionset) {
        // Add events that developers can use to interact.
        $(this).flexslider($.extend(optionset, {
          start: function(slider) {
            slider.trigger('start', [slider]);
          },
          before: function(slider) {
            slider.trigger('before', [slider]);
          },
          after: function(slider) {
            slider.trigger('after', [slider]);
          },
          end: function(slider) {
            slider.trigger('end', [slider]);
          },
          added: function(slider) {
            slider.trigger('added', [slider]);
          },
          removed: function(slider) {
            slider.trigger('removed', [slider]);
          },
          init: function(slider) {
            slider.trigger('init', [slider]);
          }
        }));
      } else {
        $(this).flexslider();
      }
    });
  }

}(jQuery));

;/*})'"*/
;/*})'"*/
