$(document).ready(function(){
	
	
	/* compare the next product */
	$("#next").click(function(){
		/* console.log($("#next").css( "left" )); */
		if (document.getElementById("next").style.left == "100%") {
		
		$("#next").animate({left: '75%'}, 500).delay( 500 ).html("<p>Close</p>");
		$("#nextpro").animate({left: '75%'}, 480);
		$("#nextpro #textblock1, #nextpro #textblock2").animate({width: '0px'}, 800);
		$("#nextpro #number").slideUp( 1 ).delay( 800 ).slideDown( 800 );
		$("#nextpro #nextimg").fadeOut( 1 ).fadeIn( 799 );
		$("#nextpro #dotbg").animate({height: '65px', width: '65px'});
		
		}
		else {
		
		$("#next").animate({left: '100%'}, 500).delay( 500 ).html("<p>Next</p>");
		$("#nextpro").animate({left: '100%'}, 480);
		$("#nextpro #textblock1").animate({width: '135px'}, 800);
		$("#nextpro #textblock2").animate({width: '165px'}, 800);
		$("#nextpro #number").slideDown( 800 ).delay( 800 ).slideUp( 1 );
		$("#nextpro #nextimg").fadeIn( 1 ).fadeOut( 799 );
		$("#nextpro #dotbg").animate({height: '0px', width: '0px'});
		
		
		}
		
	});
	
	/* $('img').on({
    'click': function() {
         var src = ($(this).attr('src') === 'img1_on.jpg')
            ? 'img2_on.jpg'
            : 'img1_on.jpg';
         $(this).attr('src', src);
    } */
	
	/* change to view the next produxt */
	$("#infobar").click(function(){
		$("#animatebg").animate({left: '0%'}).animate({width: '0%'});
		$("#next").animate({left: '120%'}, 100).html("<p>Next</p>").delay( 2200 ).animate({left: '100%'}, 800);
		$("#nextpro").animate({left: '100%'}, 480);
		$(".navbar div").delay( 100 ).slideUp( 600 ).delay( 800 ).slideDown( 400 );
		$(".center").fadeOut( 400 );
		$(".left-side #back, .left-side #type, .right p, .left-side #type2").css("width", "0px");
		$(".left-side #back, .right p").delay( 2300 ).animate({width: '180px'}, 800);
		$(".left-side #type, .left-side #type2").delay( 1500 ).animate({width: '180px'}, 800);
		$(".left-side #type2").html("Mine");
		$(".left-side #introcontent").html("This chair has 9 variantsants");
		$(".left-side #introcontent").hide ( 400 ).delay( 1100 ).show( 800 );
		$(".left-side #textblock3").delay( 800 ).css("height", "30px").delay( 2300 ).animate({height: '0px'}, 800);
		$(".center img").attr('src', 'the_mine_chair.jpg');
		$(".center").delay( 1300 ).fadeIn( 400 );
		$(".right span").hide( 100 ).delay( 2400 ).show( 800 );
		$
	});
});

	