/* eslint-disable no-undef */
/* eslint-disable no-debugger */
/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';

export default class SampleMapComponent extends LightningElement {
    // Default is no markers
    @track mapMarkers = [{
        location: {
            'Latitude': 18.6734,
            'Longitude': 77.2342434
        },
        title: 'My Location 1'
    }];
    @track lat;
    @track long;

    // Called when component is displayed
    connectedCallback() {
        //let comp = this;
        /*this.mapMarkers.push({
            location: {
                'Latitude': 19.992,
                'Longitude': 77.7723
            },
            title: 'My Location 2'
        })*/


        /*function success(pos) {
            let component = this;
            var crd = pos.coords;
            //console.log('mapMarkers ---> '+this.mapMarkers);
            console.log('Your current position is:' + (crd));
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
            component.mapMarkers.push(
                {
                    
                    location: {
                        'Latitude': 18.6734,
                        'Longitude': 77.2342434
                    },
                    title: 'My Location 3'
                }
            )
        }

        function error(err){
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }*/

        navigator.geolocation.getCurrentPosition(success => {

            console.log('Your current position is:' + success);
            console.log(`Latitude : ${success.coords.latitude}`);
            console.log(`Longitude : ${success.coords.longitude}`);
            console.log(`More or less ${success.coords.accuracy} meters.`);
            this.lat = success.coords.latitude;
            this.long = success.coords.longitude;

        });
    }

    get getLocation() {
        var maps = [...this.mapMarkers];
        maps.push({
            location: {
                'Latitude': this.lat,
                'Longitude': this.long
            },
            title: 'My Location 2'
        });

        return maps;
    }


}