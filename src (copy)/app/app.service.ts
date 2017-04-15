import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
    private getWeatherDataURL: string;


    constructor(private http: Http) {
        this.getWeatherDataURL = '';
    }

    getWeatherData(state:any): Observable<any> { 

        let url = "http://openweathermap.org/data/2.5/find?callback=jQuery19105347055149767086_1491996718331&q=" + state + "&type=like&sort=population&cnt=30&appid=ec3d62ec42b1dfd1d4bc11d7750751c0&_=1491996718332";
        return this.http
          .get(url)
          .map(this.extractData)
          .catch(this.handleError);
    }


    /**
     * Returns the data received in JSON format
     * @param res
     * @returns {*|{}}
     */
    private extractData(res: any) {
        let body = res.json();
        return body || {};
    }

    /**
     * Handles error if there is an error in http request
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError(error: any) {
        let errMsg: string;
        try {
            if(JSON.parse(error._body).message) {
                errMsg = JSON.parse(error._body).message;
            } else {
                errMsg = 'Something went wrong. Please try again later.';
            }
        } catch(e){
            errMsg = 'Something went wrong. Please try again later.';
        }
        return Observable.throw(new Error(errMsg));
    }

}
