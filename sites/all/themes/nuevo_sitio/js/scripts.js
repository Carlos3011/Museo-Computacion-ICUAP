jQuery(document).ready(function() {
	jQuery("#flexslider-2 .views-field-field-imagen-slider-de-noticias").attr("data-aos", "fade-right");
	jQuery("#flexslider-2 .views-field-field-imagen-slider-de-noticias").attr("data-aos-duration", "1500");

});

jQuery(window).load(function(){
	jQuery("#flexslider-3 > .flex-direction-nav > li > a.flex-next").click(function() {
		/*.views-field-views-conditional-1 <- descubre mas
		.views-field-views-conditional <- titulo*/
		
		/*jQuery("#flexslider-2 .views-field-title").removeClass("fadein-left");
		jQuery("#flexslider-2 .views-field-title").hide();
		jQuery("#flexslider-2 .views-field-view-node").removeClass("fadein-right");
		jQuery("#flexslider-2 .views-field-view-node").hide();*/
		
		jQuery("#flexslider-3 .views-field-views-conditional").removeClass("fadein-left");
		jQuery("#flexslider-3 .views-field-views-conditional").hide();
		jQuery("#flexslider-3 .views-field-views-conditional-1").removeClass("fadein-right");
		jQuery("#flexslider-3 .views-field-views-conditional-1").hide();
		setTimeout(function() {
		/*	jQuery("#flexslider-2 .views-field-title").show();
			jQuery("#flexslider-2 .views-field-view-node").show();*/
			jQuery("#flexslider-3 .views-field-views-conditional").show();
			jQuery("#flexslider-3 .views-field-views-conditional-1").show();
		},10);
		
		setTimeout(function() {
			/*jQuery("#flexslider-2 .views-field-title").addClass("fadein-left");
			jQuery("#flexslider-2 .views-field-view-node").addClass("fadein-right");*/
			jQuery("#flexslider-3 .views-field-views-conditional").addClass("fadein-left");
			jQuery("#flexslider-3 .views-field-views-conditional-1").addClass("fadein-right");
		},500);
	});
		
	jQuery("#flexslider-3 > .flex-direction-nav > li > a.flex-prev").click(function() {

		/*jQuery("#flexslider-2 .views-field-title").removeClass("fadein-left");
		jQuery("#flexslider-2 .views-field-title").hide();
		jQuery("#flexslider-2 .views-field-view-node").removeClass("fadein-right");
		jQuery("#flexslider-2 .views-field-view-node").hide();
		*/
		jQuery("#flexslider-3 .views-field-views-conditional").removeClass("fadein-left");
		jQuery("#flexslider-3 .views-field-views-conditional").hide();
		jQuery("#flexslider-3 .views-field-views-conditional-1").removeClass("fadein-right");
		jQuery("#flexslider-3 .views-field-views-conditional-1").hide();
		setTimeout(function() {
			/*jQuery("#flexslider-2 .views-field-title").show();
			jQuery("#flexslider-2 .views-field-view-node").show();*/
			jQuery("#flexslider-3 .views-field-views-conditional").show();
			jQuery("#flexslider-3 .views-field-views-conditional-1").show();
		},10);
		
		setTimeout(function() {
			/*jQuery("#flexslider-2 .views-field-title").addClass("fadein-left");
			jQuery("#flexslider-2 .views-field-view-node").addClass("fadein-right");*/
			jQuery("#flexslider-3 .views-field-views-conditional").addClass("fadein-left");
			jQuery("#flexslider-3 .views-field-views-conditional-1").addClass("fadein-right");
		},500);
	}); 
	
	jQuery("#flexslider-2 > .flex-direction-nav > li > a.flex-next").click(function() {  
		jQuery("#flexslider-2 .views-field-field-descripcion-slider-n h2").removeClass("aos-init");
		jQuery("#flexslider-2 .views-field-field-imagen-slider-de-noticias").removeClass("aos-init");
		jQuery("#flexslider-2 .views-field-field-imagen-slider-de-noticias").removeClass("aos-animate");
		jQuery("#flexslider-2 .views-field-field-imagen-slider-de-noticias").hide();
		jQuery("#flexslider-2 .views-field-field-descripcion-slider-n h2").removeClass("aos-animate");
		jQuery("#flexslider-2 .views-field-field-descripcion-slider-n h2").hide();
		jQuery("#flexslider-2 .views-field-field-descripcion-slider-n p").removeClass("aos-init");
		jQuery("#flexslider-2 .views-field-field-descripcion-slider-n p").removeClass("aos-animate");
		jQuery("#flexslider-2 .views-field-field-descripcion-slider-n p").hide();

		
		setTimeout(function() {
			jQuery("#flexslider-2 .views-field-field-descripcion-slider-n p").show();
			jQuery("#flexslider-2 .views-field-field-imagen-slider-de-noticias").show();
			jQuery("#flexslider-2 .views-field-field-descripcion-slider-n h2").show();
		},10);
		
		setTimeout(function() {
			jQuery("#flexslider-2 .views-field-field-descripcion-slider-n h2").addClass("aos-init");
			jQuery("#flexslider-2 .views-field-field-descripcion-slider-n h2").addClass("aos-animate");
			jQuery("#flexslider-2 .views-field-field-imagen-slider-de-noticias").addClass("aos-init");
			jQuery("#flexslider-2 .views-field-field-imagen-slider-de-noticias").addClass("aos-animate");
			jQuery("#flexslider-2 .views-field-field-descripcion-slider-n p").addClass("aos-init");
			jQuery("#flexslider-2 .views-field-field-descripcion-slider-n p").addClass("aos-animate");
			
		},500);
	});
	
	jQuery("#flexslider-2 > .flex-direction-nav > li > a.flex-prev").click(function() {  
		jQuery("#flexslider-2 .views-field-field-descripcion-slider-n h2").removeClass("aos-init");
		jQuery("#flexslider-2 .views-field-field-imagen-slider-de-noticias").removeClass("aos-init");
		jQuery("#flexslider-2 .views-field-field-imagen-slider-de-noticias").removeClass("aos-animate");
		jQuery("#flexslider-2 .views-field-field-imagen-slider-de-noticias").hide();
		jQuery("#flexslider-2 .views-field-field-descripcion-slider-n h2").removeClass("aos-animate");
		jQuery("#flexslider-2 .views-field-field-descripcion-slider-n h2").hide();
		jQuery("#flexslider-2 .views-field-field-descripcion-slider-n p").removeClass("aos-init");
		jQuery("#flexslider-2 .views-field-field-descripcion-slider-n p").removeClass("aos-animate");
		jQuery("#flexslider-2 .views-field-field-descripcion-slider-n p").hide();

		
		setTimeout(function() {
			jQuery("#flexslider-2 .views-field-field-descripcion-slider-n p").show();
			jQuery("#flexslider-2 .views-field-field-imagen-slider-de-noticias").show();
			jQuery("#flexslider-2 .views-field-field-descripcion-slider-n h2").show();
		},10);
		setTimeout(function() {
			jQuery("#flexslider-2 .views-field-field-descripcion-slider-n h2").addClass("aos-init");
			jQuery("#flexslider-2 .views-field-field-descripcion-slider-n h2").addClass("aos-animate");
			jQuery("#flexslider-2 .views-field-field-imagen-slider-de-noticias").addClass("aos-init");
			jQuery("#flexslider-2 .views-field-field-imagen-slider-de-noticias").addClass("aos-animate");
			jQuery("#flexslider-2 .views-field-field-descripcion-slider-n p").addClass("aos-init");
			jQuery("#flexslider-2 .views-field-field-descripcion-slider-n p").addClass("aos-animate");
			
		},500);
    });	 
});

//Animaciones automáticas
/*.views-field-views-conditional-1 <- descubre mas
		.views-field-views-conditional <- titulo*/

jQuery(document).ready(function($) {
  $body = $('body');
  if($body.hasClass('front')){
    $('#flexslider-3.flexslider').on('before', function () {
        if('.slider_general #flexslider-3'){
            /*$('.slider_general #flexslider-2 .views-field-title').removeClass('fadein-left');
            $('.slider_general #flexslider-2 .views-field-title').hide();
            $('.slider_general #flexslider-2 .views-field-view-node').removeClass('fadein-right');
            $('.slider_general #flexslider-2 .views-field-view-node').hide();*/
                        
			$('.slider_general #flexslider-3 .views-field-views-conditional').removeClass('fadein-left');
            $('.slider_general #flexslider-3 .views-field-views-conditional').hide();
            $('.slider_general #flexslider-3 .views-field-views-conditional-1').removeClass('fadein-right');
            $('.slider_general #flexslider-3 .views-field-views-conditional-1').hide();
            setTimeout(function() {
               /* $('.slider_general #flexslider-2 .views-field-title').show();
                $('.slider_general #flexslider-2 .views-field-view-node').show();*/
				
				$('.slider_general #flexslider-3 .views-field-views-conditional').show();
                $('.slider_general #flexslider-3 .views-field-views-conditional-1').show();
            },10);
            
            setTimeout(function() {
               /* $('.slider_general #flexslider-2 .views-field-title').addClass('fadein-left');
                $('.slider_general #flexslider-2 .views-field-view-node').addClass('fadein-right');*/
				
				$('.slider_general #flexslider-3 .views-field-views-conditional').addClass('fadein-left');
                $('.slider_general #flexslider-3 .views-field-views-conditional-1').addClass('fadein-right');
            },500);
        }
    });
      
    $('#flexslider-2.flexslider').on('before', function () {
        if('.slide_noticia_principal #flexslider-2'){
            $('.slide_noticia_principal #flexslider-2 .views-field-field-descripcion-slider-n h2').removeClass('aos-init');
            $('.slide_noticia_principal #flexslider-2 .views-field-field-imagen-slider-de-noticias').removeClass('aos-init');
            $('.slide_noticia_principal #flexslider-2 .views-field-field-imagen-slider-de-noticias').removeClass('aos-animate');
            $('.slide_noticia_principal #flexslider-2 .views-field-field-imagen-slider-de-noticias').hide();
            $('.slide_noticia_principal #flexslider-2 .views-field-field-descripcion-slider-n h2').removeClass('aos-animate');
            $('.slide_noticia_principal #flexslider-2 .views-field-field-descripcion-slider-n h2').hide();$('#flexslider-1 .views-field-field-descripcion-slider-n p').removeClass('aos-init');
            $('.slide_noticia_principal #flexslider-2 .views-field-field-descripcion-slider-n p').removeClass('aos-animate');
            $('.slide_noticia_principal #flexslider-2 .views-field-field-descripcion-slider-n p').hide();
            
            setTimeout(function() {
                $('.slide_noticia_principal #flexslider-2 .views-field-field-descripcion-slider-n p').show();
                $('.slide_noticia_principal #flexslider-2 .views-field-field-imagen-slider-de-noticias').show();$('#flexslider-1 .views-field-field-descripcion-slider-n h2').show();
            },10);
            
            setTimeout(function() {
                $('.slide_noticia_principal #flexslider-2 .views-field-field-descripcion-slider-n h2').addClass('aos-init');
                $('.slide_noticia_principal #flexslider-2 .views-field-field-descripcion-slider-n h2').addClass('aos-animate');
                $('.slide_noticia_principal #flexslider-2 .views-field-field-imagen-slider-de-noticias').addClass('aos-init');
                $('.slide_noticia_principal #flexslider-2 .views-field-field-imagen-slider-de-noticias').addClass('aos-animate');
                $('.slide_noticia_principal #flexslider-2 .views-field-field-descripcion-slider-n p').addClass('aos-init');
                $('.slide_noticia_principal #flexslider-2 .views-field-field-descripcion-slider-n p').addClass('aos-animate');
            },500);
        }
    });  
  }
});
