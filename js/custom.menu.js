 $(document).ready(function () {
    $(document).ready(function () {
        var url = window.location;
        /* $('ul#sidebarnav a[href="'+ url +'"]').parent().addClass('active'); */
        $('ul#sidebarnav a').filter(function() {
             return this.href == url;
        }).parent().addClass('active');
		
		$('ul#sidebarnav > li > ul > li').each(function(){
			var test = $(this).attr('class');
			if(test == "active"){
				$(this).parent().addClass('in')
				$(this).parents('li').addClass('active');
			}
		});
    });
	
 });