$(document).on('keypress', 'input,select', function(e) {
    if (e.which == 13) {
        e.preventDefault();
        // Get all focusable elements on the page
        var $canfocus = $(':focusable');
        var index = $canfocus.index(this) + 1;
        if (index >= $canfocus.length) index = 0;
        $canfocus.eq(index).focus();
    }
});



var airfields = [];
$.ajax({type: "GET",
        url: '/airfields/',
        traditional: true,
    }).done(function(response) {
        airfields = response
    })



function is_valid_airfield(identifier) {
  return airfields.indexOf(identifier) != -1
}



function add_leg() {
  $('.get_only_one').each(function() {
    if (!is_valid_airfield('K' + this.value.toUpperCase()) && !$(this).hasClass('first_input')) {
      $(this).parent().remove();
    }
  });
  var target = $('#leg_boxes');
  var newfield = $('<div class="userinput"></div>');
  newfield.append("<input type='text' name='waypoint' class='get_only_one' style='text-transform:uppercase' placeholder='TAB for new waypoint' autofocus/><button class='leg_button delete'><img class='glyph' src='/static/img/deleteglyph.svg'></button>");
  target.append(newfield);
  get_airfields();
}



$(document).on('click', '.delete', function(e) {
  $(this).parent().remove();
  get_airfields();
})



$("#leg_boxes").on('keydown', 'input,select', function(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode == 9) {
        add_leg();
    }
});


function get_airfields() {
  var allAirfields = [];
  $('.get_only_one').each(function() {
    var airportID = 'K' + this.value.toUpperCase()
    if (is_valid_airfield(airportID)) {
      $.ajax({type: "GET",
              url: '/instant_plot/',
              data : {'airportID': airportID},
              traditional: true,
          }).done(function(response) {
            allAirfields.push(response);
            plot_to_map(allAirfields);
          })
    }
  })
}


var markers = [];

function plot_to_map(allAirfields) {
  setMapOnAll(null);
  markers = [];
  allAirfields.forEach(function(airfield) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(airfield.latitude, airfield.longitude),
    });
    markers.push(marker);
    if(markers.length > 1){
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
         bounds.extend(markers[i].getPosition());
            }
        map.fitBounds(bounds);
    }
    setMapOnAll(map);
  })
}


function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
