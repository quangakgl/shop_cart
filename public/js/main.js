/*price range*/


	var RGBChange = function() {
	  $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	};	
		
/*scroll to top*/

$(document).ready(function(){
	$(function () {
		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 300, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 300, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
	});
});


function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}

function totalMoney(){
    var value1 = $('input[data-idsub="1"]').val();
    var price1 = $('input[data-idsub="1"]').attr('data-price');
    var total1 = value1 * price1;

    var value2 = $('input[data-idsub="2"]').val();
    var price2 = $('input[data-idsub="2"]').attr('data-price');
    var total2 = value2 * price2;

    var value3 = $('input[data-idsub="3"]').val();
    var price3 = $('input[data-idsub="3"]').attr('data-price');
    var total3 = value3 * price3;

    var total = total1+total2+total3;

    $('#total-money').text(addCommas(total));
}


function plus(p){
    var dataID = $(p).data('idsub');
    var value = $('input[data-idsub='+dataID+']').val();
    $('input[data-idsub='+dataID+']').val(+value+1);
    totalMoney();
}

function minus(m) {
    var dataID = $(m).data('idsub');
    var value = $('input[data-idsub='+dataID+']').val();
    if (value > 0) {
        $('input[data-idsub='+dataID+']').val(+value-1);
    }
    totalMoney();
}


$("input").on('change', function(){
    totalMoney();
})


function addCart(){
    Lobibox.notify('success', {
        size: 'mini',
        rounded: true,
        delay: 1000,
        msg: 'Sản phẩm đã được thêm vào giỏ hàng thành công!'
    });
}


// target element
// $(".my-rating").starRating({
//     initialRating: 4.5,
//     disableAfterRate: false,
// });