'use strict';
var url_home = 'localhost';
const url = url_home + '/api/ru/news/';
fetch(url)
.then(response => response.json())
.then(data => {
		for (var i = 0; i < data.results.length; i++) {

			var newpubdate = data.results[i].pub_date;

			newpubdate = newpubdate.replace('T',' ');

			var newsid = data.results[i].id;
			var newsdescription = data.results[i].content_ru;
			var newsbackground = data.results[i].image;

			$('.news__wrapper > .container > .row > .col-md-12:first-child').after(
				'<div class="col-md-3">'
				+ '<div class="news-item__box">'
					+	'<div class="news-item-data__box">' + newpubdate + '</div>'
						+ '<div class="news-item-banner__box" style="background: url(' + newsbackground + ');">'
							+ '<a id="' + newsid + '" class="news-item-banner-link" href="/item-news.html">Читати</a>'
						+ '</div>'
						+ '<div class="news-item-info__box">' + newsdescription + '</div>'
					+ '</div>'
				+ '</div>'
				);
			var lenght = $('.news__wrapper .col-md-3').length;
			if ( lenght == 8 ) {
				break
			}

		}
		$('.active-programm-allprogramm__box').click(function(event) {
			localStorage.setItem('urlapi', url_home);
		});
		$('.news-item-banner-link').click(function(event) {
			var myfirstDate = $(this).attr('id');
			var firstdata = myfirstDate;
			var myData = firstdata;
			localStorage.setItem( 'objectToPass', myData );
			localStorage.setItem( 'urlapi', url_home );
		});
		//

	})
//
const urlprogramm = url_home + '/api/ru/programs/';
fetch(urlprogramm)
.then(response => response.json())
.then(data => {
		for (var i = 0; i < data.results.length; i++) {

			var programtitle = data.results[i].title;
			var programdescription = data.results[i].content;
			var programbackground = data.results[i].image;
			var programmid = data.results[i].id;
			//
			var haveprice = data.results[i].pay_limit;
			var havemaxprice = data.results[i].paid_sum;
			//
			var readyprice= 100* haveprice/havemaxprice;

			var rounded = function(number){
				return +number.toFixed(0) + '%';
			}
			if ( readyprice < 22) {
				console.log(1);
			}
			$('.active-programms__wrapper > .container > .row > .col-md-12:first-child').after(
				'<div class="col-md-4">'
					+	'<div class="active-programm__box">'
						+	'<div class="active-programm__banner" style="background: url(' + programbackground + ');">'
							+	'<p class="active-programm-title__banner">' + programtitle + '</p>'
						+	'</div>'
						+	'<div class="active-programm__content">'
							+	'<p>' + programdescription + '</p>'
							+ '<a id="'+ programmid + '" href="/item-programms.html" class="active-programm-link__content"> Докладнiше </a>'
							+ '<div class="active-programm-price__box">'
								+ '<p>' + rounded(readyprice) + '</p>'
								+ '<p>' + Number(havemaxprice).toFixed(0) + 'грн' + '</p>'
							+ '</div>'
							+ '<div class="noneactive-priceblock__box" id="noneactive-priceblock__box' + programmid +'">'
								+ '<div class="active-priceblock__box" style="width:' + readyprice.toFixed(0) + '%' + '"> Зiбрано </div>'
							+ '</div>'
						+	'</div>'
					+	'</div>'
				+ '</div>'
				);

			var lenghtprogramms = $('.active-programms__wrapper .col-md-4').length;
			if ( lenghtprogramms == 3 ) {
				break;
			}

			// $('.active-programm__content p:empty').remove();

		}
		$('.active-programm-allprogramm__box').click(function(event) {
			localStorage.setItem('urlapi', url_home);
		});
		$('.active-programm-link__content').click(function(event) {
			var myfirstDate = $(this).attr('id');
			var firstdata = myfirstDate	;
			var myData = firstdata;
			localStorage.setItem( 'objectToPass', myData );
			localStorage.setItem( 'urlapi', url_home );
		});
		//

	})