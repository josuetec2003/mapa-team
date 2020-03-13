var _lat = 37.751436;
var _lon = -122.4460134;
var _map = null;
var _markerFA = null;
var coordsFer = {lat: 37.768280 , lng: -122.492875};


function init ()
{
	var gCoords = {lat: _lat, lng: _lon};
	 
	
	var mapConfig = {
		mapTypeId: 'roadmap', // roadmap, satellite, terrain, hybrid
		zoom: 13,
		center: gCoords
	};
	_map = new google.maps.Map($('#mapa')[0], mapConfig);


	var markerFer = new google.maps.Marker({

		map: _map,
		position: coordsFer,
		title: "Fernando Amador",
		draggable: false

	});

}

