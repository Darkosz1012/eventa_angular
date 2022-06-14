import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    options = {
      layers: [
        tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', { maxZoom: 18, attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community' })
      ],
      zoom: 12,
      center: latLng(50.06104,19.9496169)
    };


  constructor() { }

  ngOnInit(): void {
  }
  onMapReady(map: any) {
    console.log("map ready")
    map.invalidateSize()
    setInterval(function() {
      map.invalidateSize();
   }, 1);
  }

}
