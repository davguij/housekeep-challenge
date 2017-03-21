import { BehaviorSubject } from 'rxjs/Rx';
import { AppService } from './app.service';
import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  calendarDays;
  durations = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8];
  searchOptions: FormGroup;
  selectedTimeSlot;
  booking;

  constructor(private appSrv: AppService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchOptions = this.formBuilder.group({
      visitDuration: ['', [Validators.required]],
      postcode: ['', [Validators.required]]
    });
  }

  doSubmit() {
    this.appSrv.getAvail(this.searchOptions.value).subscribe(data => {
      this.calendarDays = data;
    });
  }

  selectTimeSlot(calendarDate, startTime) {
    if (startTime.possible) {
      this.selectedTimeSlot = {
        day: calendarDate.day,
        startTime: {
          start: startTime.start,
          end: startTime.end
        },
        visitDuration: this.searchOptions.controls['visitDuration'].value,
        propertyId: 'ealdk1f9'
      };
    }
  }

  book() {
    this.appSrv.book(this.selectedTimeSlot).subscribe(response => {
      this.booking = response;
    });
  }

}
