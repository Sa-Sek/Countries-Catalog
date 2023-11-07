import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DatabaseGwService } from '../core/services/database-gw.service';

@Injectable({
  providedIn: 'root'
})
export class RestcountriesService {

  constructor(
    private $db: DatabaseGwService
  ) { }

  getCoutries(filter?:any, sourceUri:string='all'):Promise<any>{
    return lastValueFrom(this.$db.query(filter, sourceUri));
  }
}
