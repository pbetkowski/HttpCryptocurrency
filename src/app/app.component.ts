import { Component } from '@angular/core';
import { HserviceService } from './hservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private httpService: HserviceService) {

  }
   posts$: Array<Rate>;

  getAll() {
    this.posts$ = new Array();
    this.httpService.getPosts().subscribe(m => {
      for (let i = 1; i < m.rates.length - 1 ; i++) {
        this.posts$.push(new Rate(m.rates[i].asset_id_quote, m.rates[i].rate));
      }
    });
  }
}

export interface Post {
  asset_id_base: string;
  rates: Array<Rate>;
}

export class Rate {
 // time?: string;
  asset_id_quote: string;
  rate: number;

  constructor (assed: string, rate: number) {
    this.asset_id_quote = assed;
    this.rate = rate;
  }
}

