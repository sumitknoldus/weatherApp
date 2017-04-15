import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';
import {Component, AfterViewInit, OnInit, Inject} from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'My first angular2-google-maps project';
  lat: number = 28.5355161;
  lng: number = 77.3910265;
  state='andhra pradesh';
  temp:number;
  humidity:string;
  pressure:string;
  weather:string;
  desc: string;
  name:string;
  constructor( private appService: AppService
               ) {
      
   }

   ngOnInit(){
     this.weatherInfo();
   }

   weatherInfo(){
     this.appService.getWeatherData(this.state).subscribe(data =>{
        this.lat = data.list[0].coord.lat;
        this.lng = data.list[0].coord.lon;
        this.temp = data.list[0].main.temp-273.15;
        this.humidity = data.list[0].main.humidity;
        this.pressure = data.list[0].main.pressure;
        this.weather = data.list[0].weather[0].main;
        this.desc = data.list[0].weather[0].description;
        this.name = data.list[0].name;
        console.log('Here is all the data:'+JSON.stringify(data));
     }, error =>{
         console.error('ERROR:',error);
     })
   }
}
