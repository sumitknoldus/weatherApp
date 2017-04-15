import {Component, AfterViewInit, OnInit, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first angular2-google-maps project';
  lat: number = 28.5355161;
  lng: number = 77.3910265;
  state:string;
  constructor(private appService: AppService
               ) {
   }

   weatherInfo(){
     this.appService.getWeatherData(this.state)
      .subscribe(data =>{
        console.log(data)
      }, error =>{})
   }

   onKeyup(event){
     this.state = event.target.value;
   }
}
