import { Component, OnInit } from '@angular/core';
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
      console.log("countries", this.countries);
      console.log("Name", this.countries[0].name.official);
      this.loading = false;
    } catch (ex) {
      this.loading = false;
    }
  }

  showDialog(value: {}) {
    this.display = true;
    this.country = value;
    console.log("country", this.country);
    
  }

}
