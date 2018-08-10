## ClearSkies

Currently, general aviation pilots have two options to get cloud base information
 when developing a flight plan. They can call flight service and have a report
 read to them over the phone, or they can use an app that returns the raw,
 unparsed METAR data along their route. Neither are especially helpful in displaying
  the relevant data in a clear or meaningful manner.  In response to this, we created
  ClearSkies, a simple, single-page app that allows a pilot to specify the waypoints
  of a flight plan (by unique airport identifier) and returns the cloud base information
  along the route.

The weather data is collected by Automated Weather Observation Stations (AWOS) at
airports which is sent to the FAA's Aviation Weather Center to be queried by our app's back end.

This app utilizes the Google Maps API to draw a map of the flight plan and plot
color-coded markers to represent the cloud conditions.  When a user clicks on one of these markers,
an information window containing that airfield's identifier, name, and coordinates will
populate, allowing the pilot to familiarize him or herself with the airfields along the
flight route.

This app was concieved by T. Robert Ward, III

This app was designed, built and tested by:  T. Robert Ward, Art Nestsiarenka & Peter Lawless
