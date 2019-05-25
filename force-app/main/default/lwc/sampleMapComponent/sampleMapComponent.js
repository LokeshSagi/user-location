/* eslint-disable no-debugger */
/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';

export default class SampleMapComponent extends LightningElement {
    // Default is no markers
    @track mapMarkers = [];

    // Called when component is displayed
    connectedCallback() {
        navigator.geolocation.getCurrentPosition(this.success, this.error);
    }

    // Update the map marker
    success(position) {
        if (position) {
            //console.log('position -> ' + position.entries());
            this.mapMarkers = [
                {
                    location: {
                        'Latitude': position.coords.latitude,
                        'Longitude': position.coords.longitude
                    },
                    title: "My Location",
                },
            ]
            debugger;
            console.log('mapMarkers -> '+this.mapMarkers);
        }
        
    }

    error() {
        console.log('Failed');
    }
}