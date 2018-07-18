import { Component, OnInit } from '@angular/core';
import { HserviceService } from '../../hservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  constructor(private httpService: HserviceService) {

  }
   posts$: Array<Rate>;

  getAll() {
    this.posts$ = new Array();
    this.httpService.getPosts().subscribe(m => {
      for (let i = 1; i < 10 ; i++) {
        this.posts$.push(new Rate(m.rates[i].asset_id_quote, m.rates[i].rate));
      }
    }, err => {
      alert('Błąd komunikacji z API');
    });
    // setTimeout( () => this.getAll(), 20000);
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
