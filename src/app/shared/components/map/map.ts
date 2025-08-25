import { Component } from '@angular/core';
import { LeafletDirective, LeafletLayersDirective } from '@bluehalo/ngx-leaflet';
import { icon, Icon, latLng, marker, tileLayer } from 'leaflet';
@Component({
  selector: 'app-map',
  imports: [LeafletDirective, LeafletLayersDirective],
  templateUrl: './map.html',
})
export class Map {
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'BID' })
    ],
    zoom: 12,
    center: latLng(17.06542, -96.72365)
  };
  layers = [
    marker([17.06542, -96.72365], {
      icon: icon({
        ...Icon.Default.prototype.options,
        iconUrl: 'assets/marker-icon.png',
        iconRetinaUrl: 'assets/marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    })
  ];
}
