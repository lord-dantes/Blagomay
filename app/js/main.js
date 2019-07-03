$('.banner-carousel').owlCarousel({
	items:1,
	loop: false,
	dots: true,
	autoplay:true,
	autoplayTimeout:5000,
	responsive:{
		0:{
			items:1,
		},
		992:{
			items:1,
		}
	}
})
$('.rewrite-carousel').owlCarousel({
	items: 4,
	dots: true,
	responsive:{
		0:{
			items: 1
		},
		560:{
			items: 2
		},
		992:{
			items:4,
		}
	}
})
$('.partners-carousel').owlCarousel({
	items: 3,
	dots: true,
	responsive:{
		0:{
			items:1,
		},
		560:{
			items: 3,
		},
		992:{
			items:4,
		}
	}
});
$('.stock-carousel').owlCarousel({
	items: 3,
	dots: true,
	responsive:{
		0:{
			items:1,
		},
		992:{
			items: 3,
		}
	}
})
$('.hamburger__box').click(function(event) {
	$('.header__wrapper').toggleClass('header-active-mobile-nav');
});
// maps
var mapsid = ["Uzhgorod", "Lviv", "IvanFrankiv","Chernivsi","Ternopil","Rivne","Lutsk","Jitomir","Xmelnitsk","Vinntsya","Mykolaiv","Odessa","Simpheropol","Xerson","Zaporijjya","Donetsk","Lugansk","Kyiv","Cherkasi","Poltava","Kropivnitskyi","Dnipro","Kharkiv","Sumi","Chernigiv"];
mapsid.forEach(function(mapregion) {
// popup
	$('#' + mapregion).click(function(event) {
		$('.modal-region__wrapper').addClass('modal-region__wrapper-active');
		$('.modal-region__background').addClass('modal-region__background-active');
	});
	$('.modal-region__background').click(function(event) {
		$(this).removeClass('modal-region__background-active');
		$('.modal-region__wrapper-active').removeClass('modal-region__wrapper-active');
	});
	$('.modal-close').click(function(event) {
		$('.modal-region__background-active').removeClass('modal-region__background-active');
		$('.modal-region__wrapper-active').removeClass('modal-region__wrapper-active');
	});
// hover
	$('#' + mapregion).hover(function () {
		$('#' + mapregion).css({fill : '#008C40',})
		$('#' + mapregion + 'txt').css({fill: 'white',})
	},
	function () {
		$('#' + mapregion).css({fill : 'white',})
		$('#' + mapregion + 'txt').css({fill: 'black',})
	});
// endhover
});