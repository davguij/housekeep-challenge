import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {

  private apiUrl = 'https://private-anon-41c18bf6da-housekeepavailability.apiary-mock.com/';

  constructor(private http: Http) { }

  getAvail(searchOptions) {
    // let params: URLSearchParams;
    // params.set('weekBeginning', '2016-12-05');
    // params.set('visitDuration', searchOptions.visitDuration);
    // params.set('postcode', searchOptions.postcode);
    return this.http.get(
      this.apiUrl + `availability/?weekBeginning=2016-12-05&visitDuration=${searchOptions.visitDuration}&postcode=${searchOptions.postcode}`)
      .map(response => response.json())
      .catch((err) => Observable.throw(err));
  }

  book(bookingOptions) {
    return this.http.post(this.apiUrl + 'book/', bookingOptions)
      .map(response => response.json())
      .catch((err) => Observable.throw(err));
  }

}
