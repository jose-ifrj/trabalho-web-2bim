// Add JS here
$(function(){
    var $togglerIcon = $('#navTogIcon');
    var $navtoggler = $('#navbarToggler');

    $('#navTogIcon').on('click',function() {$navtoggler.trigger('click');});

    $('#navbarToggler').on('click',function() {
        if($navtoggler.hasClass('collapsed')) {
            $togglerIcon.removeClass('activated');
            $navtoggler.removeClass('activated');
    
            $togglerIcon.addClass('deactivated');
            $navtoggler.addClass('deactivated');
        } else {
            $togglerIcon.removeClass('deactivated');
            $navtoggler.removeClass('deactivated');

            $togglerIcon.addClass('activated');
            $navtoggler.addClass('activated');
        };
    })

    updateTogglerIcon();
});