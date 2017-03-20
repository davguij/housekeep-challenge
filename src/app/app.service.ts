import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getAvail() {
    return this.http.get(
      'https://private-anon-41c18bf6da-housekeepavailability.apiary-mock.com/availability/?weekBeginning=2016-12-05&visitDuration=2.5&postcode=EC1R%203BU'
    ).map(response => response.json());
  }

}
