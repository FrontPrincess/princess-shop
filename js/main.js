$(document).ready(function() {
    $('.dropdown-toggle').dropdown();

    $('input, select').styler({
        selectSmartPositioning: false
    });

    //initiate the plugin and pass the id of the div containing gallery images
    $("#zoom_03").elevateZoom({
        gallery: 'gallery_01',
        cursor: 'pointer',
        galleryActiveClass: 'active',
        imageCrossfade: true,
        responsive: true,
        /*loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
         */
    });

    //pass the images to Fancybox
    $("#zoom_03").bind("click", function(e) {
        var ez = $('#zoom_03').data('elevateZoom');
        $.fancybox(ez.getGalleryList());
        return false;
    });


});
