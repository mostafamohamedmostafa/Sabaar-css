(function($){
    

    $(document).ready(function() {
        $('#toggle').on('click', function(e){
            $("#overlay").toggle('fast');
        });
    });
    
})(jQuery);