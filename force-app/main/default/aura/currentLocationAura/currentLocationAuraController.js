({
    doInit: function (component, event, helper) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success);
            function success(position) {
                var lat = position.coords.latitude;
                component.set("v.userLatitude", lat);
                var long = position.coords.longitude;
                component.set("v.userLongitude", long);
                component.set('v.mapMarkers', [
                    {
                        location: {
                            'Latitude': component.get("v.userLatitude"),
                            'Longitude': component.get("v.userLongitude")
                        },
                        markersTitle: 'My Location'
                    }
                ])
            }
        } else {
            error('Geo Location is not supported');
        }


    }
})
