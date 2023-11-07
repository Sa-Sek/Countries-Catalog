import { Component, OnInit } from '@angular/core';
import { reverse } from 'dns';
import { RestcountriesService } from 'src/app/api/restcountries.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  loading: boolean = true;
  countries: any[] = [];
  display: boolean = false;
  country: any = {};

  constructor(
    private $resCountry: RestcountriesService
  ) { }

  ngOnInit(): void {
    this.getPageInfo();
  }

  async getPageInfo() {
    this.loading = true;
    try {
      this.countries = await this.$resCountry.getCoutries({}, '/all');
      this.loading = false;
    } catch (ex) {
      this.loading = false;
    }
  }

  btnSortBy(value:string){
    if(value === 'Ascending'){
      this.countries.sort((a, b) => a.name.official.localeCompare(b.name.official));
    }
    if(value === 'Descending'){
      this.countries.sort((a, b) => b.name.official.localeCompare(a.name.official));
    }

  }

  showDialog(value: {}) {
    this.display = true;
    this.country = value;
  }

}
