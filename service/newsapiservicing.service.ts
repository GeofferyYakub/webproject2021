import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NewsapiservicingService {
  _http: any;
  topHeader: any;

  constructor(private_http:HttpClient) { }

NewsApiUrl= "https://newsapi.org/v2/top-headlines?country=ie&apiKey=2b86a67b82c445f499389ad6a0bd1f4f";

topHeading(): Observable<any>
{

  return this._http.get(this.NewsApiUrl);
}

}
