import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  calendarDays;
  constructor(private appSrv: AppService) { }

  ngOnInit() {
    this.calendarDays = this.appSrv.getAvail();
  }
}
