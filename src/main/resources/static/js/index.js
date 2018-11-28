$(function() {
	
	$("#selectCityid").change(function() {
		var cityid = $("#selectCityid").val();
		var url ='/report/cityId/' + cityid;
		//alert(url);
		window.location.href = url; 
	});
	
})