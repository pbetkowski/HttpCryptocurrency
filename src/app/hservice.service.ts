import { Injectable } from '@angular/core';
// import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './List/list/list.component';

@Injectable({
  providedIn: 'root'
})
export class HserviceService {

  private headers1 = new HttpHeaders().set('X-CoinAPI-Key', ' FF6D81CD-C70B-4244-BE7C-8FC1C4EEB4DD');

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post>('https://rest.coinapi.io/v1/exchangerate/BTC', {headers : this.headers1});
  }
}

