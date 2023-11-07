import { Component, OnInit } from '@angular/core';
import { RestcountriesService } from 'src/app/api/restcountries.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  loading: boolean = true;

  constructor(
    private $resCountry: RestcountriesService
  ) { }

  ngOnInit(): void {
    this.getPageInfo();
  }

  async getPageInfo() {
    this.loading = true;
    try {
      let resCountries: any = await this.$resCountry.getCoutries({},'/all');
      console.log("resCountries", resCountries);      
      this.loading = false;
    } catch (ex) {
      this.loading = false;
    }
  }

}
