var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 7,
  styles: [
      {
          featureType: "road",
          elementType: "labels",
          stylers: [ { visibility: "off" } ]
      }
  ],
  center: new google.maps.LatLng(35.88, -78.78),
  mapTypeId: google.maps.MapTypeId.TERRAIN
});
